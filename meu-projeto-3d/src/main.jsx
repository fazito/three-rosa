import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App.jsx";
import "./i18n";


const consoleWarn = console.warn;
console.warn = (...args) => {
  if (args && typeof args === 'string') {
    // Silencia o aviso do THREE.Clock
    if (args.includes('THREE.Clock: This module has been deprecated')) return;
    // Silencia o aviso do WebGLProgram
    if (args.includes('THREE.WebGLProgram: Program Info Log: WARNING')) return;
      // Silencia o aviso do texSubImage / y-flip do WebGL
    if (args.includes('WebGL warning: texSubImage')) return;
  }
  consoleWarn(...args);
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
