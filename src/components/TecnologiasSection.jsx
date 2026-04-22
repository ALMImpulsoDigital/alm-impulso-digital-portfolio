import "../styles/tecnologiasSection.css";

export default function TecnologiasSection() {
  const skills = [
    { name: "HTML5", image: "/assets/iconos/HTML5.png" },
    { name: "CSS3", image: "/assets/iconos/CSS3.png" },
    { name: "VsCode", image: "/assets/iconos/VsCode.png" },
    { name: "React-Vite", image: "/assets/iconos/React+Vite.png" },
    { name: "Flutter", image: "/assets/iconos/Flutter.png" },
    { name: "Git", image: "/assets/iconos/Git.png" },
    { name: "GitHub", image: "/assets/iconos/GitHub.png" },
    { name: ".Net", image: "/assets/iconos/Net.png" },
    { name: "JS", image: "/assets/iconos/JS.png" },
    { name: "Firebase", image: "/assets/iconos/Firebase.png" },
    { name: "Responsive", image: "/assets/iconos/Responsive.png" },
    { name: "Figma", image: "/assets/iconos/Figma.png" },
  ];

  return (
    <section className="tecnologias-section" id="tecnologias">
      <div className="tecnologias-inner">
        <h2 className="tecnologias-title">Tecnologías</h2>

        <div className="tecnologias-skills">
          {skills.map(({ name, image }) => (
            <div key={name} className="tecnologia-item" title={name}>
              <img src={image} alt={name} className="tecnologia-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
