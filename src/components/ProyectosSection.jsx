import { Link } from "react-router-dom";

import "../styles/proyectosSection.css";

export default function ProyectosSection() {
  return (
    <section
      className="proyectos-section"
      id="proyectos"
      aria-labelledby="proyectos-titulo"
    >
      <div className="proyectos-container">
        <p className="proyectos-etiqueta">Proyectos</p>

        <h2 className="proyectos-titulo" id="proyectos-titulo">
          Proyectos de desarrollo web y aplicaciones móviles
        </h2>

        <div className="proyectos-grid">
          <article className="proyecto-categoria-card proyecto-card-web">
            <div className="proyecto-info">
              <p className="proyecto-categoria">Proyectos web</p>

              <h3>Desarrollo de sitios web</h3>

              <p className="proyecto-descripcion">
                Sitios institucionales, tiendas online, landing pages y
                plataformas desarrolladas a medida.
              </p>

              <Link
                to="/proyectos/web"
                className="proyecto-boton proyecto-boton-web"
                aria-label="Ver proyectos de desarrollo web"
              >
                <span>Ver proyectos web</span>
                <span className="proyecto-flecha" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="proyecto-imagen-contenedor proyecto-imagen-web">
              <img
                src="/assets/computadora-web-cabanas.webp"
                alt="Computadora mostrando un sitio web moderno de cabañas"
                className="proyecto-imagen"
                loading="lazy"
                decoding="async"
                width="720"
                height="720"
              />
            </div>
          </article>

          <article className="proyecto-categoria-card proyecto-card-mobile">
            <div className="proyecto-info">
              <p className="proyecto-categoria">Aplicaciones móviles</p>

              <h3>Desarrollo de aplicaciones</h3>

              <p className="proyecto-descripcion">
                Aplicaciones móviles modernas, intuitivas y adaptadas a las
                necesidades de cada negocio.
              </p>

              <Link
                to="/proyectos/mobile"
                className="proyecto-boton proyecto-boton-mobile"
                aria-label="Ver proyectos de aplicaciones móviles"
              >
                <span>Ver aplicaciones móviles</span>
                <span className="proyecto-flecha" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="proyecto-imagen-contenedor proyecto-imagen-mobile">
              <img
                src="/assets/celular-app-hamburguesas.webp"
                alt="Celular mostrando una aplicación móvil para realizar pedidos de hamburguesas"
                className="proyecto-imagen"
                loading="lazy"
                decoding="async"
                width="720"
                height="720"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
