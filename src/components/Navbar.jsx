import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-crj.png';
import emoji from '../assets/emoji-ext.png';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileZonaFelizOpen, setMobileZonaFelizOpen] = useState(false);
    const [mobileFichaTecnicaOpen, setMobileFichaTecnicaOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);
    const closeNavbar = () => {
        setIsOpen(false);
        setMobileZonaFelizOpen(false);
        setMobileFichaTecnicaOpen(false);
    };

    const handleDropdownToggleClick = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <nav className={`navbar bg-white shadow-sm border-bottom sticky-top px-4 px-md-2 ${styles.navbarMain}`}>
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

                    {/* MENÚ DE ESCRITORIO — estructura Bootstrap nativa */}
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

                        <div className={`nav-item dropdown ${styles.dropdownContainer}`}>
                            <a
                                className={`nav-link dropdown-toggle text-decoration-none fw-semibold text-dark d-flex align-items-center gap-1 ${styles.navLink}`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="true"
                                aria-expanded="false"
                                onClick={handleDropdownToggleClick}
                            >
                                <i className="bi bi-emoji-smile"></i> Zona Feliz
                            </a>
                            <ul className={`dropdown-menu shadow-sm border-0 ${styles.animatedDropdown}`}>
                                <li>
                                    <NavLink to="/zona-feliz/actividades" className={`dropdown-item ${styles.dropdownItemCustom}`}>
                                        <i className="bi bi-controller me-2"></i> Actividades
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/zona-feliz/manualidades" className={`dropdown-item ${styles.dropdownItemCustom}`}>
                                        <i className="bi bi-brush me-2"></i> Manualidades
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/zona-feliz/memes" className={`dropdown-item ${styles.dropdownItemCustom}`}>
                                        <i className="bi bi-emoji-laughing me-2"></i> Memes
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`nav-item dropdown ${styles.dropdownContainer}`}>
                            <a
                                className={`nav-link dropdown-toggle text-decoration-none fw-semibold text-dark d-flex align-items-center gap-1 ${styles.navLink}`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="true"
                                aria-expanded="false"
                                onClick={handleDropdownToggleClick}
                            >
                                <i className="bi bi-file-earmark-text"></i> Ficha técnica
                            </a>
                            <ul className={`dropdown-menu shadow-sm border-0 ${styles.animatedDropdown}`}>
                                <li>
                                    <a
                                        className={`dropdown-item ${styles.dropdownItemCustom}`}
                                        href="https://www.cruzroja.es/pls/portal30/portal.form_actividades.final?p_cod_cen=15282"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-building me-2"></i> Asamblea Comarcal
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${styles.dropdownItemCustom}`}
                                        href="https://www.cruzroja.es/pls/portal30/portal.form_actividades.final?p_cod_cen=15274"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-geo-alt me-2"></i> Oficina Provincial
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${styles.dropdownItemCustom}`}
                                        href="https://www.cruzroja.es/pls/portal30/portal.form_actividades.final?p_cod_cen=15273"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-flag me-2"></i> Oficina Autonómica
                                    </a>
                                </li>
                            </ul>
                        </div>

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

            {/* MENÚ MÓVIL (DRAWER) */}
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

                <div className="d-flex flex-column flex-grow-1 p-0 overflow-auto">
                    <NavLink
                        end
                        to="/"
                        onClick={closeNavbar}
                        className={({ isActive }) =>
                            `p-3 text-decoration-none fw-semibold border-bottom d-flex align-items-center gap-2 ${styles.drawerItem} ${isActive ? styles.drawerActive : 'text-dark'}`
                        }
                    >
                        <i className="bi bi-house-door fs-5"></i> Inicio
                    </NavLink>

                    <div className="border-bottom">
                        <button
                            className={`w-100 p-3 bg-transparent border-0 fw-semibold d-flex justify-content-between align-items-center ${styles.drawerItem}`}
                            onClick={() => setMobileZonaFelizOpen(!mobileZonaFelizOpen)}
                        >
                            <span className="d-flex align-items-center gap-2">
                                <i className="bi bi-emoji-smile fs-5"></i> Zona Feliz
                            </span>
                            <i className={`bi bi-chevron-down ${styles.chevronIcon} ${mobileZonaFelizOpen ? styles.rotateChevron : ''}`}></i>
                        </button>
                        <div className={`${styles.mobileSubmenu} ${mobileZonaFelizOpen ? styles.showSubmenu : ''}`}>
                            <NavLink
                                to="/zona-feliz/actividades"
                                onClick={closeNavbar}
                                className={({ isActive }) =>
                                    `p-3 ps-5 text-decoration-none fw-medium border-bottom d-flex align-items-center gap-2 ${styles.drawerSubItem} ${isActive ? styles.drawerActive : 'text-dark'}`
                                }
                            >
                                <i className="bi bi-controller"></i> Actividades
                            </NavLink>
                            <NavLink
                                to="/zona-feliz/manualidades"
                                onClick={closeNavbar}
                                className={({ isActive }) =>
                                    `p-3 ps-5 text-decoration-none fw-medium border-bottom d-flex align-items-center gap-2 ${styles.drawerSubItem} ${isActive ? styles.drawerActive : 'text-dark'}`
                                }
                            >
                                <i className="bi bi-brush"></i> Manualidades
                            </NavLink>
                            <NavLink
                                to="/zona-feliz/memes"
                                onClick={closeNavbar}
                                className={({ isActive }) =>
                                    `p-3 ps-5 text-decoration-none fw-medium border-bottom d-flex align-items-center gap-2 ${styles.drawerSubItem} ${isActive ? styles.drawerActive : 'text-dark'}`
                                }
                            >
                                <i className="bi bi-emoji-laughing"></i> Memes
                            </NavLink>
                        </div>
                    </div>

                    <div className="border-bottom">
                        <button
                            className={`w-100 p-3 bg-transparent border-0 fw-semibold d-flex justify-content-between align-items-center ${styles.drawerItem}`}
                            onClick={() => setMobileFichaTecnicaOpen(!mobileFichaTecnicaOpen)}
                        >
                            <span className="d-flex align-items-center gap-2">
                                <i className="bi bi-file-earmark-text fs-5"></i> Ficha técnica
                            </span>
                            <i className={`bi bi-chevron-down ${styles.chevronIcon} ${mobileFichaTecnicaOpen ? styles.rotateChevron : ''}`}></i>
                        </button>
                        <div className={`${styles.mobileSubmenu} ${mobileFichaTecnicaOpen ? styles.showSubmenu : ''}`}>
                            <a
                                href="https://www.cruzroja.es/pls/portal30/portal.form_actividades.final?p_cod_cen=15282"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeNavbar}
                                className={`p-3 ps-5 text-decoration-none fw-medium border-bottom d-flex align-items-center gap-2 text-dark ${styles.drawerSubItem}`}
                            >
                                <i className="bi bi-building"></i> Asamblea Comarcal
                            </a>
                            <a
                                href="https://www.cruzroja.es/pls/portal30/portal.form_actividades.final?p_cod_cen=15274"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeNavbar}
                                className={`p-3 ps-5 text-decoration-none fw-medium border-bottom d-flex align-items-center gap-2 text-dark ${styles.drawerSubItem}`}
                            >
                                <i className="bi bi-geo-alt"></i> Oficina Provincial
                            </a>
                            <a
                                href="https://www.cruzroja.es/pls/portal30/portal.form_actividades.final?p_cod_cen=15273"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeNavbar}
                                className={`p-3 ps-5 text-decoration-none fw-medium border-bottom d-flex align-items-center gap-2 text-dark ${styles.drawerSubItem}`}
                            >
                                <i className="bi bi-flag"></i> Oficina Autonómica
                            </a>
                        </div>
                    </div>

                    <NavLink
                        to="/ayuda"
                        onClick={closeNavbar}
                        className={({ isActive }) =>
                            `p-3 text-decoration-none fw-semibold border-bottom d-flex align-items-center gap-2 ${styles.drawerItem} ${isActive ? styles.drawerActive : 'text-dark'}`
                        }
                    >
                        <i className="bi bi-question-circle fs-5"></i> Ayuda
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
                            className={`fs-5 ${styles.socialIcon}`}
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/crj_extremadura/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className={`fs-5 ${styles.socialIcon}`}
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
