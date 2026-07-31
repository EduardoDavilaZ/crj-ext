import MainLayout from '../layouts/MainLayout';
import { useState } from 'react';
import { feedbackService } from '../services/feedbackService';
import FeedbackModal from '../components/modals/FeedbackModal';
import swal from 'sweetalert';

export default function Help() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment.trim()) {
            swal("Atención", "El comentario no puede estar vacío.", "warning");
            return;
        }

        setLoading(true);
        try {
            const response = await feedbackService.sendFeedback({
                name: name.trim() || 'Anónimo',
                comment: comment.trim()
            });

            const code = response.code || response.data?.code;

            swal({
                title: "¡Enviado con éxito!",
                text: `Tu código único de 4 dígitos es: [ ${code} ]. Guárdalo para ver la respuesta.`,
                icon: "success",
                button: "Entendido",
            });

            setName('');
            setComment('');
        } catch (error) {
            swal("Error", "No se pudo enviar el comentario. Inténtalo de nuevo.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1'>Bienvenid@ al canal de soporte y ayuda al voluntariado</h1>
                <p className='subtitle'>
                    En Cruz Roja, tu bienestar y tu experiencia en los proyectos son fundamentales. Este espacio está pensado exclusivamente para ti. Queremos asegurarnos de que cuentas con un canal directo, transparente y seguro donde puedas expresarte con total libertad.
                </p>

                <section>
                    <div className='row'>
                        <div className='col-12 col-md-8'>
                            <h2 className='h2'>¿Sobre qué puedes contactarnos?</h2>
                            <p>Puedes escribirnos siempre que lo necesites para tratar cualquier asunto relacionado con tu labor voluntaria, entre ellos:</p>
                            <ul>
                                <li><strong>Incidencias o problemas operativos</strong>: Si surge algún inconveniente con los turnos, los accesos, las ubicaciones o la coordinación de las actividades.</li>
                                <li><strong>Reclamos y quejas</strong>: Si has vivido o presenciado alguna situación incómoda, un desacuerdo o cualquier circunstancia que consideres que no está funcionando como debería.</li>
                                <li><strong>Sugerencias de mejora</strong>: Tus ideas son muy valiosas para optimizar las actividades, la dinámica de los centros o la organización general del proyecto.</li>
                                <li><strong>Comentarios generales o apoyo personal</strong>: Si simplemente quieres compartir cómo te sientes, hacer un comentario sobre tu experiencia o necesitas orientación sobre tus tareas.</li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-4 center'>
                            <img src="https://cadenaser.com/resizer/v2/5TPPT5G2INMXTDPTSXCPH2YKFU.jpg?auth=cfdcb1023d942eb14e93f5139f38d40edec0761528163decc6a63fd619d870d9" alt="crj" className='shadow-md rounded-2 w-50' />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className='h2'>¿Hablamos?</h2>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>

                        <div className='col p-3'>
                            <div className='contact-card row'>
                                <div className='contact-person center'>
                                    <i className="bi bi-person-check"></i>
                                </div>
                                <div className='contact-data'>
                                    <h4>Montaña Durán</h4>
                                    <small>Dirección de Voluntariado</small>
                                    <a href="https://wa.me/34607081978?text=Hola,%20tengo%20una%20duda%20sobre%20el%20voluntariado." target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-whatsapp"></i> Abrir chat de WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col p-3'>
                            <div className='contact-card row m-0'>
                                <div className='contact-person center'>
                                    <i className="bi bi-person-check"></i>
                                </div>
                                <div className='contact-data'>
                                    <h4>Eduardo Davila</h4>
                                    <small>Voluntario</small>
                                    <a href="https://wa.me/34620094023?text=Hola,%20tengo%20una%20duda%20sobre%20el%20voluntariado." target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-whatsapp"></i> Abrir chat de WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section>
                    <h2 className='h2'>Buzón de Sugerencias y Comentarios Anónimos</h2>

                    <div className='row row-cols-1 row-cols-md-2'>
                        <div className='col'>
                            <span className='strong-text'>¿Prefieres expresarte con total libertad y confidencialidad?</span>
                            <p className='mb-0'>
                                Si lo prefieres, puedes enviarnos tu comentario, sugerencia o incidencia de forma completamente anónima. Tu identidad estará protegida en todo momento.
                            </p>
                            <span className='strong-text'>¿Quieres saber si hemos leído o respondido tu mensaje?</span>
                            <p className='mb-0'>
                                Al enviarlo, se te asignará un código único de 4 dígitos. Guárdalo bien; podrás introducirlo más adelante para consultar si el equipo de administración ha dado respuesta a tu aportación sin necesidad de revelar quién eres.
                            </p>

                            <button 
                                type="button" 
                                className="btn-gray d-block py-2 my-3 rounded-3"
                                onClick={() => setShowModal(true)}
                            >
                                <i className="bi bi-search m-1"></i> Consultar estado de mi comentario anónimo
                            </button>

                            <span className='phrase'>¡Gracias por ayudarnos a mejorar cada día con tu voz y tu compromiso!</span>
                        </div>

                        <div className='col'>
                            <form onSubmit={handleSubmit} className='form'>
                                <input 
                                    type="text" 
                                    className="form-control my-2" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    placeholder='Nombre anónimo (Ej.: voluntario123)' 
                                />
                                <textarea 
                                    className='form-control my-2' 
                                    rows="8" 
                                    value={comment} 
                                    onChange={(e) => setComment(e.target.value)} 
                                    placeholder='Tu comentario' 
                                    required
                                ></textarea>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-accent px-4 my-2 fw-semibold" disabled={loading}>
                                        {loading ? "Enviando..." : "Enviar"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <FeedbackModal show={showModal} onClose={() => setShowModal(false)} />
        </MainLayout>
    );
}