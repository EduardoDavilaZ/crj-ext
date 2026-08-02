import { useEffect, useState } from 'react';
import { triggerConfetti } from '../../utils/confetti';

const successMessages = [
    { title: "¡Inscripción registrada con éxito!", text: "Gracias por dar el paso y unirte a esta gran aventura." },
    { title: "¡Ya estás dentro!", text: "Tu energía y compromiso cambian vidas cada día. ¡Gracias por participar!" },
    { title: "¡Todo listo!", text: "Gracias por sumar tu granito de arena. Contigo el mundo es un poquito mejor." },
    { title: "¡Inscripción completada!", text: "Estamos felices de contar contigo en este proyecto. ¡A por todas!" },
    { title: "¡Qué alegría tenerte a bordo!", text: "Gracias por tu generosidad y tus ganas de ayudar." },
    { title: "¡Apuntado con éxito!", text: "Gracias por elegir marcar la diferencia este año." },
    { title: "¡Ya formas parte del equipo!", text: "Gracias por tu tiempo, tu ilusión y tu compromiso." },
    { title: "¡Inscripción exitosa!", text: "Gracias por inspirarnos y sumarte a esta causa con una sonrisa." },
    { title: "¡Listo!", text: "Tu participación hace que este proyecto cobre vida. ¡Muchísimas gracias!" },
    { title: "¡Todo correcto!", text: "Gracias por creer en un cambio real y decidir actuar con nosotros." },
    { title: "¡Inscrito con éxito!", text: "Prepárate para vivir una experiencia inolvidable. ¡Gracias!" },
    { title: "¡Ya estás con nosotros!", text: "Gracias por tu valentía y tus ganas de transformar la realidad." },
    { title: "¡Completado con éxito!", text: "Gracias por regalar tu tiempo y tu talento a quienes más lo necesitan." },
    { title: "¡Inscripción registrada!", text: "Gracias por ser el latido de este proyecto. ¡Bienvenid@!" },
    { title: "¡Todo listo!", text: "No hay palabras para agradecer tus ganas de aportar y construir comunidad." }
];

export default function SuccessModal({ show, onClose }) {
    const [currentMessage, setCurrentMessage] = useState(successMessages[0]);

    useEffect(() => {
        if (show) {
            const randomObj = successMessages[Math.floor(Math.random() * successMessages.length)];
            setCurrentMessage(randomObj);
            
            // Un pequeño retraso para asegurar que el DOM del modal ya se ha pintado en móviles antes de lanzar las partículas
            const timer = setTimeout(() => {
                triggerConfetti();
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!show) return null;

    return (
        <div 
            className="modal show d-block" 
            tabIndex="-1" 
            style={{ 
                backgroundColor: 'rgba(30, 36, 48, 0.6)', 
                backdropFilter: 'blur(4px)', 
                cursor: 'pointer',
                zIndex: 1050 
            }}
            onClick={onClose}
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
                    {/* Contenedor de partículas integrado dentro de la tarjeta para móviles */}
                    <div 
                        id="tsparticles-confetti" 
                        style={{ 
                            position: 'absolute', 
                            inset: 0, 
                            pointerEvents: 'none', 
                            zIndex: 1 
                        }}
                    ></div>

                    {/* Contenido de la alerta con zIndex superior para que esté por encima del confeti */}
                    <div className="my-3 position-relative" style={{ zIndex: 2 }}>
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '70px', height: '70px', backgroundColor: '#6cb9b620', color: 'var(--c-primary)' }}>
                            <i className="bi bi-heart-fill fs-2"></i>
                        </div>
                        
                        <h3 className="fw-bold my-2 h2" style={{ color: 'var(--c-deep)' }}>
                            {currentMessage.title}
                        </h3>

                        <p className="subtitle px-2 my-4" style={{ color: 'var(--muted)' }}>
                            {currentMessage.text}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}