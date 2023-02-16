import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["root"]}>
      <Logo />
      <h1 className={styles["title"]}>Прогнозная аналитика эксгаустеров</h1>
    </div>
  );
}

export default Header;
