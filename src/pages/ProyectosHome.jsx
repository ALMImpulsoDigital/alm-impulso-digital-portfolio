// src/pages/ProyectosHome.jsx

import { Link } from "react-router-dom";
import "../styles/proyectosHome.css";

export default function ProyectosHome() {
  return (
    <section className="proyectos-home">
      <h2>Proyectos</h2>
      <p className="subtitulo">Elegí qué tipo de proyectos querés ver</p>

      <div className="home-grid">
        <Link to="/proyectos/web" className="home-card web">
          <div className="home-content">
            <h3>🌐 Web</h3>

            <span className="home-cta">Ver proyectos →</span>
          </div>
        </Link>

        <Link to="/proyectos/mobile" className="home-card mobile">
          <div className="home-content">
            <h3>📱 Aplicaciones móviles</h3>

            <span className="home-cta">Ver proyectos →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
