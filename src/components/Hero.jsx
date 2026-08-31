import "../styles/hero.css";
import { HiGlobeAlt } from "react-icons/hi";
import { BsDatabase } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Impulso Digital
          <br />
          <span className="hero-title-accent">para tu</span> Negocio
        </h1>

        <p>
          Desarrollo de páginas web, sistemas de gestión y aplicaciones a medida
          para emprendedores, profesionales y empresas.
        </p>
      </div>

      <div className="hero-right-text">
        <span>
          <HiGlobeAlt className="hero-icon" />
          Páginas Web
        </span>

        <span>
          <BsDatabase className="hero-icon" />
          Sistemas
        </span>

        <span>
          <MdPhoneIphone className="hero-icon" />
          Aplicaciones Móviles
        </span>
      </div>

      <a
        href="https://wa.me/5493541678553?text=Hola%20ALM%20Impulso%20Digital,%20quisiera%20solicitar%20un%20presupuesto."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-budget-btn"
      >
        Pedí tu presupuesto
      </a>
    </section>
  );
}
