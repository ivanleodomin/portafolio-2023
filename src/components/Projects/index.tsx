import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

type Project = {
  name: string;
  description: string;
  link: string;
  imageSrc: string;
};

type Props = {
  project: Project;
};

const PROJECTS_LIST: Project[] = [
  {
    name: "Game!",
    description: "Este es un game para jugar game fachero!",
    link: "https://github.com/",
    imageSrc: "/images/game.png",
  },
  {
    name: "Game!",
    description: "Este es un game para jugar game fachero!",
    link: "https://github.com/",
    imageSrc: "/images/game.png",
  },
  {
    name: "Game!",
    description: "Este es un game para jugar game fachero!",
    link: "https://github.com/",
    imageSrc: "/images/game.png",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className={styles.titles}>Projects</h1>
      {PROJECTS_LIST.map((project, key) => (
        <Project project={project} key={key} />
      ))}
    </section>
  );
}

function Project({ project }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <Link href={project.link} >Conocer mas!</Link>
      </div>
      <Image className={styles.image} src={project.imageSrc} alt={""} height={100} width={100} />
    </div>
  );
}
