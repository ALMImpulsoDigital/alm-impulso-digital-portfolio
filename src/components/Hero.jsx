import "../styles/hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Impulso Digital para tu Negocio</h1>
        <p>
          Desarrollo web y aplicaciones a medida. Sistemas reales, escalables y
          profesionales.
        </p>

        <div className="hero-actions">
          <Link to="/servicios" className="btn-accent-servicios">
            Ver servicios
          </Link>
          <Link to="/proyectos" className="btn-accent-proyectos">
            Ver proyectos
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/assets/imagenHeroNueva.png"
          alt="ALM Impulso Digital en dispositivos"
        />
      </div>

      {/* ✅ SOLO UNO */}
      <a
        href="#sobremi"
        className="scroll-indicator"
        aria-label="Ir a Sobre mí"
      >
        <span className="chevron"></span>
      </a>
    </section>
  );
}
