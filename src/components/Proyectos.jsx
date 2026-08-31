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

  const proyectos = esWeb ? proyectosWeb : esMobile ? proyectosMobile : [];

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />

        <link
          rel="canonical"
          href={
            esWeb
              ? "https://almimpulsodigital.com/proyectos/web"
              : esMobile
                ? "https://almimpulsodigital.com/proyectos/mobile"
                : "https://almimpulsodigital.com/"
          }
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
