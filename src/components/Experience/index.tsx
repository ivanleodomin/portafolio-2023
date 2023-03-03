import Image from "next/image";
import styles from "./styles.module.css";
import { Work } from "@/types";

const items: Work[] = [
  {
    logo: {
      src: "/logos/cruce.png",
      height: 200,
      width: 150
    },
    titles: {
      position: "Software Engineer",
      company: "E-CRUCE",
    },
    responsabilities: [
      "Desarrollo, soporte y evolutivos de aplicaciones web",
      "Migración de servicios monolitos existentes a microservicios",
      "Desarrollo de testing utilizando TDD",
      "Análisis y optimización de procesos en el desarrollo",
      "Desarrollo de CI/CD",
      "Asistencia a compañeros del equipo",
    ],
  },
  {
    logo: {
      src: "/logos/coderhouse.png",
      height: 120,
      width: 150
    },
    titles: {
      position: "Tutor",
      company: "coderhouse",
    },
    responsabilities: [
      "Desarrollo, soporte y evolutivos de aplicaciones web",
      "Migración de servicios monolitos existentes a microservicios",
      "Desarrollo de testing utilizando TDD",
      "Análisis y optimización de procesos en el desarrollo",
      "Desarrollo de CI/CD",
      "Asistencia a compañeros del equipo",
    ],
  },
  {
    logo: {
      src: "/logos/navent.png",
      height: 100,
      width: 190
    },
    titles: {
      position: "Software Engineer",
      company: "Navent",
    },
    responsabilities: [
      "Desarrollo, soporte y evolutivos de aplicaciones web",
      "Migración de servicios monolitos existentes a microservicios",
      "Desarrollo de testing utilizando TDD",
      "Análisis y optimización de procesos en el desarrollo",
      "Desarrollo de CI/CD",
      "Asistencia a compañeros del equipo",
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h1>Experiencia</h1>
      {items.map((item) => WorkItem(item))}
    </section>
  );
}

function WorkItem({ logo, responsabilities, titles }: Work) {
  return (
    <div className={styles.worktag}>
      <div className={styles.logo}>
        <Image src={logo.src} alt="/logo-company.png" width={logo.width} height={logo.height} />
      </div>
      <div className={styles.title}>
        <h3>{titles.position}</h3>
        <p>en</p>
        <h4>{titles.company}</h4>
      </div>
      <div className={styles.details}>
        <ul>
          {responsabilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
