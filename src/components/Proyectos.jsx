import "../styles/proyectos.css";
import { useParams, Link } from "react-router-dom";
import { proyectosWeb, proyectosMobile } from "../data/proyectos";
import CardProyecto from "./CardProyecto";

export default function Proyectos() {
  const { categoria } = useParams();

  const esWeb = categoria === "web";
  const esMobile = categoria === "mobile";

  const titulo = esWeb
    ? "🌐 Web"
    : esMobile
      ? "📱 Aplicaciones móviles"
      : "Proyectos";

  const proyectos = esWeb ? proyectosWeb : esMobile ? proyectosMobile : [];

  return (
    <section className={`proyectos-page ${categoria || ""}`}>
      <div className="proyectos" id="proyectos">
        <div className="proyectos-top">
          <Link to="/" className="volver-link">
            ← Volver
          </Link>
        </div>

        <h2>{titulo}</h2>

        <div className="grid">
          {proyectos.map((p) => (
            <CardProyecto key={p.titulo} proyecto={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
