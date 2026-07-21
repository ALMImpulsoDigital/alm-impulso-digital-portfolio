import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFlotante from "./components/WhatsAppFlotante";

import Home from "./pages/Home";
import Proyectos from "./components/Proyectos";

import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  return (
    <>
      <div className="app-bg-parallax"></div>

      <div className="app-shell">
        <ScrollToHash />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:categoria" element={<Proyectos />} />
        </Routes>

        <Footer />
      </div>

      <WhatsAppFlotante />
    </>
  );
}
