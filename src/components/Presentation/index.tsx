
import styles from "./styles.module.css";
import Image from "next/image";

export default function Presentation() {
  return (
    <section id={styles.home}>
      <section className={styles.presentation}>
        <Image
          className={styles.profileImage}
          src="/profilePic.png"
          alt="Picture of the author"
          width={230}
          height={200}
        />

        <div className={styles.titles}>
          <h1>Software Developer</h1>
          <h3>Iván Dominguez</h3>
        </div>
      </section>
      <span></span>
    </section>
  );
}
