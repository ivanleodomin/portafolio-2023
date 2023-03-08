import Image from "next/image";
import styles from "./styles.module.css";
import { Work } from "@/types";

type Props = {
  work: Work;
};

const items: Work[] = [
  {
    logo: {
      src: "/logos/cruce.png",
      height: 200,
      width: 150,
    },
    titles: {
      position: "Software Engineer",
      company: "E-CRUCE",
    },
    responsabilities: [
      "Desarrollo de aplicaciones web",
      "Diseñar y desarrollar soluciones de software utilizando una arquitectura de microservicios",
      "Migración de servicios monolitos existentes a microservicios",
      "Desarrollo de testing utilizando TDD",
      "Comunicarse y colaborar con el equipo de gestión de proyectos para garantizar que los objetivos del proyecto se cumplan con éxito",
      "Desarrollo de CI/CD y mantenimiento de servidores linux",
      "Asistencia a compañeros del equipo",
    ],
  },
  {
    logo: {
      src: "/logos/coderhouse.png",
      height: 120,
      width: 150,
    },
    titles: {
      position: "Tutor",
      company: "coderhouse",
    },
    responsabilities: [
      "Tutor de curso de programacion en Javascript",
      "Apoyo y seguimiento el alumno",
      "Correccion y devolucion de proyectos mas dicato de clases de apoyo",
      "Fomentar la colaboración y el trabajo en equipo entre los estudiantes, creando un ambiente de aprendizaje colaborativo y constructivo.",
    ],
  },
  {
    logo: {
      src: "/logos/navent.png",
      height: 100,
      width: 190,
    },
    titles: {
      position: "Fullstack Developer",
      company: "Navent",
    },
    responsabilities: [
      "Desarrollo de app nodejs en con Reactjs y Expresss.",
      "Implementar las funcionalidades y características solicitadas por el cliente.",
      "Realizar pruebas de integración y asegurar la calidad del software desarrollado.",
      "Colaborar con el equipo para garantizar que los plazos y los objetivos del proyecto se cumplan con éxito",
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h1>Experiencia</h1>
      {items.map((item, key) => (
        <WorkItem work={item} key={key} />
      ))}
    </section>
  );
}

function WorkItem({ work }: Props, key: number) {
  return (
    <div className={styles.worktag} key={key}>
      <div className={styles.logo}>
        <Image
          src={work.logo.src}
          alt="/logo-company.png"
          width={work.logo.width}
          height={work.logo.height}
        />
      </div>
      <div className={styles.title}>
        <h3>{work.titles.position}</h3>
        <p>en</p>
        <h4>{work.titles.company}</h4>
      </div>
      <div className={styles.details}>
        <ul>
          {work.responsabilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
