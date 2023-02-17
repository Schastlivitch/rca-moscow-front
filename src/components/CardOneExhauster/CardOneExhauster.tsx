import React from "react";
import Accordion from "../Accordion/Accordion";
import Button from "../Button";
import Panel from "../Panel";
import { ReactComponent as ButtonArrow } from "../../assets/buttonArrow.svg";
import ExshausterPreview from "../SvgComponents/ExshausterPreview/ExshausterPreview";
import styles from "./CardOneExhauster.module.css";

const CardOneExhauster: React.FC = () => {
  return (
    <>
      <Panel
        className={styles.panel}
        title={"Эксгаустер У-171"}
        TitleBarRightComponent={
          <Button className={styles.button_header}>
            <ButtonArrow />
          </Button>
        }
        TitleBarLeftComponent={<div>o</div>}
      >
        <div>
          <div className={styles.group_rotor}>
            <p className={styles.title_rotor}>Ротор № 1</p>
            <div className={styles.rotor_data}>25.1.2023</div>
          </div>
          <div className={styles.separator}></div>
          <p className={styles.repair}>Последняя замена ротора</p>
          <div className={styles.update_group}>
            <div className={styles.rotor_update_day}>3 сут</div>
            <div className={styles.update_group_forecast}>
              <div className={styles.update_forecast_title}>Прогноз</div>
              <div className={styles.update_forecast_day}>10 сут</div>
            </div>
          </div>
          <ExshausterPreview />
          <Accordion title="Предупреждение" />
          <Accordion title="Все подшипники" />
        </div>
      </Panel>
    </>
  );
};

export default CardOneExhauster;
