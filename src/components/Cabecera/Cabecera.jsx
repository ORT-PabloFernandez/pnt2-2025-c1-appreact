// Cabecera.jsx
import React from "react";
import "./cabecera.css";

function Cabecera() {
  return (
    <header className="cabecera">
      <div className="cabecera__logo">
        <img src="img/ortLogo.png" alt="Logo de la empresa" />
      </div>
      <nav className="cabecera__nav">
        <a href="/home">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>

      <div className="cabecera__usuario">
        <img src="img/Adele Vance.jpg" alt="Usuario logueado" />
      </div>
    </header>
  );
}

export default Cabecera;
