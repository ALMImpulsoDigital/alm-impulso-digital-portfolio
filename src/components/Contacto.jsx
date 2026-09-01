import { FaWhatsapp, FaEnvelope, FaInstagram, FaGlobe } from "react-icons/fa";

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
        <div className="contacto-header">
          <span className="contacto-eyebrow">Hablemos</span>

          <h2 className="contacto-title">¿Tenés un proyecto en mente?</h2>

          <p className="contacto-text">
            Contanos qué necesitás y evaluemos juntos la solución digital más
            adecuada para tu negocio.
          </p>
        </div>

        <div className="contacto-panel">
          {/* COLUMNA IZQUIERDA */}

          <div className="contacto-presentacion">
            <span className="contacto-small-title">ALM IMPULSO DIGITAL</span>

            <h3>Transformamos ideas y necesidades en soluciones digitales.</h3>

            <p>
              Desarrollamos páginas web, sistemas de gestión, aplicaciones
              móviles y soluciones de software a medida para emprendedores,
              profesionales y empresas.
            </p>

            <p className="contacto-zona">
              Villa Carlos Paz · Córdoba · Argentina
            </p>

            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-whatsapp-btn"
            >
              <FaWhatsapp aria-hidden="true" />
              Pedí tu presupuesto
            </a>
          </div>

          {/* COLUMNA DERECHA */}

          <div className="contacto-datos">
            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-dato"
            >
              <div className="contacto-dato-icon contacto-dato-whatsapp">
                <FaWhatsapp aria-hidden="true" />
              </div>

              <div>
                <span className="contacto-dato-label">WhatsApp</span>

                <strong>+54 9 3541 67-8553</strong>

                <small>Consultas y presupuestos</small>
              </div>
            </a>

            <a
              href="mailto:almimpulsodigital@gmail.com"
              className="contacto-dato"
            >
              <div className="contacto-dato-icon">
                <FaEnvelope aria-hidden="true" />
              </div>

              <div>
                <span className="contacto-dato-label">Email</span>

                <strong>almimpulsodigital@gmail.com</strong>

                <small>Escribinos cuando quieras</small>
              </div>
            </a>

            <a
              href="https://www.instagram.com/alm.impulsodigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-dato"
            >
              <div className="contacto-dato-icon contacto-dato-instagram">
                <FaInstagram aria-hidden="true" />
              </div>

              <div>
                <span className="contacto-dato-label">Instagram</span>

                <strong>@alm.impulsodigital</strong>

                <small>Proyectos, novedades y trabajos</small>
              </div>
            </a>

            <a href="https://almimpulsodigital.com/" className="contacto-dato">
              <div className="contacto-dato-icon">
                <FaGlobe aria-hidden="true" />
              </div>

              <div>
                <span className="contacto-dato-label">Sitio web</span>

                <strong>almimpulsodigital.com</strong>

                <small>Desarrollo de soluciones digitales</small>
              </div>
            </a>
          </div>
        </div>

        <div className="contacto-bottom">
          <span>© 2026 ALM Impulso Digital</span>

          <span>Páginas Web · Sistemas · Aplicaciones</span>
        </div>
      </div>
    </section>
  );
}
