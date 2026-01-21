import "../styles/sobremi.css";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiFigma,
} from "react-icons/si";

export default function SobreMi() {
  const skills = [
    { name: "React + Vite", Icon: SiReact },
    { name: "HTML5", Icon: SiHtml5 },
    { name: "CSS3", Icon: SiCss3 },
    { name: "JavaScript / TypeScript", Icon: SiJavascript },

    { name: "ASP.NET Core Web API", Icon: SiDotnet },
    { name: "Firebase", Icon: SiFirebase },
    { name: "Flutter", Icon: SiFlutter },
    { name: "Git / GitHub", Icon: SiGit },
    { name: "UI / UX (Figma)", Icon: SiFigma },
  ];

  return (
    <section className="sobremi" id="sobremi">
      <div className="sobremi-inner">
        <h2>Sobre mí</h2>

        <p className="sobremi-text">
          Mi nombre es Ana y cursé la carrera de Desarrollo Web y Aplicaciones
          Móviles y me recibí de Desarrolladora web. Durante este tiempo realicé
          proyectos desafiantes que me permitieron aprender, crecer y, al mismo
          tiempo, desarrollar mis propios proyectos personales. Me apasiona
          crear sitios web dinámicos y funcionales, así como aplicaciones
          móviles modernas que brinden una excelente experiencia de usuario.
          Disfruto enfrentar nuevos retos, buscar soluciones creativas y
          optimizar cada detalle para que la tecnología realmente aporte valor.
          Sigo en constante aprendizaje, incorporando nuevas herramientas y
          tendencias del sector, con el objetivo de seguir creciendo
          profesionalmente y participar en proyectos innovadores que marquen una
          diferencia.
        </p>

        {/* Línea divisoria */}
        <hr className="sobremi-divider" />

        {/* Subtítulo */}
        <h3 className="sobremi-subtitle">Tecnologías</h3>

        <div className="sobremi-skills">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="skill-item" title={name}>
              <Icon className="skill-icon" />
              <span className="skill-label">{name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Indicador scroll (igual al del hero) */}
      <a
        href="#contacto"
        className="scroll-indicator"
        aria-label="Ir a Contacto"
      >
        <span className="chevron"></span>
      </a>
    </section>
  );
}
