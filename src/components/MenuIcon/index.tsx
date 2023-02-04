import styles from "./styles.module.css";

interface Props {
  toggleActive: Function;
  value: boolean;
}

export default function MenuIcon({ toggleActive, value }: Props) {
  return (
    <div className={styles.container} onClick={() => toggleActive()}>
      <div className={value ? styles.show : ""}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </div>
  );
}
