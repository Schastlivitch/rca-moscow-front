import styles from "./Button.module.css";

function Button() {
  return (
    <button type="button" className={styles["root"]}>
      Button
    </button>
  );
}

export default Button;
