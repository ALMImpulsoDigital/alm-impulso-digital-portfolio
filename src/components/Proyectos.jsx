import "../styles/proyectos.css";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { proyectosWeb, proyectosMobile } from "../data/proyectos";
import CardProyecto from "./CardProyecto";

export default function Proyectos({ categoriaFija }) {
  const categoria = categoriaFija;

  const esWeb = categoria === "web";
  const esMobile = categoria === "mobile";

  const titulo = esWeb
    ? "Proyectos de Desarrollo Web"
    : esMobile
      ? "Proyectos de Aplicaciones Móviles"
      : "Proyectos";

  const descripcion = esWeb
    ? "Conocé algunos de nuestros proyectos de desarrollo web, sistemas de gestión y soluciones digitales a medida para distintos tipos de negocios."
    : esMobile
      ? "Conocé algunos de nuestros proyectos de aplicaciones móviles desarrolladas a medida, integradas con sistemas web, APIs y bases de datos."
      : "";

  const seoTitle = esWeb
    ? "Proyectos de Desarrollo Web | ALM Impulso Digital"
    : esMobile
      ? "Proyectos de Aplicaciones Móviles | ALM Impulso Digital"
      : "Proyectos | ALM Impulso Digital";

  const seoDescription = esWeb
    ? "Conocé proyectos de desarrollo web, sistemas de gestión y soluciones digitales a medida desarrollados por ALM Impulso Digital."
    : esMobile
      ? "Conocé proyectos de aplicaciones móviles desarrolladas a medida e integradas con sistemas web, APIs y bases de datos."
      : "Conocé proyectos desarrollados por ALM Impulso Digital.";

  const canonicalUrl = esWeb
    ? "https://almimpulsodigital.com/proyectos/web"
    : esMobile
      ? "https://almimpulsodigital.com/proyectos/mobile"
      : "https://almimpulsodigital.com/";

  const socialImage =
    "https://almimpulsodigital.com/assets/alm-social-share.png";

  const proyectos = esWeb ? proyectosWeb : esMobile ? proyectosMobile : [];

  return (
    <>
      <Helmet>
        {/* SEO */}

        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}

        <meta property="og:type" content="website" />

        <meta property="og:title" content={seoTitle} />

        <meta property="og:description" content={seoDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={socialImage} />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />

        <meta
          property="og:image:alt"
          content="ALM Impulso Digital - Desarrollo de páginas web, sistemas y aplicaciones"
        />

        <meta property="og:site_name" content="ALM Impulso Digital" />

        <meta property="og:locale" content="es_AR" />

        {/* Twitter / X */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={seoTitle} />

        <meta name="twitter:description" content={seoDescription} />

        <meta name="twitter:image" content={socialImage} />

        <meta
          name="twitter:image:alt"
          content="ALM Impulso Digital - Desarrollo de páginas web, sistemas y aplicaciones"
        />
      </Helmet>

      <section className={`proyectos-page ${categoria || ""}`}>
        <div className="proyectos" id="proyectos">
          <div className="proyectos-top">
            <Link to="/" className="volver-link">
              ← Volver
            </Link>
          </div>

          <h1>{titulo}</h1>

          <p className="proyectos-intro">{descripcion}</p>

          <div className="grid">
            {proyectos.map((p) => (
              <CardProyecto key={p.titulo} proyecto={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
