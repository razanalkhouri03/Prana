import React from 'react';
// Importiere die Header-Komponente
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Namaste from './components/Namaste/Namaste';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="container mt-4">
        <Namaste />
        <Main />
      </main>

      <Footer />
    </div>
  );
}

export default App;
