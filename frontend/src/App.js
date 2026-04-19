import React from 'react';
// Importiere die Header-Komponente
import Header from './components/Header/Header'; 
// Importiere die Footer-Komponente (sobald dort eine .jsx Datei liegt)
// import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      {/* Hier rufst du den Header auf */}
      <Header />

      <main className="container mt-4">
        <h2>Inhalt meines Projekts</h2>
        <p>Hier kannst du jetzt anfangen zu bauen.</p>
      </main>

      {/* Hier käme der Footer hin, wenn die Datei fertig ist */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;