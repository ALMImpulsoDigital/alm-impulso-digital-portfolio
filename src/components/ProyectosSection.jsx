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
              src="/assets/iconopc.webp"
              alt="Proyectos de desarrollo web"
              className="proyecto-icono"
              loading="lazy"
              decoding="async"
              width="420"
              height="280"
            />

            <h3>Proyectos Web</h3>

            <Link to="/proyectos/web" className="proyecto-boton">
              Ver proyectos web →
            </Link>
          </div>
        </div>

        <div className="proyectos-mitad proyectos-mitad-mobile">
          <div className="proyecto-content">
            <img
              src="/assets/iconocel.webp"
              alt="Proyectos de aplicaciones móviles"
              className="proyecto-icono"
              loading="lazy"
              decoding="async"
              width="420"
              height="280"
            />

            <h3>Aplicaciones Móviles</h3>

            <Link to="/proyectos/mobile" className="proyecto-boton">
              Ver aplicaciones móviles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
