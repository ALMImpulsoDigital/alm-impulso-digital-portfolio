import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServiciosPage from "./pages/ServiciosPage";
import ProyectosHome from "./pages/ProyectosHome";
import ProyectosPage from "./pages/ProyectosPage";

import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/proyectos" element={<ProyectosHome />} />
        <Route path="/proyectos/:categoria" element={<ProyectosPage />} />
      </Routes>

      <Footer />
    </>
  );
}
