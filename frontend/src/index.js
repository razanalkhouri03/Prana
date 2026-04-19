import React from 'react';
import ReactDOM from 'react-dom/client';
// WICHTIG: Bootstrap hier importieren, damit es in der ganzen App verfügbar ist
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);