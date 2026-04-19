import React from 'react';
import { TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';
import './Header.css';

function Header() {
  return (
    <header className="header-wrapper">
      {/* Obere Sektion: Logo und Kontakt */}
      <div className="container-fluid py-2 bg-white">
        <div className="d-flex justify-content-between align-items-center px-md-5">
          {/* Logo Platzhalter */}
          <div className="logo-section">
            <img
              src="/Prana.svg"
              alt="Prana Logo"
              className="img-fluid"
              style={{ maxHeight: '60px' }}
            />
          </div>

          {/* Kontakt Info rechts */}
          <div className="contact-info">
            <div className="d-flex align-items-center justify-content-end mb-1">
              <TelephoneFill size={14} className="me-2 text-dark-brown" />
              <span className="small text-dark-brown">+49 174 6097458</span>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <EnvelopeFill size={14} className="me-2 text-dark-brown" />
              <span className="small text-dark-brown">info@prana.de</span>
            </div>
          </div>
        </div>
      </div>

      {/* Untere Sektion: Navigationsleiste */}
      <nav className="custom-navbar">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link mx-4" href="/">
              Start
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="/preise">
              Preise
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="/kontakt">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Image / Hintergrundbild */}
      <div className="hero-section">
        {/* Das Bild wird über CSS als Hintergrund gesetzt oder hier als img */}
        <div className="hero-placeholder">
        </div>
      </div>
    </header>
  );
}

export default Header;
