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

  return (
    <section className="proyectos" id="proyectos">
      <div style={{ marginBottom: "1rem" }}>
        <Link
          to="/proyectos"
          style={{ color: "var(--title)", textDecoration: "none" }}
        >
          ← Volver
        </Link>
      </div>

      <h2>{titulo}</h2>

      {esWeb && (
        <div className="grid">
          {proyectosWeb.map((p) => (
            <CardProyecto key={p.titulo} proyecto={p} />
          ))}
        </div>
      )}

      {esMobile && (
        <div className="grid">
          {proyectosMobile.map((p) => (
            <CardProyecto key={p.titulo} proyecto={p} />
          ))}
        </div>
      )}
    </section>
  );
}
