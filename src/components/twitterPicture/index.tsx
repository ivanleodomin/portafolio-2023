import Image from "next/image";
import styles from "./styles.module.css";

export default function TwitterPicture() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.profileImage}
        src="/images/profilePic.png"
        alt="Picture of the author"
        width={100}
        height={90}
      />
      <div id={styles.name}>
        <h3>Ivan Dominguez</h3>
        <Image
          src="/images/Twitter-Verified-Image.png"
          alt="Twitter Verified Image"
          width={30}
          height={21}
        />
        <p>@ivandev</p>
      </div>
    </div>
  );
}
