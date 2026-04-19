import React from 'react';
import './Namaste.css';

function Namaste() {
  return (
    <section className="namaste-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Linke Seite: Textinhalt */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">Namasté!</h2>
            <h4 className="mb-4">Finde deine Mitte bei Prana</h4>
            <p className="text-muted">
              Immer mehr Menschen suchen einen Ort, um den Stress des Alltags
              hinter sich zu lassen. Unser Team begleitet dich achtsam durch die
              Kurse und hilft dir dabei, deine innere Ruhe und Kraft neu zu
              entdecken.
            </p>
            <p className="text-muted">
              Mit unserem vielfältigen Angebot heißen wir Kinder, Jugendliche
              und Erwachsene gleichermaßen willkommen.
            </p>
            <p className="text-muted">
              Du hast deinen passenden Kurs bereits gefunden und möchtest dich
              anmelden? Sende uns einfach deinen Namen, deine E-Mail-Adresse und
              den Namen deines Wunschkurses zu.
            </p>
            <p className="fw-bold mt-4">
              Wir freuen uns auf dich – viel Freude beim Yoga!
            </p>
          </div>

          {/* Rechte Seite: Bild */}
          <div className="col-md-5">
            <div className="image-wrapper shadow-sm">
              <img
                src="/Namaste.jpg"
                alt="Yoga im Wald"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Namaste;
