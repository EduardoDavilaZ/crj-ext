import { Link } from 'react-router-dom';
import logo from '../assets/logo-crj.png';

export default function Footer() {
  return (
    <footer className="bg-white border-top py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        
        <a 
          href="https://www.cruzrojajuventud.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="d-flex align-items-center text-decoration-none"
        >
          <img 
            src={logo} 
            alt="Logo Cruz Roja Juventud" 
            style={{ height: '40px', objectFit: 'contain' }} 
          />
        </a>

        <div className="d-flex align-items-center gap-3">
          <a 
            href="https://www.facebook.com/CRJExt/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook de Cruz Roja Juventud Extremadura"
            className="text-secondary fs-5 transition-hover"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a 
            href="https://www.instagram.com/crj_extremadura/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram de Cruz Roja Juventud Extremadura"
            className="text-secondary fs-5 transition-hover"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}