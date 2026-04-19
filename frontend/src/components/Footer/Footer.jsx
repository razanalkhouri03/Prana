import React from 'react';
import { TelephoneFill, EnvelopeFill, ChevronRight } from 'react-bootstrap-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container text-white py-5">
            <div className="container">
                <div className="row">
                    
                    {/* Spalte 1: Info Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-4">Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <ChevronRight size={12} className="me-2" />
                                <a href="/kontakt" className="text-decoration-none">Kontakt</a>
                            </li>
                            <li className="mb-2">
                                <ChevronRight size={12} className="me-2" />
                                <a href="/preise" className="text-decoration-none">Preise</a>
                            </li>
                            <li className="mb-2">
                                <ChevronRight size={12} className="me-2" />
                                <a href="/impressum" className="text-decoration-none">Impressum</a>
                            </li>
                            <li className="mb-2">
                                <ChevronRight size={12} className="me-2" />
                                <a href="/datenschutz" className="text-decoration-none">Datenschutzerklärung</a>
                            </li>
                        </ul>
                    </div>

                    {/* Spalte 2: Kontakt Details */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-4">Kontakt</h5>
                        <address className="mb-4 lh-lg">
                            Yoga Prana<br />
                            Neuer Weyerstraßerweg 2<br />
                            50969 Köln
                        </address>
                        <div className="d-flex align-items-center mb-2">
                            <TelephoneFill className="me-3" />
                            <span>+49 174 6097458</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <EnvelopeFill className="me-3" />
                            <span>info@prana.de</span>
                        </div>
                    </div>

                    {/* Spalte 3: Google Maps Karte */}
                    <div className="col-md-4 mb-4 text-center text-md-end">
                        <div className="map-placeholder">
                            <img 
                                src="/google-maps-prana.png" 
                                alt="Karte Köln" 
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;