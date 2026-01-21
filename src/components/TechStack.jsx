import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDotnet,
  SiReact,
  SiMui,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiJsonwebtokens,
  SiSendgrid,
} from "react-icons/si";

import "../styles/techStack.css";

import { HiKey } from "react-icons/hi2"; // API Key (genérico)

const SKILLS = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },

  { name: "ASP.NET Core", Icon: SiDotnet },

  { name: "React", Icon: SiReact },
  { name: "Material UI", Icon: SiMui },
  { name: "Firebase", Icon: SiFirebase },

  { name: "Flutter", Icon: SiFlutter },
  { name: "Dart", Icon: SiDart },

  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "API Key", Icon: HiKey }, // no es “marca”, es ícono
  { name: "SendGrid", Icon: SiSendgrid },
];

export default function TechStack() {
  return (
    <div className="tech-grid">
      {SKILLS.map(({ name, Icon }) => (
        <div className="tech-item" key={name}>
          <Icon className="tech-icon" />
          <span className="tech-label">{name}</span>
        </div>
      ))}
    </div>
  );
}
