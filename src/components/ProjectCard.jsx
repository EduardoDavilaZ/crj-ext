import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, slug, link, formLink, shifts = [], isActive = true, onOpenModal }) {

    const iconSrc = new URL(`../assets/img/projects/${slug}/icon.png`, import.meta.url).href;
    const bannerBg = `url(${new URL(`../assets/img/projects/${slug}/banner.webp`, import.meta.url).href})`;

    return (
        <div className={`card h-100 d-flex flex-column p-4 ${styles.projectCard}`}>
            <div className={`p-3 rounded-3 mb-3 ${styles.cardHeader}`} style={{ backgroundImage: bannerBg }}>
                <Link to={link} className="d-inline-block text-decoration-none">
                    <img src={iconSrc} alt={`Logo ${title}`} className={`${styles.projectIcon}`} />
                </Link>
            </div>
            
            <div className="text-center mb-3">
                <h3 className="title-font fs-3 text-danger mb-2">{title}</h3>
                <p className="text-muted small">{description}</p>
            </div>

            <div className="bg-light p-3 rounded-3 mb-3 flex-fill border">
                <span className="d-block fw-bold text-uppercase text-secondary mb-2" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
                    Próximos Turnos:
                </span>
                
                {shifts.length > 0 ? (
                    shifts.map((shift, idx) => (
                        <div key={idx} className="d-flex justify-content-between align-items-center small py-1 border-bottom">
                            <span className="text-dark fw-semibold">{shift.day}</span>
                            <span className="text-muted">({shift.time})</span>
                        </div>
                    ))
                ) : (
                    <p className="small text-muted mb-0">No hay turnos activos ahora mismo.</p>
                )}
            </div>

            <div className="mt-auto d-flex flex-column gap-2">
                <Link to={link} className="w-100 btn-gray py-2 rounded-3 text-decoration-none">
                    <i className="bi bi-search-heart"></i> ¿Quieres saber más?
                </Link>

                <div className="d-flex gap-2">
                    <button 
                        type="button" 
                        onClick={() => isActive && onOpenModal()} 
                        className={`w-50 py-2 rounded-3 ${isActive ? 'btn-gray' : 'btn-secondary opacity-50 cursor-not-allowed'}`}
                        disabled={!isActive}
                    >
                        <i className="bi bi-calendar2-check"></i> Cuadrante
                    </button>
                    
                    {isActive ? (
                        <Link to={formLink || `/apuntarme/${slug}`} className="w-50 btn-accent py-2 rounded-3 text-decoration-none">
                            <i className="bi bi-pencil-square"></i> Apuntarme
                        </Link>
                    ) : (
                        <span className="w-50 btn btn-secondary opacity-50 py-2 rounded-3 text-center cursor-not-allowed" style={{ pointerEvents: 'none' }}>
                            <i className="bi bi-pencil-square"></i> Apuntarme
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}