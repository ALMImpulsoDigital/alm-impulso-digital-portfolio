import Hero from "../components/Hero";
import ServiciosSection from "../components/ServiciosSection";
import SobreMi from "../components/SobreMi";
import TecnologiasSection from "../components/TecnologiasSection";
import ProyectosSection from "../components/ProyectosSection";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosSection />
      <TecnologiasSection />
      <ProyectosSection />
      <SobreMi />
      <Contacto />
    </>
  );
}
