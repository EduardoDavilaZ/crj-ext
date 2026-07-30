import { Link } from 'react-router-dom';
import logo from '../assets/logo-crj.png';
import emoji from '../assets/emoji-ext.png';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom position-sticky top-0 ${styles.navbarSticky}`}>
            <div className="container d-flex justify-content-between align-items-center">
                
                <Link className="navbar-brand d-flex flex-column flex-md-row align-items-center gap-1 m-0" to="/">
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Logo Cruz Roja Juventud" className={`img-fluid rounded ${styles.logoImg}`} />
                    </div>
                    <span className={`fw-bold text-dark px-4 ${styles.brandText}`}>
                        ❤️Comarca Tierras de Badajoz 
                        <img src={emoji} alt="Logo Cruz Roja Juventud" className={`img-fluid ${styles.emoji}`} />
                        ❤️
                    </span>
                </Link>
                
                <button className="navbar-toggler m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse w-100 w-lg-auto" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-3 mt-3 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold text-dark d-flex align-items-center gap-1" to="/">
                                <i className="bi bi-house-door"></i> Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold text-dark d-flex align-items-center gap-1" to="/ayuda">
                                <i className="bi bi-question-circle"></i> Ayuda
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}