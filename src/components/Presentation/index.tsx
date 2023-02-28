import styles from "./styles.module.css";
import TwitterPicture from "../twitterPicture";
import Link from "next/link";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className={styles.presentation}>
      <TwitterPicture />
      <div className={styles.titles}>
        <h3>¡Hola! Bienvenido a mi portafolio</h3>
        <p>
       Un amante del desarrollo y la tecnologia, con hambre de conocimiento y con deseo de crecer.
        </p>
      </div>

      <div className={styles.buttons}>
        <Link href="/" className={styles.contactButton}>
          Let's meet up
        </Link>
        <Link href="/" className={styles.resumeButton}>
          Download resume
          <Image
            className={styles.profileImage}
            src="/icons/resume.png"
            alt="resume icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </section>
  );
}
