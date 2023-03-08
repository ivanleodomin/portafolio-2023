import Image from "next/image";
import styles from "./styles.module.css";

export default function Skills() {
  return (
    <>
      <section className={styles.section}>
        {/* <h1 className={styles.title}>Skills</h1> */}
        <div className={styles.conten}>
          <div className={styles.column}>
            <div className={styles.icon}>
              <Image alt="logo" src="/icons/gears.png" width={30} height={30} />
            </div>
            <h1>Backend</h1>
            <p>
              Encuentro fascinante desarrollar proyectos a partir del análisis
              profundo de la problemática y así decidir las tecnologías y
              prácticas más óptimas para el mismo.
            </p>

            <h3>Lenguajes</h3>
            <ul>
              <li>Javascript/Typescript</li>
              <li>Python</li>
              <li>Golang (basico)</li>
            </ul>
            <h3>Librerias</h3>
            <ul>
              <li>Express</li>
              <li>Django</li>
              <li>Fiber</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.icon}>
              <Image alt="logo" src="/icons/front.png" width={30} height={30} />
            </div>
            <h1>Frontend</h1>
            <p>
              Me gusta desarrollar aplicaciones con impacto visual y con
              funcionalidades tanto interesantes como desafiantes para el
              desarrollo.
            </p>

            <h3>Lenguajes</h3>
            <ul>
              <li>Javascript/Typescript</li>
              <li>HTML</li>
              <li>CSS/SASS</li>
            </ul>
            <h3>Librerias</h3>
            <ul>
              <li>ReactJs</li>
              <li>Nextjs</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.icon}>
              <Image
                alt="logo"
                src="/icons/servers.png"
                width={30}
                height={30}
              />
            </div>
            <h1 style={{ marginBottom: 0 }}>Infraestructura</h1>
            <h3>Cloud</h3>
            <ul>
              <li>AWS</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Hostinger</li>
            </ul>
            <h3>Bases de Datos</h3>
            <ul>
              <li>MongoDB</li>
              <li>Postgres</li>
              <li>Redis</li>
            </ul>

            <h3>Brockers de mensajeria</h3>
            <ul>
              <li>Apache Kafka</li>
              <li>Rabbitmq</li>
            </ul>

            <h3>Contenedores</h3>
            <ul>
              <li>Kubernetes</li>
              <li>Docker</li>
              <li>Docker-compose</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
