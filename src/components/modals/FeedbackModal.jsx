import { useState, useRef } from 'react';
import { feedbackService } from '../../services/feedbackService';
import swal from 'sweetalert';

export default function FeedbackModal({ show, onClose }) {
    const [digits, setDigits] = useState(['', '', '', '']);
    const [feedbackData, setFeedbackData] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);

    if (!show) return null;

    const handleChange = (index, value) => {
        // Forzar mayúsculas y quedarse solo con el último caracter si escriben normal
        const upperValue = value.toUpperCase();
        const lastChar = upperValue.charAt(upperValue.length - 1);
        
        const newDigits = [...digits];
        newDigits[index] = lastChar;
        setDigits(newDigits);

        // Auto-foco al siguiente input si escribe algo
        if (lastChar && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Funcionalidad para pegar un código completo (ej: "AB01")
    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').trim().toUpperCase();
        
        if (pasteData.length > 0) {
            const newDigits = ['', '', '', ''];
            for (let i = 0; i < Math.min(pasteData.length, 4); i++) {
                newDigits[i] = pasteData[i];
            }
            setDigits(newDigits);
            
            // Enfocar el último input rellenado o el último disponible
            const nextIndex = Math.min(pasteData.length, 3);
            inputRefs.current[nextIndex].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleConsult = async () => {
        const fullCode = digits.join('');
        if (fullCode.length < 4) {
            swal("Atención", "Por favor, introduce los 4 dígitos completos del código.", "warning");
            return;
        }

        setLoading(true);
        try {
            const data = await feedbackService.getFeedbackByCode(fullCode);
            setFeedbackData(data); // Contiene name, comment y response
        } catch (error) {
            swal("No encontrado", "No existe ningún comentario asociado a este código.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setDigits(['', '', '', '']);
        setFeedbackData(null);
        onClose();
    };

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4 rounded-3 shadow">
                    
                    <div className="modal-header border-0 pb-0">
                        <h5 className="modal-title fw-bold">
                            {feedbackData ? "Estado de tu comentario" : "Introduce tu código"}
                        </h5>
                        <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                    </div>

                    <div className="modal-body text-center">
                        {!feedbackData ? (
                            <div>
                                <p className="text-muted small mb-4">Escribe o pega el código de 4 dígitos que se te asignó al enviar tu mensaje anónimo.</p>
                                
                                <div className="d-flex justify-content-center gap-2 mb-4" onPaste={handlePaste}>
                                    {digits.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            ref={(el) => (inputRefs.current[idx] = el)}
                                            onChange={(e) => handleChange(idx, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(idx, e)}
                                            className="form-control text-center fs-3 fw-bold"
                                            style={{ width: '50px', height: '60px' }}
                                        />
                                    ))}
                                </div>

                                <button 
                                    type="button" 
                                    className="btn btn-dark w-100 py-2 fw-semibold"
                                    onClick={handleConsult}
                                    disabled={loading}
                                >
                                    {loading ? "Buscando..." : "Consultar respuesta"}
                                </button>
                            </div>
                        ) : (
                            <div className="text-start">
                                <div className="alert alert-light border mb-2">
                                    <small className="text-muted d-block fw-bold">Nombre anónimo: {feedbackData.name}</small>
                                </div>

                                <div className="alert alert-light border mb-3">
                                    <small className="text-muted d-block fw-bold">Tu comentario:</small>
                                    <p className="mb-0">{feedbackData.comment}</p>
                                </div>

                                <div className="alert alert-success border-success">
                                    <small className="text-success d-block fw-bold">Respuesta del administrador:</small>
                                    <p className="mb-0">
                                        {feedbackData.response || "Aún no hay respuesta del administrador para este comentario. ¡Vuelve a revisar más tarde!"}
                                    </p>
                                </div>

                                <button 
                                    type="button" 
                                    className="btn btn-outline-secondary w-100 mt-3"
                                    onClick={() => setFeedbackData(null)}
                                >
                                    Consultar otro código
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}