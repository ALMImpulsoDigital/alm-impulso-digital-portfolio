import { useState } from "react";
import { servicios } from "../data/servicios";
import "../styles/serviciosSection.css";

export default function ServiciosSection() {
  const [servicioActivo, setServicioActivo] = useState(null);

  return (
    <section className="servicios-section" id="servicios">
      <div className="servicios-container">
        <div className="servicios-header">
          <h2>Servicios de Desarrollo de Software</h2>

          <ul className="servicios-features">
            <li>🚀 Tecnologías modernas</li>
            <li>🌐 Hosting profesional</li>
            <li>📊 Optimización SEO</li>
            <li>🔗 Dominio propio</li>
            <li>🔒 Certificado SSL</li>
            <li>⚡ CDN global</li>
          </ul>

          <p className="servicios-intro">
            Desarrollamos páginas web, sistemas de gestión y aplicaciones
            móviles a medida para emprendedores, profesionales y empresas. Cada
            proyecto se diseña de forma personalizada, con foco en
            funcionalidad, imagen y resultados.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <article className="servicio-card" key={servicio.id}>
              <div className="servicio-card-image">
                <img
                  src={servicio.thumbnail}
                  alt={servicio.titulo}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="servicio-card-content servicio-card-content--compact">
                <h3>{servicio.titulo}</h3>

                <p className="servicio-subtitulo servicio-subtitulo--compact">
                  {servicio.subtitulo}
                </p>

                <div className="servicio-card-actions">
                  <button
                    type="button"
                    className="servicio-btn servicio-btn-secondary"
                    onClick={() => setServicioActivo(servicio)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {servicioActivo && (
        <div
          className="servicio-modal-overlay"
          onClick={() => setServicioActivo(null)}
        >
          <div className="servicio-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="servicio-modal-close"
              onClick={() => setServicioActivo(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="servicio-modal-image">
              <img
                src={servicioActivo.thumbnail}
                alt={servicioActivo.titulo}
                decoding="async"
              />
            </div>

            <div className="servicio-modal-content">
              <h3>{servicioActivo.titulo}</h3>

              <p className="servicio-subtitulo">{servicioActivo.subtitulo}</p>

              <p className="servicio-parrafo">{servicioActivo.paraQueSirve}</p>

              <div className="servicio-incluye">
                <h4>Incluye</h4>

                <ul>
                  {servicioActivo.incluye.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="servicio-ejemplo">{servicioActivo.ejemplo}</p>

              <div className="servicio-modal-actions">
                <a href="#contacto" className="servicio-btn">
                  Consultar por este servicio
                </a>

                <button
                  type="button"
                  className="servicio-btn servicio-btn-secondary"
                  onClick={() => setServicioActivo(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
