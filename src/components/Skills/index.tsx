import Image from "next/image";
import styles from "./styles.module.css";

export default function Skills() {
  return (
    <>
      <section>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.skills_content}>
          <div className={styles.column}>
            <div className={styles.icon}><Image alt="logo" src="/icons/gears.png" width={30} height={30} /></div>
            <h1>Backend</h1>
            <p>
              Me gusta desarrollar proyectos a partir del analisis profundo de
              la problematica y asi decidir las tecnologias y practicas mas
              optimas para el mismo
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
          <div className={styles.icon}><Image alt="logo" src="/icons/front.png" width={30} height={30} /></div>
            <h1>Frontend</h1>
            <p>
              Me gusta desarrollar proyectos a partir del analisis profundo de
              la problematica y asi decidir las tecnologias y practicas mas
              optimas para el mismo
            </p>

            <h3>Lenguajes</h3>
            <ul>
              <li>Javascript/Typescript</li>
            </ul>
            <h3>Librerias</h3>
            <ul>
              <li>ReactJs</li>
              <li>Nextjs</li>
            </ul>
          </div>
          <div className={styles.column}>
          <div className={styles.icon}><Image alt="logo" src="/icons/servers.png" width={30} height={30} /></div>
            <h1>Infraestructura</h1>
            <p>
              Me gusta desarrollar proyectos a partir del analisis profundo de
              la problematica y asi decidir las tecnologias y practicas mas
              optimas para el mismo
            </p>

            <h3>Cloud</h3>
            <ul>
              <li>AWS</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Hostinger</li>
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
