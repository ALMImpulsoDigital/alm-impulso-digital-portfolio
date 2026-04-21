import { Link } from "react-router-dom";
import "../styles/proyectosSection.css";

export default function ProyectosSection() {
  return (
    <section className="proyectos-section" id="proyectos">
      <div className="proyectos-franja">
        <div className="proyectos-mitad proyectos-mitad-web">
          <div className="proyecto-content">
            <img
              src="/assets/iconopc.png"
              alt="web"
              className="proyecto-icono"
            />

            <h3>
              PROYECTOS
              <br />
              WEB
            </h3>

            <Link to="/proyectos/web" className="proyecto-boton">
              Ver más →
            </Link>
          </div>
        </div>

        <div className="proyectos-mitad proyectos-mitad-mobile">
          <div className="proyecto-content">
            <img
              src="/assets/iconocel.png"
              alt="mobile"
              className="proyecto-icono"
            />

            <h3>
              APLICACIONES
              <br />
              MÓVILES
            </h3>

            <Link to="/proyectos/mobile" className="proyecto-boton">
              Ver más →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
