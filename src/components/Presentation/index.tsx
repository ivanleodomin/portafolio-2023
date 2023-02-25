import styles from "./styles.module.css";
import TwitterPicture from "../twitterPicture";
import Link from "next/link";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className={styles.presentation}>
      <TwitterPicture />
      <div className={styles.titles}>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          ducimus harum adipisci exercitationem consequuntur rem odio! Placeat
        </h3>
      </div>

      <div className={styles.buttons}>
        <Link href="/" className={styles.contactButton}>
          Let's meet up
        </Link>
        <Link href="/" className={styles.resumeButton}>
          Download resume
          <Image
            className={styles.profileImage}
            src="/resume-icon.png"
            alt="resume icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </section>
  );
}
