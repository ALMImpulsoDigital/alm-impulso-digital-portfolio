import { FaWhatsapp } from "react-icons/fa";
import "../styles/contacto.css";

export default function Contacto() {
  const numeroWhatsApp = "5493541678553";

  const mensajeWhatsApp =
    "Hola, quisiera consultar por los servicios de ALM Impulso Digital.";

  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensajeWhatsApp,
  )}`;

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-inner">
        <span className="contacto-eyebrow">Hablemos</span>

        <h2 className="contacto-title">Contacto</h2>

        <p className="contacto-text">
          ¿Tenés una idea o proyecto en mente?
          <br />
          Contanos qué necesitás y veamos cómo podemos impulsarlo.
        </p>

        <a
          className="contacto-cta"
          href={enlaceWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden="true" />
          Escribinos por WhatsApp
        </a>

        <div className="contacto-grid">
          <article className="contacto-block contacto-block-whatsapp">
            <div className="contacto-icon contacto-icon-whatsapp">
              <FaWhatsapp aria-hidden="true" />
            </div>

            <h3 className="contacto-subtitle">WhatsApp</h3>

            <p className="contacto-description">
              Escribinos para hacer una consulta o pedir tu presupuesto.
            </p>

            <a
              className="contacto-link"
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar mensaje
            </a>
          </article>

          <article className="contacto-block">
            <div className="contacto-icon">
              <span aria-hidden="true">@</span>
            </div>

            <h3 className="contacto-subtitle">Email</h3>

            <p className="contacto-description">
              También podés contactarnos por correo electrónico.
            </p>

            <a
              className="contacto-link contacto-email"
              href="mailto:almimpulsodigital@gmail.com"
            >
              almimpulsodigital@gmail.com
            </a>
          </article>

          <article className="contacto-block">
            <div className="contacto-icon">
              <span aria-hidden="true">+</span>
            </div>

            <h3 className="contacto-subtitle">Redes</h3>

            <p className="contacto-description">
              Conocé nuestros proyectos y seguí las novedades de ALM.
            </p>

            <div className="contacto-social">
              <a
                className="social-btn"
                href="https://www.instagram.com/alm.impulsodigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de ALM Impulso Digital"
                title="Instagram"
              >
                <img src="/assets/instagram.svg" alt="" />
              </a>

              <a
                className="social-btn"
                href="https://github.com/ALMImpulsoDigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de ALM Impulso Digital"
                title="GitHub"
              >
                <img src="/assets/github.svg" alt="" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
