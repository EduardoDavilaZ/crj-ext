import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-crj-img.png';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={`row bg-white rounded-3 align-items-center ${styles.heroContainer}`}>
            <div className="col col-12 col-md-7 p-4 text-center">
                <span className={styles.heroBadge}>Bienvenido/a a Cruz Roja Juventud</span>
                <h1 className={`${styles.heroTitle}`}>Jóvenes que 
                    <span className={`${styles.heroTitleAccent}`}> transforman</span>
                </h1>
                <p className={`mb-4 ${styles.heroDescription}`}>
                    Súmate al voluntariado que mueve Badajoz. Comparte tu energía, participa en proyectos reales y haz que las cosas pasen en tu ciudad.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a 
                        href="https://www2.cruzroja.es/alta-voluntario-web" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-accent d-flex align-items-center gap-2 px-4 py-2 rounded-3"
                    >
                        <i className="bi bi-heart-fill"></i> Hazte voluntario
                    </a>

                    <a 
                        href="https://www.cruzrojajuventud.org/quienes-somos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-gray px-4 py-2 rounded-3"
                    >
                        Conócenos más
                    </a>
                </div>
            </div>

            <div className="col col-12 col-md-5 text-center">
                <img src={heroImg} alt="Jóvenes de Cruz Roja Juventud" className={`img-fluid  rounded ${styles.heroImg}`} />
            </div>
        </div>
    );
}