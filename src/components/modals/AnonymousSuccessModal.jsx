import { useState } from 'react';
import { useEffect } from 'react';

export default function AnonymousSuccessModal({ show, onClose, feedbackCode }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!show) {
            setCopied(false);
        }
    }, [show]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(feedbackCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            console.error("Error al copiar al portapapeles", err);
        }
    };

    if (!show) return null;

    return (
        <div 
            className="modal show d-block" 
            tabIndex="-1" 
            style={{ 
                backgroundColor: 'rgba(30, 36, 48, 0.6)', 
                backdropFilter: 'blur(4px)', 
                zIndex: 1050 
            }}
        >
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div 
                    className="modal-content border-0 shadow-lg text-center p-4 position-relative overflow-hidden" 
                    style={{ 
                        borderRadius: 'var(--radius)', 
                        backgroundColor: 'var(--card)', 
                        zIndex: 1052 
                    }}
                >
                    <button 
                        type="button" 
                        className="btn-close position-absolute top-0 end-0 m-3" 
                        aria-label="Close" 
                        onClick={onClose}
                        style={{ zIndex: 3 }}
                    ></button>

                    <div className="my-3 position-relative" style={{ zIndex: 2 }}>
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '70px', height: '70px', backgroundColor: '#6cb9b620', color: 'var(--c-primary)' }}>
                            <i className="bi bi-shield-lock-fill fs-2"></i>
                        </div>
                        
                        <h3 className="fw-bold my-2 h2" style={{ color: 'var(--c-deep)' }}>
                            ¡Comentario anónimo enviado!
                        </h3>

                        <p className="subtitle px-2 my-3" style={{ color: 'var(--muted)' }}>
                            Tu identidad está protegida. Guarda tu código único para consultar la respuesta del equipo más adelante:
                        </p>

                        <div className="p-3 my-3 rounded-3 d-flex align-items-center justify-content-between border" style={{ backgroundColor: 'var(--background, #f8f9fa)' }}>
                            <span className="font-monospace fs-3 fw-bold tracking-wider" style={{ color: 'var(--c-deep)' }}>
                                {feedbackCode || '----'}
                            </span>
                            <button 
                                type="button" 
                                className={`btn ${copied ? 'btn-success' : 'btn-outline-secondary'} btn-sm px-3 btn-gray fw-semibold`}
                                onClick={handleCopy}
                            >
                                <i className={`bi ${copied ? 'bi-check-lg' : 'bi-clipboard'} me-1`}></i>
                                {copied ? '¡Copiado!' : 'Copiar'}
                            </button>
                        </div>

                        <div className="mt-4">
                            <button 
                                type="button" 
                                className="btn btn-accent w-100 py-2 fw-semibold"
                                onClick={onClose}
                            >
                                Entendido, ya lo he guardado
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}