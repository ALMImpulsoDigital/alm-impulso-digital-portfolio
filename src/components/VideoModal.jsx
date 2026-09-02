import { useEffect } from "react";

import "../styles/videoModal.css";

export default function VideoModal({
  vimeoId,
  onClose,
  aspect = "16:9",
  title = "Video",
}) {
  const esVertical = aspect === "9:16";

  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", cerrarConEscape);
    };
  }, [onClose]);

  return (
    <div
      className="video-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`video-modal ${
          esVertical ? "video-modal-vertical" : "video-modal-horizontal"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="video-modal-close"
          onClick={onClose}
          aria-label="Cerrar video"
        >
          ✕
        </button>

        <div
          className={`video-wrapper ${
            esVertical ? "video-wrapper-vertical" : "video-wrapper-horizontal"
          }`}
        >
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
