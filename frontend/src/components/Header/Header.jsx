import React from 'react';
import { TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';
import './Header.css';

function Header() {
    return (
        <header className="header-wrapper">
            {/* Obere Sektion: Logo und Kontakt */}
            <div className="container-fluid py-2 bg-white">
                <div className="d-flex justify-content-between align-items-center px-md-5">
                    {/* Logo Platzhalter (Ersetze 'logo.png' mit deinem echten Pfad) */}
                    <div className="logo-section">
                        <img 
                            src="/Prana.svg" 
                            alt="Prana Logo" 
                            className="img-fluid" 
                            style={{ maxHeight: '60px' }} 
                        />
                    </div>

                    {/* Kontakt Info rechts */}
                    <div className="contact-info text-end">
                        <div className="d-flex align-items-center justify-content-end mb-1">
                            <span className="me-2 small">+49 174 6097458</span>
                            <TelephoneFill size={14} />
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                            <span className="me-2 small">info@prana.de</span>
                            <EnvelopeFill size={14} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Untere Sektion: Navigationsleiste */}
            <nav className="custom-navbar">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="/">Start</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="/preise">Preise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="/kontakt">Kontakt</a>
                    </li>
                </ul>
            </nav>

            {/* Hero Image / Hintergrundbild */}
            <div className="hero-section">
                {/* Das Bild wird über CSS als Hintergrund gesetzt oder hier als img */}
                <div className="hero-placeholder">
                    {/* Hier kommt dein Yoga-Strand-Bild rein */}
                </div>
            </div>
        </header>
    );
}

export default Header;