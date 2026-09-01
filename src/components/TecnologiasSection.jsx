import "../styles/tecnologiasSection.css";

export default function TecnologiasSection() {
  const skills = [
    {
      name: "HTML5",
      image: "/assets/iconos/HTML5.webp",
      alt: "HTML5",
    },
    {
      name: "CSS3",
      image: "/assets/iconos/CSS3.webp",
      alt: "CSS3",
    },
    {
      name: "Visual Studio Code",
      image: "/assets/iconos/VS-Code.webp",
      alt: "Visual Studio Code",
    },
    {
      name: "React + Vite",
      image: "/assets/iconos/React-Vite.webp",
      alt: "React y Vite",
    },
    {
      name: "Flutter",
      image: "/assets/iconos/Flutter.webp",
      alt: "Flutter",
    },
    {
      name: "Git",
      image: "/assets/iconos/Git-GitHub.webp",
      alt: "Git",
    },
    {
      name: "GitHub",
      image: "/assets/iconos/GitHub.webp",
      alt: "GitHub",
    },
    {
      name: ".NET",
      image: "/assets/iconos/DotNet.webp",
      alt: ".NET y ASP.NET Core",
    },
    {
      name: "JavaScript / TypeScript",
      image: "/assets/iconos/JS.webp",
      alt: "JavaScript y TypeScript",
    },
    {
      name: "Firebase",
      image: "/assets/iconos/Firebase.webp",
      alt: "Firebase",
    },
    {
      name: "Diseño Responsive",
      image: "/assets/iconos/Responsive-Websites.webp",
      alt: "Diseño web responsive",
    },
    {
      name: "Figma",
      image: "/assets/iconos/Figma.webp",
      alt: "Figma para diseño UI y UX",
    },
  ];

  return (
    <section className="tecnologias-section" id="tecnologias">
      <div className="tecnologias-inner">
        <h2 className="tecnologias-title">Tecnologías</h2>

        <div className="tecnologias-skills">
          {skills.map(({ name, image, alt }) => (
            <div key={name} className="tecnologia-item" title={name}>
              <img
                src={image}
                alt={alt}
                className="tecnologia-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
