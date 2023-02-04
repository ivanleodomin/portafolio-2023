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
      <hr className={styles.divider} />
      <section className={styles.about}>
        <div>
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos hic animi soluta voluptatem quos molestias, nisi
            laudantium cum tenetur nihil, perspiciatis delectus mollitia
            distinctio, labore a consectetur dolorum voluptate sed! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officia, ducimus
            veritatis. Nisi dolorum, id, maxime praesentium explicabo voluptas
            et aperiam, laudantium illum consequatur sed quaerat non temporibus
            ratione accusamus molestias?
          </p>
        </div>
      </section>
    </section>
  );
}
