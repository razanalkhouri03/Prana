import React from 'react';
import './Formular.css';

const Formular = () => {
  // Funktion zum Abfangen des Formular-Absendens
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // 1. Daten aus dem Formular extrahieren
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      kurs: formData.get("kurs"),
      email: formData.get("email")
    };

    try {
      // 2. Daten an das Backend senden
      const response = await fetch('http://localhost:8080/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Anmeldung erfolgreich! ID: " + result.insertedId);
        e.target.reset(); // Formular leeren
      } else {
        alert("Fehler: " + result.error);
      }
    } catch (error) {
      console.error("Verbindungsfehler:", error);
      alert("Backend nicht erreichbar!");
    }
  };

  return (
    <section className="registration-section my-5">
      <h3 className="section-title mb-4">Anmeldeformular:</h3>
      
      <div className="registration-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group-custom">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group-custom">
            <label htmlFor="kurs">Kurs:</label>
            <input type="text" id="kurs" name="kurs" required />
          </div>
          
          <div className="form-group-custom">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="text-center mt-4">
            <button type="submit" className="btn level-btn registration-btn">
              Anmelden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Formular;