import { useState } from "react";
import VideoModal from "./VideoModal";

export default function CardServicio({ servicio }) {
  const [open, setOpen] = useState(false);

  const tieneVideo = Boolean(servicio.vimeoId);
  const imagenFondo = servicio.thumbnail || servicio.imagen;

  return (
    <>
      <article className="servicio-card">
        <div
          className={`servicio-media ${tieneVideo ? "media-clickable" : ""}`}
          onClick={tieneVideo ? () => setOpen(true) : undefined}
          role={tieneVideo ? "button" : undefined}
          tabIndex={tieneVideo ? 0 : undefined}
          onKeyDown={
            tieneVideo ? (e) => e.key === "Enter" && setOpen(true) : undefined
          }
        >
          <img src={imagenFondo} alt={`Ejemplo de ${servicio.titulo}`} />

          {servicio.tag && <span className="servicio-tag">{servicio.tag}</span>}

          {tieneVideo && <div className="play-btn">▶</div>}
        </div>

        <div className="servicio-content">
          <h3>{servicio.titulo}</h3>
          <p className="servicio-sub">{servicio.subtitulo}</p>

          <p className="servicio-text">
            <strong>¿Para qué sirve?</strong> {servicio.paraQueSirve}
          </p>

          <ul className="servicio-lista">
            {servicio.incluye.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="servicio-ejemplo">
            <strong>{servicio.ejemplo}</strong>
          </p>

          <div className="servicio-actions">
            <a className="servicio-cta" href="#contacto">
              Quiero este servicio →
            </a>
          </div>
        </div>
      </article>

      {open && (
        <VideoModal
          vimeoId={servicio.vimeoId}
          aspect="9:16"
          title={`Demo: ${servicio.titulo}`}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
