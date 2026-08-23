import styles from './PrinciplesMarquee.module.css';

const principles = [
    'Humanidad',
    'Imparcialidad',
    'Neutralidad',
    'Independencia',
    'Carácter Voluntario',
    'Unidad',
    'Universalidad',
];

export default function PrinciplesMarquee() {
    return (
        <section
            className={styles.marquee}
            aria-label="Principios fundamentales de Cruz Roja"
        >
            <div className={styles.track}>
                {/* Primera copia */}
                <div className={styles.group}>
                    {principles.map((principle) => (
                        <span
                            className={styles.item}
                            key={principle}
                        >
                            {principle}
                            <span className={styles.separator}><i className="bi bi-star"></i></span>
                        </span>
                    ))}
                </div>

                {/* Segunda copia para crear el bucle infinito */}
                <div
                    className={styles.group}
                    aria-hidden="true"
                >
                    {principles.map((principle) => (
                        <span
                            className={styles.item}
                            key={`duplicate-${principle}`}
                        >
                            {principle}
                            <span className={styles.separator}><i className="bi bi-star"></i></span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}