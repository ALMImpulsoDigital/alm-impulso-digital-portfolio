import { Link } from "react-router-dom";
import "../styles/proyectosSection.css";

export default function ProyectosSection() {
  return (
    <section className="proyectos-section" id="proyectos">
      <h2 className="proyectos-titulo">
        Proyectos de Desarrollo Web y Aplicaciones Móviles
      </h2>

      <div className="proyectos-franja">
        <div className="proyectos-mitad proyectos-mitad-web">
          <div className="proyecto-content">
            <img
              src="/assets/iconopc.png"
              alt="Proyectos de desarrollo web"
              className="proyecto-icono"
            />

            <h3>Proyectos Web</h3>

            <Link to="/proyectos/web" className="proyecto-boton">
              Ver proyectos →
            </Link>
          </div>
        </div>

        <div className="proyectos-mitad proyectos-mitad-mobile">
          <div className="proyecto-content">
            <img
              src="/assets/iconocel.png"
              alt="Proyectos de aplicaciones móviles"
              className="proyecto-icono"
            />

            <h3>Aplicaciones Móviles</h3>

            <Link to="/proyectos/mobile" className="proyecto-boton">
              Ver proyectos →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
