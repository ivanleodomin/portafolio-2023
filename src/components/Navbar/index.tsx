import styles from "./styles.module.css";
import MenuIcon from "../MenuIcon";
import useToggle from "@/hooks/useToggle";
import { useEffect } from "react";

export default function Navbar() {
  const [value, toggleActive] = useToggle(false);

  useEffect(() => {
    console.log("value: " + value);
  }, [value]);

  return (
    <>
      <header className={styles.header}>
        <MenuIcon value={value} toggleActive={toggleActive} />
      </header>
      <nav className={styles.menu} id={value ? styles.visibility : ""}>
        <div className={styles.shadow} onClick={() => toggleActive()}></div>
        <div className={styles.sidebar}>
          <ul>
            <li>Inicio</li>
            <li>Expreriencia</li>
            <li>Proyectos</li>
            <li>Expreriencia</li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
