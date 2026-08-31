import { useState } from "react";
import VideoModal from "./VideoModal";

export default function CardProyecto({ proyecto }) {
  const [open, setOpen] = useState(false);
  const [expandido, setExpandido] = useState(false);

  return (
    <>
      <article className="proyecto-card">
        <div className="media media-clickable" onClick={() => setOpen(true)}>
          <img
            src={proyecto.thumbnail}
            alt={proyecto.titulo}
            className="thumb"
            loading="lazy"
          />

          <div className="play-btn" aria-hidden="true">
            ▶
          </div>
        </div>

        <div className="contenido">
          <h2>{proyecto.titulo}</h2>

          <p className={`descripcion ${expandido ? "expandida" : ""}`}>
            {proyecto.descripcion}
          </p>

          {proyecto.descripcion.length > 200 && (
            <button
              className="leer-mas"
              onClick={() => setExpandido(!expandido)}
              aria-expanded={expandido}
            >
              {expandido ? "Leer menos" : "Leer más"}
            </button>
          )}

          <div className="tech">
            {proyecto.tecnologias.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </article>

      {open && (
        <VideoModal
          vimeoId={proyecto.vimeoId}
          aspect={proyecto.aspect || "16:9"}
          title={proyecto.titulo}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
