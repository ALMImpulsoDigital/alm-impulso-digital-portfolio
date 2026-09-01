import "../styles/tecnologiasSection.css";

export default function TecnologiasSection() {
  const skills = [
    {
      name: "HTML5",
      image: "/assets/iconos/HTML5.webp",
      alt: "HTML5",
      width: 160,
      height: 199,
    },

    {
      name: "CSS3",
      image: "/assets/iconos/CSS3.webp",
      alt: "CSS3",
      width: 160,
      height: 197,
    },

    {
      name: "Visual Studio Code",
      image: "/assets/iconos/VS-Code.webp",
      alt: "Visual Studio Code",
      width: 160,
      height: 186,
    },

    {
      name: "React + Vite",
      image: "/assets/iconos/React-Vite.webp",
      alt: "React y Vite",
      width: 160,
      height: 164,
    },

    {
      name: "Flutter",
      image: "/assets/iconos/Flutter.webp",
      alt: "Flutter",
      width: 160,
      height: 221,
    },

    {
      name: "Git",
      image: "/assets/iconos/Git-GitHub.webp",
      alt: "Git",
      width: 160,
      height: 156,
    },

    {
      name: "GitHub",
      image: "/assets/iconos/GitHub.webp",
      alt: "GitHub",
      width: 160,
      height: 180,
    },

    {
      name: ".NET",
      image: "/assets/iconos/DotNet.webp",
      alt: ".NET y ASP.NET Core",
      width: 160,
      height: 140,
    },

    {
      name: "JavaScript / TypeScript",
      image: "/assets/iconos/JS.webp",
      alt: "JavaScript y TypeScript",
      width: 160,
      height: 201,
    },

    {
      name: "Firebase",
      image: "/assets/iconos/Firebase.webp",
      alt: "Firebase",
      width: 160,
      height: 212,
    },

    {
      name: "Diseño Responsive",
      image: "/assets/iconos/Responsive-Websites.webp",
      alt: "Diseño web responsive",
      width: 160,
      height: 188,
    },

    {
      name: "Figma",
      image: "/assets/iconos/Figma.webp",
      alt: "Figma para diseño UI y UX",
      width: 160,
      height: 184,
    },
  ];

  return (
    <section className="tecnologias-section" id="tecnologias">
      <div className="tecnologias-inner">
        <h2 className="tecnologias-title">Tecnologías</h2>

        <div className="tecnologias-skills">
          {skills.map(({ name, image, alt, width, height }) => (
            <div key={name} className="tecnologia-item" title={name}>
              <img
                src={image}
                alt={alt}
                className="tecnologia-image"
                loading="lazy"
                decoding="async"
                width={width}
                height={height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
