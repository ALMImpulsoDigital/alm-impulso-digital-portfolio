import "../styles/servicios.css";
import { servicios } from "../data/servicios";
import CardServicio from "./CardServicio";

export default function Servicios() {
  return (
    <section className="servicios">
      <h2>Servicios</h2>
      <p className="subtitulo">
        Soluciones digitales a medida: desde una landing hasta sistemas
        completos con base de datos.
      </p>
      <ul className="servicios-features">
        <li>🚀 Tecnologías modernas</li>
        <li>🌐 Hosting profesional</li>
        <li>🔗 Dominio propio</li>
        <li>🔒 Certificado SSL</li>
        <li>⚡ CDN global</li>
      </ul>

      <div className="servicios-grid">
        {servicios.map((s) => (
          <CardServicio key={s.id} servicio={s} />
        ))}
      </div>
    </section>
  );
}
