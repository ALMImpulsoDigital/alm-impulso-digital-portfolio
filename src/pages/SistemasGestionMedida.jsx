import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "../styles/servicioDetalle.css";

export default function SistemasGestionMedida() {
  const numeroWhatsApp = "5493541678553";

  const mensaje = encodeURIComponent(
    "Hola, quiero consultar por el desarrollo de un sistema de gestión a medida.",
  );

  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  return (
    <>
      <Helmet>
        <title>
          Sistemas de Gestión a Medida en Córdoba | ALM Impulso Digital
        </title>

        <meta
          name="description"
          content="Desarrollo de sistemas de gestión y software a medida en Córdoba y Villa Carlos Paz. Soluciones para ventas, stock, clientes, reservas, reportes y procesos internos."
        />

        <link
          rel="canonical"
          href="https://almimpulsodigital.com/sistemas-de-gestion-a-medida"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Sistemas de Gestión a Medida | ALM Impulso Digital"
        />

        <meta
          property="og:description"
          content="Software y sistemas de gestión desarrollados según las necesidades y procesos de cada negocio."
        />

        <meta
          property="og:url"
          content="https://almimpulsodigital.com/sistemas-de-gestion-a-medida"
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
          content="Sistemas de Gestión a Medida | ALM Impulso Digital"
        />

        <meta
          name="twitter:description"
          content="Desarrollo de sistemas y software a medida para organizar y optimizar procesos de negocios."
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
              <span className="servicio-detalle-etiqueta">
                SOFTWARE A MEDIDA
              </span>

              <h1>Sistemas de Gestión a Medida</h1>

              <p className="servicio-detalle-bajada">
                Desarrollamos sistemas adaptados a la forma de trabajar de cada
                negocio para organizar información, centralizar tareas y
                optimizar procesos de gestión.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="servicio-detalle-btn servicio-detalle-btn--principal"
              >
                Consultar por un sistema
              </a>
            </div>
          </div>
        </section>

        {/* SOLUCIONES */}
        <section className="servicio-detalle-soluciones">
          <div className="servicio-detalle-container">
            <div className="servicio-detalle-heading">
              <span className="servicio-detalle-eyebrow">
                SOLUCIONES PARA CADA NEGOCIO
              </span>

              <h2>Software desarrollado según tus procesos</h2>

              <p>
                Un sistema a medida permite reemplazar tareas manuales,
                planillas o herramientas separadas por una solución centralizada
                con las funciones que realmente necesita tu actividad.
              </p>
            </div>

            <div className="servicio-detalle-tipos">
              <div className="servicio-detalle-tipo">
                <span>01</span>

                <div>
                  <h3>Ventas y productos</h3>

                  <p>
                    Registro de operaciones, productos, precios, stock,
                    categorías, proveedores y movimientos del negocio.
                  </p>
                </div>
              </div>

              <div className="servicio-detalle-tipo">
                <span>02</span>

                <div>
                  <h3>Clientes y operaciones</h3>

                  <p>
                    Información de clientes, historial, pedidos, reservas,
                    turnos u otras operaciones propias de cada actividad.
                  </p>
                </div>
              </div>

              <div className="servicio-detalle-tipo">
                <span>03</span>

                <div>
                  <h3>Usuarios y administración</h3>

                  <p>
                    Acceso mediante usuarios, diferentes permisos y paneles de
                    administración para gestionar la información del sistema.
                  </p>
                </div>
              </div>

              <div className="servicio-detalle-tipo">
                <span>04</span>

                <div>
                  <h3>Reportes y estadísticas</h3>

                  <p>
                    Consulta de información, historiales, indicadores y reportes
                    que facilitan el seguimiento de la actividad del negocio.
                  </p>
                </div>
              </div>
            </div>

            <div className="servicio-detalle-incluye">
              <span>Base de datos</span>
              <span>Panel de administración</span>
              <span>Usuarios y permisos</span>
              <span>Reportes</span>
              <span>Automatización</span>
              <span>Funciones personalizadas</span>
            </div>

            <Link
              to="/proyectos/web"
              className="servicio-detalle-proyectos-link"
            >
              Ver proyectos desarrollados →
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

              <h2>¿Necesitás un sistema para gestionar tu negocio?</h2>

              <p>
                Desarrollamos software a medida para comercios, profesionales y
                empresas de Córdoba, Villa Carlos Paz y otras localidades.
                También trabajamos en proyectos de forma remota.
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

              <span>Contanos cómo trabajás y qué necesitás gestionar.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
