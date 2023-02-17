import React from "react";
import { ReactComponent as LegendSvg } from "../../assets/legend.svg";
import Button from "../Button";
import styles from "./Legend.module.css";
const Legend: React.FC = () => {
  return (
    <div className={styles.body}>
      <Button className={styles.button}>выкл</Button>
      <LegendSvg />
    </div>
  );
};

export default Legend;
