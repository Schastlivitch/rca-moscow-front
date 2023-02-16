// Styles
import styles from "../ControlPage.module.css";

function Legend() {
  return (
    <div className={styles["legend"]}>
      <div className={styles["legend_item"]}>Легенда 3</div>
      <div className={styles["legend_item"]}>Легенда 4</div>
    </div>
  );
}

export default Legend;
