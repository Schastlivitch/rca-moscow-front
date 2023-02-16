// Styles
import styles from "../MainPage.module.css";

function Legend() {
  return (
    <div className={styles["legend"]}>
      <div className={styles["legend_item"]}>Легенда 1</div>
      <div className={styles["legend_item"]}>Легенда 2</div>
    </div>
  );
}

export default Legend;
