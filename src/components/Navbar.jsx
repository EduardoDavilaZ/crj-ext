import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-crj.png';
import emoji from '../assets/emoji-ext.png';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);
    const closeNavbar = () => setIsOpen(false);

    return (
        <>
            <nav className={`navbar bg-white shadow-sm border-bottom sticky-top ${styles.navbarMain}`}>
                <div className={`container d-flex justify-content-between align-items-center ${styles.navContainer}`}>

                    <NavLink
                        to="/"
                        onClick={closeNavbar}
                        className={`text-decoration-none d-flex flex-column flex-lg-row align-items-center gap-1 gap-lg-2 ${styles.brandMain}`}
                    >
                        <img 
                            src={logo} 
                            alt="Logo Cruz Roja Juventud" 
                            className={styles.logoImg} 
                        />
                        <span className={`fw-bold text-dark d-flex align-items-center text-center ${styles.brandText}`}>
                            ❤️ Comarca Tierras de Badajoz 
                            <img 
                                src={emoji} 
                                alt="Bandera" 
                                className={styles.emojiImg} 
                            /> 
                            ❤️
                        </span>
                    </NavLink>

                    <div className="d-none d-lg-flex align-items-center gap-4">
                        <NavLink
                            end
                            to="/"
                            className={({ isActive }) =>
                                `text-decoration-none fw-semibold d-flex align-items-center gap-1 ${styles.navLink} ${isActive ? styles.active : 'text-dark'}`
                            }
                        >
                            <i className="bi bi-house-door"></i> Inicio
                        </NavLink>
                        
                        <NavLink
                            to="/ayuda"
                            className={({ isActive }) =>
                                `text-decoration-none fw-semibold d-flex align-items-center gap-1 ${styles.navLink} ${isActive ? styles.active : 'text-dark'}`
                            }
                        >
                            <i className="bi bi-question-circle"></i> Ayuda
                        </NavLink>
                    </div>

                    {!isOpen && (
                        <button
                            className={`btn border-0 p-0 shadow-none d-lg-none ${styles.hamburgerBtn}`}
                            onClick={toggleNavbar}
                            aria-label="Abrir Menú"
                        >
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </button>
                    )}

                </div>
            </nav>

            <div 
                className={`${styles.backdrop} ${isOpen ? styles.showBackdrop : ''}`}
                onClick={closeNavbar}
            ></div>

            <div className={`${styles.drawer} ${isOpen ? styles.showDrawer : ''}`}>
                
                <div className={`p-3 border-bottom bg-light position-relative d-flex flex-column align-items-center justify-content-center ${styles.drawerHeader}`}>

                    <button
                        className={`btn border-0 p-0 shadow-none ${styles.closeXBtn}`}
                        onClick={closeNavbar}
                        aria-label="Cerrar Menú"
                    >
                        <span className={styles.xBar1}></span>
                        <span className={styles.xBar2}></span>
                    </button>

                    <img src={logo} alt="Logo" className={styles.drawerLogo} />
                    <div className={`fw-bold text-dark mt-2 text-center ${styles.drawerBrandSub}`}>
                        ❤️ Comarca Tierras de Badajoz ❤️
                    </div>
                </div>

                <div className="d-flex flex-column flex-grow-1 p-0">
                    <NavLink
                        end
                        to="/"
                        onClick={closeNavbar}
                        className={({ isActive }) =>
                            `p-3 text-decoration-none fw-semibold border-bottom d-flex align-items-center gap-2 ${isActive ? styles.drawerActive : 'text-dark'}`
                        }
                    >
                        <i className="bi bi-house-door fs-5 text-danger"></i> Inicio
                    </NavLink>
                    
                    <NavLink
                        to="/ayuda"
                        onClick={closeNavbar}
                        className={({ isActive }) =>
                            `p-3 text-decoration-none fw-semibold border-bottom d-flex align-items-center gap-2 ${isActive ? styles.drawerActive : 'text-dark'}`
                        }
                    >
                        <i className="bi bi-question-circle fs-5 text-danger"></i> Ayuda
                    </NavLink>
                </div>

                <div className="p-3 border-top text-center bg-light mt-auto">
                    <span className="text-muted small d-block mb-2">Síguenos</span>
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <a 
                            href="https://www.facebook.com/CRJExt/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-secondary fs-5"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a 
                            href="https://www.instagram.com/crj_extremadura/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-secondary fs-5"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}