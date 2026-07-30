import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, slug, link, formLink, shifts = [] }) {
    // Generamos las rutas dinámicas de las imágenes con Vite
    const iconSrc = new URL(`../assets/img/${slug}/icon.webp`, import.meta.url).href;
    const bannerBg = `url(${new URL(`../assets/img/${slug}/banner.webp`, import.meta.url).href})`;

    return (
        <div className={`card h-100 d-flex flex-column p-4 ${styles.projectCard}`}>
            {/* Cabecera con banner e icono */}
            <div className={`p-3 rounded-3 mb-3 ${styles.cardHeader}`} style={{ backgroundImage: bannerBg }}>
                <img src={iconSrc} alt={`Logo ${title}`} className={`${styles.projectIcon}`} />
            </div>
            
            <div className="text-center mb-3">
                <h3 className="title-font fs-3 text-danger mb-2">{title}</h3>
                <p className="text-muted small">{description}</p>
            </div>

            {/* Mini cuadrante de turnos */}
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

            {/* Botones de acción con rutas corregidas */}
            <div className="mt-auto d-flex flex-column gap-2">
                {/* Botón ¿Quieres saber más? -> Lleva a la InfoPage de ese proyecto */}
                <Link to={link} className="w-100 btn-gray py-2 rounded-3 text-decoration-none">
                    <i className="bi bi-search-heart"></i> ¿Quieres saber más?
                </Link>

                <div className="d-flex gap-2">
                    {/* Botón Cuadrante -> Lleva a la InfoPage con un ancla opcional */}
                    <Link to={`${link}#cuadrante`} className="w-50 btn-gray py-2 rounded-3 text-decoration-none">
                        <i className="bi bi-calendar2-check"></i> Cuadrante
                    </Link>
                    
                    {/* Botón Apuntarme -> Lleva al formulario específico de ese proyecto */}
                    <Link to={formLink || `/apuntarme/${slug}`} className="w-50 btn-accent py-2 rounded-3 text-decoration-none">
                        <i className="bi bi-pencil-square"></i> Apuntarme
                    </Link>
                </div>
            </div>
        </div>
    );
}