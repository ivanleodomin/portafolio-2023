import styles from "./styles.module.css";

export default function About() {
  return (
    <section>
      <h3 className={styles.title}>About me</h3>
      <div className={styles.content}>
        <div className={styles.principalSection}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos hic animi soluta voluptatem quos molestias, nisi
            laudantium cum tenetur nihil, perspiciatis delectus mollitia
            distinctio, labore a consectetur dolorum voluptate sed! Lorem dolor
            sit amet consectetur adipisicing elit. Officia, ducimus veritatis.
            Nisi dolorum, id, maxime praesentium explicabo voluptas et aperiam,
            laudantium illum consequatur sed quaerat non temporibus ratione
            accusamus molestias?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum magnam ex delectus officia laboriosam
            totam quia sint eveniet. Aspernatur est sint cum nobis voluptatem
            facere nesciunt veritatis officia ratione magnam!
          </p>
        </div>
        <div className={styles.secondSection}>
          <h4>Example</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi
            explicabo fuga numquam repudiandae enim, veniam delectus provident
            dolorum facilis sunt deserunt est. Optio!
          </p>
          <h4>Example</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            saepe a deleniti inventore minima adipisci recusandae dicta?{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
