import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import App from './App.jsx'
import './i18n'

// 🚀 CÓDIGO PARA SILENCIAR O AVISO DO THREE.CLOCK:
const consoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('THREE.Clock: This module has been deprecated')) {
    return; // Ignora silenciosamente este aviso específico
  }
  consoleWarn(...args);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
