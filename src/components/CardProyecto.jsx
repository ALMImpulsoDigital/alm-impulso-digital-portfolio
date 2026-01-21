import { useState } from "react";
import VideoModal from "./VideoModal";

export default function CardProyecto({ proyecto }) {
  const [open, setOpen] = useState(false);
  const [expandido, setExpandido] = useState(false);

  return (
    <>
      <div className="proyecto-card">
        <div className="media media-clickable" onClick={() => setOpen(true)}>
          <img
            src={proyecto.thumbnail}
            alt={proyecto.titulo}
            className="thumb"
          />
          <div className="play-btn">▶</div>
        </div>

        <div className="contenido">
          <h3>{proyecto.titulo}</h3>

          <p className={`descripcion ${expandido ? "expandida" : ""}`}>
            {proyecto.descripcion}
          </p>

          {proyecto.descripcion.length > 200 && (
            <button
              className="leer-mas"
              onClick={() => setExpandido(!expandido)}
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
      </div>

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
