import "../styles/videoModal.css";

export default function VideoModal({
  vimeoId,
  onClose,
  aspect = "16:9",
  title = "Video",
}) {
  const esVertical = aspect === "9:16";

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div
        className={`video-modal ${esVertical ? "vertical" : "horizontal"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose}>
          ✕
        </button>

        <div
          className={`video-wrapper ${esVertical ? "vertical" : "horizontal"}`}
        >
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
