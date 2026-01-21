// src/pages/ProyectosPage.jsx
import { useParams } from "react-router-dom";
import Proyectos from "../components/Proyectos";
import "../styles/proyectosPage.css";

export default function ProyectosPage() {
  const { categoria } = useParams();

  return (
    <div className={`proyectos-page ${categoria}`}>
      <Proyectos />
    </div>
  );
}
