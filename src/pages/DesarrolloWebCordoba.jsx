import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "../styles/servicioDetalle.css";

export default function DesarrolloWebCordoba() {
  const numeroWhatsApp = "5493541678553";

  const mensaje = encodeURIComponent(
    "Hola, quiero consultar por el desarrollo de una página web.",
  );

  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  return (
    <>
      <Helmet>
        <title>
          Desarrollo Web en Córdoba | Páginas Web | ALM Impulso Digital
        </title>

        <meta
          name="description"
          content="Desarrollo de páginas web profesionales y a medida en Córdoba y Villa Carlos Paz. Landing pages, sitios profesionales, tiendas online y webs administrables."
        />

        <link
          rel="canonical"
          href="https://almimpulsodigital.com/desarrollo-web-cordoba"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Desarrollo Web en Córdoba | ALM Impulso Digital"
        />

        <meta
          property="og:description"
          content="Desarrollo de páginas web profesionales y a medida para emprendedores, profesionales, comercios y empresas."
        />

        <meta
          property="og:url"
          content="https://almimpulsodigital.com/desarrollo-web-cordoba"
        />

        <meta
          property="og:image"
          content="https://almimpulsodigital.com/assets/alm-social-share.png"
        />

        <meta property="og:site_name" content="ALM Impulso Digital" />
        <meta property="og:locale" content="es_AR" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Desarrollo Web en Córdoba | ALM Impulso Digital"
        />

        <meta
          name="twitter:description"
          content="Desarrollo de páginas web profesionales y a medida para negocios y profesionales."
        />

        <meta
          name="twitter:image"
          content="https://almimpulsodigital.com/assets/alm-social-share.png"
        />
      </Helmet>

      <main className="servicio-detalle">
        {/* HERO */}
        <section className="servicio-detalle-hero">
          <div className="servicio-detalle-container">
            <Link to="/#servicios" className="servicio-detalle-volver">
              ← Volver a servicios
            </Link>

            <div className="servicio-detalle-hero-contenido">
              <span className="servicio-detalle-etiqueta">DESARROLLO WEB</span>

              <h1>Desarrollo Web en Córdoba</h1>

              <p className="servicio-detalle-bajada">
                Creamos páginas web profesionales y a medida para emprendedores,
                profesionales, comercios y empresas que necesitan una presencia
                digital moderna, clara y funcional.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="servicio-detalle-btn servicio-detalle-btn--principal"
              >
                Consultar por mi página web
              </a>
            </div>
          </div>
        </section>

        {/* SOLUCIONES */}
        <section className="servicio-detalle-soluciones">
          <div className="servicio-detalle-container">
            <div className="servicio-detalle-heading">
              <span className="servicio-detalle-eyebrow">
                SOLUCIONES WEB A MEDIDA
              </span>

              <h2>Páginas web adaptadas a cada proyecto</h2>

              <p>
                Desarrollamos cada sitio de acuerdo con las necesidades,
                objetivos e identidad de cada negocio.
              </p>
            </div>

            <div className="servicio-detalle-tipos">
              <div className="servicio-detalle-tipo">
                <span>01</span>
                <div>
                  <h3>Landing Pages</h3>
                  <p>
                    Páginas enfocadas en presentar un servicio, producto o
                    propuesta y generar consultas.
                  </p>
                </div>
              </div>

              <div className="servicio-detalle-tipo">
                <span>02</span>
                <div>
                  <h3>Sitios Web Profesionales</h3>
                  <p>
                    Sitios completos para presentar tu negocio, servicios,
                    trayectoria y medios de contacto.
                  </p>
                </div>
              </div>

              <div className="servicio-detalle-tipo">
                <span>03</span>
                <div>
                  <h3>Tiendas Online</h3>
                  <p>
                    Catálogos de productos, carrito, medios de pago y
                    herramientas de administración.
                  </p>
                </div>
              </div>

              <div className="servicio-detalle-tipo">
                <span>04</span>
                <div>
                  <h3>Webs Administrables</h3>
                  <p>
                    Sitios conectados a bases de datos para administrar
                    productos, publicaciones, clientes u otra información.
                  </p>
                </div>
              </div>
            </div>

            <div className="servicio-detalle-incluye">
              <span>Diseño responsive</span>
              <span>Optimización SEO</span>
              <span>Dominio propio</span>
              <span>Hosting</span>
              <span>Certificado SSL</span>
              <span>Integraciones</span>
            </div>

            <Link
              to="/proyectos/web"
              className="servicio-detalle-proyectos-link"
            >
              Ver proyectos de desarrollo web →
            </Link>
          </div>
        </section>

        {/* UBICACIÓN + CTA */}
        <section className="servicio-detalle-local">
          <div className="servicio-detalle-container servicio-detalle-local-grid">
            <div>
              <span className="servicio-detalle-eyebrow">
                CÓRDOBA Y VILLA CARLOS PAZ
              </span>

              <h2>¿Necesitás una página web para tu negocio?</h2>

              <p>
                Trabajamos con emprendedores, profesionales, comercios y
                empresas de Córdoba, Villa Carlos Paz y otras localidades.
                También desarrollamos proyectos de forma remota.
              </p>
            </div>

            <div className="servicio-detalle-local-accion">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="servicio-detalle-btn servicio-detalle-btn--principal"
              >
                Consultar por WhatsApp
              </a>

              <span>Contanos tu proyecto y evaluamos la mejor solución.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
