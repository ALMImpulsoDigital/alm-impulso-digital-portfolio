import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src="/assets/logo-alm10.png" alt="ALM Impulso Digital" />
      </Link>

      <ul>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/#contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
