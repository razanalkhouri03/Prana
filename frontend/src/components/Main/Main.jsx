import React from 'react';
import './Main.css';

function Main() {
  const levels = [
    { title: 'Einfach', img: '/Schwierigkeit/Einfach.jpg' },
    { title: 'Mittel', img: '/Schwierigkeit/Mittel.jpg' },
    { title: 'Schwierig', img: '/Schwierigkeit/Schwierig.jpg' },
  ];

  const courses = [
    { title: 'Einführung', img: '/Kurse/Einführung.jpg' },
    { title: 'Teensyoga', img: '/Kurse/Teenyoga.jpg' },
    { title: 'Kidsyoga', img: '/Kurse/kidsyoga.jpg' },
    { title: 'Postnatal', img: '/Kurse/Postnatal.jpg' },
    { title: 'Yogatherapie', img: '/Kurse/Yogatherapie.jpg' },
  ];

  return (
    // 1. KEIN container hier am Anfang, damit die Punkte frei sind
    <div className="main-content-wrapper">
      
      {/* Diese Linie geht jetzt über die volle Breite */}
      <div className="dots-divider"></div>

      {/* 2. NUR die Sektionen kommen in den container */}
      <div className="container py-5">
        <section className="mb-5">
          <h3 className="section-title mb-4">Schwierigkeitsgrad</h3>
          <div className="row g-4">
            {levels.map((level, index) => (
              <div key={index} className="col-md-4">
                <div className="level-card">
                  <img src={level.img} alt={level.title} className="img-fluid rounded" />
                  <div className="level-overlay">
                    <button className="btn level-btn">{level.title}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h3 className="section-title mb-4">Kurse</h3>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div key={index} className="col-md-4">
                <div className="course-item text-center">
                  <img src={course.img} alt={course.title} className="img-fluid rounded mb-2 shadow-sm" />
                  <button className="course-label-btn">
            {course.title}
        </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Diese Linie geht auch über die volle Breite */}
      <div className="dots-divider"></div>
    </div>
  );
}

export default Main;