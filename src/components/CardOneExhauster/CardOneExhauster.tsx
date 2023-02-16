import React from "react";
import Accordion from "../Accordion/Accordion";
import Button from "../Button";
import Panel from "../Panel";
import ExshausterPreview from "../SvgComponents/ExshausterPreview/ExshausterPreview";
import styles from "./CardOneExhauster.module.css";

const CardOneExhauster: React.FC = () => {
  return (
    <>
      <Panel
        className={styles.panel}
        title={"Эксгаустер У-171"}
        TitleBarRightComponent={<Button />}
        TitleBarLeftComponent={<div>o</div>}
      >
        <div>
          <div className={styles.group_rotor}>
            <p className={styles.title_rotor}>Ротор № 1</p>
            <div className={styles.rotor_data}>25.1.2023</div>
          </div>
          <div className={styles.separator}></div>
          <p>Последняя замена ротора</p>
          <div className={styles.update_group}>
            <div className={styles.rotor_update_day}>3 сут</div>
            <div className={styles.update_group_forecast}>
              <div>Прогноз</div>
              <div>10 сут</div>
            </div>
          </div>
          <ExshausterPreview />
          <Accordion />
        </div>
      </Panel>
    </>
  );
};

export default CardOneExhauster;
