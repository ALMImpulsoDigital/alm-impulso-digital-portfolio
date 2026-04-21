import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Impulso Digital
          <br />
          para tu Negocio
        </h1>
        <p>
          Desarrollo web y aplicaciones a medida. Sistemas reales, escalables y
          profesionales.
        </p>
      </div>

      <div className="hero-right-text">
        <span>Páginas Web</span>
        <span>E-commerce</span>
        <span>Aplicaciones Móviles</span>
      </div>

      <a href="#contacto" className="hero-budget-btn">
        Pedí tu presupuesto
      </a>

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
