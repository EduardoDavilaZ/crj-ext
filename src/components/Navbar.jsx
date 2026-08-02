import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-crj.png';
import emoji from '../assets/emoji-ext.png';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom position-sticky top-0 ${styles.navbarSticky}`}>
            <div className={`container d-flex justify-content-between align-items-center ${styles.navContainer}`}>

                <NavLink
                    className={`navbar-brand d-flex flex-column flex-md-row align-items-center gap-1 m-0 ${styles.brand}`}
                    to="/"
                    end
                >
                    <div className="d-flex align-items-center">
                        <img
                            src={logo}
                            alt="Logo Cruz Roja Juventud"
                            className={`img-fluid rounded ${styles.logoImg}`}
                        />
                    </div>

                    <span className={`fw-bold text-dark px-4 ${styles.brandText}`}>
                        ❤️ Comarca Tierras de Badajoz
                        <img
                            src={emoji}
                            alt=""
                            className={`img-fluid ${styles.emoji}`}
                        />
                        ❤️
                    </span>
                </NavLink>

                <button
                    className="navbar-toggler m-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse w-100 w-lg-auto" id="navbarNav">
                    <ul className={`navbar-nav ms-auto align-items-lg-center gap-3 mt-3 mt-lg-0 ${styles.mobileNav}`}>

                        <li className="nav-item">
                            <NavLink
                                end
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link fw-semibold d-flex align-items-center gap-1 ${styles.navLink} ${isActive ? styles.active : 'text-dark'}`
                                }
                            >
                                <i className="bi bi-house-door"></i>
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/ayuda"
                                className={({ isActive }) =>
                                    `nav-link fw-semibold d-flex align-items-center gap-1 ${styles.navLink} ${isActive ? styles.active : 'text-dark'}`
                                }
                            >
                                <i className="bi bi-question-circle"></i>
                                Ayuda
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}