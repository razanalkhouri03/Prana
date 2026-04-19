import React from 'react';
import Header from './components/Header/Header';
import Namaste from './components/Namaste/Namaste';
import Main from './components/Main/Main';
import Formular from './components/Formular/Formular';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="container mt-4">
        <Namaste />
        <Main />
        <Formular />
      </main>

      <Footer />
    </div>
  );
}

export default App;
