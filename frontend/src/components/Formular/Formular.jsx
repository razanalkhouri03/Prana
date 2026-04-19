import React from 'react';
import './Formular.css';

const Formular = () => {
  // Funktion zum Abfangen des Formular-Absendens
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Anmeldung abgeschickt!");
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