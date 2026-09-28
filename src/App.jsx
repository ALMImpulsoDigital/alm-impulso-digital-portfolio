import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFlotante from "./components/WhatsAppFlotante";
import Home from "./pages/Home";
import Proyectos from "./components/Proyectos";
import ScrollToHash from "./components/ScrollToHash";
import DesarrolloWebCordoba from "./pages/DesarrolloWebCordoba";
import SistemasGestionMedida from "./pages/SistemasGestionMedida";

export default function App() {
  return (
    <>
      <div className="app-bg-parallax"></div>

      <div className="app-shell">
        <ScrollToHash />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/desarrollo-web-cordoba"
            element={<DesarrolloWebCordoba />}
          />

          <Route
            path="/sistemas-de-gestion-a-medida"
            element={<SistemasGestionMedida />}
          />

          <Route
            path="/proyectos/web"
            element={<Proyectos categoriaFija="web" />}
          />

          <Route
            path="/proyectos/mobile"
            element={<Proyectos categoriaFija="mobile" />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>

      <WhatsAppFlotante />
    </>
  );
}
