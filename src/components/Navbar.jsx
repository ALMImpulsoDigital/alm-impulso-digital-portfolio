import { useState } from "react";

import "../styles/navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cerrarMenu = () => setMenuOpen(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={cerrarMenu}>
        <img
          src="/assets/logo-alm.webp"
          alt="ALM Impulso Digital"
          width="400"
          height="160"
        />
      </Link>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <Link to="/#servicios" onClick={cerrarMenu}>
            Servicios
          </Link>
        </li>

        <li>
          <Link to="/#proyectos" onClick={cerrarMenu}>
            Proyectos
          </Link>
        </li>

        <li>
          <Link to="/#contacto" onClick={cerrarMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
