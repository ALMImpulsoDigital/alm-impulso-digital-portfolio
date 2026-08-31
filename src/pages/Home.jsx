import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import ServiciosSection from "../components/ServiciosSection";
import SobreMi from "../components/SobreMi";
import TecnologiasSection from "../components/TecnologiasSection";
import ProyectosSection from "../components/ProyectosSection";
import Contacto from "../components/Contacto";

export default function Home() {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "ALM Impulso Digital",

    url: "https://almimpulsodigital.com/",

    logo: "https://almimpulsodigital.com/assets/logoalm.png",

    image: "https://almimpulsodigital.com/assets/logoalm.png",

    description:
      "Desarrollo de páginas web, sistemas de gestión, aplicaciones y soluciones digitales a medida para emprendedores, profesionales y empresas.",

    email: "almimpulsodigital@gmail.com",

    telephone: "+54 9 3541 67-8553",

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Córdoba, Argentina",
      },
      {
        "@type": "Country",
        name: "Argentina",
      },
    ],

    sameAs: [
      "https://www.instagram.com/alm.impulsodigital/",
      "https://github.com/ALMImpulsoDigital",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de ALM Impulso Digital",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo de páginas web",
            description:
              "Diseño y desarrollo de páginas web profesionales y personalizadas para emprendedores, profesionales y empresas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sistemas de gestión a medida",
            description:
              "Desarrollo de sistemas personalizados para organizar, automatizar y optimizar procesos de negocios.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo de aplicaciones móviles",
            description:
              "Desarrollo de aplicaciones móviles personalizadas e integradas con sistemas, APIs y bases de datos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tiendas online y e-commerce",
            description:
              "Desarrollo de tiendas online y soluciones de comercio electrónico adaptadas a cada negocio.",
          },
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Desarrollo de Software a Medida en Córdoba | ALM Impulso Digital
        </title>

        <meta
          name="description"
          content="Desarrollo de páginas web, sistemas de gestión, aplicaciones y soluciones digitales a medida para emprendedores, profesionales y empresas en Córdoba."
        />

        <link rel="canonical" href="https://almimpulsodigital.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Desarrollo de Software a Medida en Córdoba | ALM Impulso Digital"
        />

        <meta
          property="og:description"
          content="Desarrollo de páginas web, sistemas de gestión, aplicaciones y soluciones digitales a medida para emprendedores, profesionales y empresas."
        />

        <meta property="og:url" content="https://almimpulsodigital.com/" />

        <meta
          property="og:image"
          content="https://almimpulsodigital.com/assets/alm-social-share.png"
        />

        <meta property="og:site_name" content="ALM Impulso Digital" />

        <meta property="og:locale" content="es_AR" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Desarrollo de Software a Medida en Córdoba | ALM Impulso Digital"
        />

        <meta
          name="twitter:description"
          content="Desarrollo de páginas web, sistemas de gestión, aplicaciones y soluciones digitales a medida para emprendedores, profesionales y empresas."
        />

        <meta
          name="twitter:image"
          content="https://almimpulsodigital.com/assets/alm-social-share.png"
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrganization)}
        </script>
      </Helmet>

      <Hero />
      <ServiciosSection />
      <TecnologiasSection />
      <ProyectosSection />
      <SobreMi />
      <Contacto />
    </>
  );
}
