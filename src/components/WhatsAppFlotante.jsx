import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsappFlotante.css";

export default function WhatsAppFlotante() {
  const numeroWhatsApp = "5493541678553";

  const mensaje =
    "Hola, quisiera consultar por los servicios de ALM Impulso Digital.";

  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensaje,
  )}`;

  return (
    <a
      href={enlaceWhatsApp}
      className="whatsapp-flotante"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a ALM Impulso Digital por WhatsApp"
      title="Escribinos por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
