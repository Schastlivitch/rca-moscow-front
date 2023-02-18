import React from "react";
import Accordion from "../Accordion/Accordion";
import Button from "../Button";
import Panel from "../Panel";
import { ReactComponent as CircleAlert } from "../../assets/isWorkAlertCircle.svg";
import { ReactComponent as CircleOk } from "../../assets/isWorkOkCircle.svg";
import { ReactComponent as ButtonArrow } from "../../assets/buttonArrow.svg";
import ExshausterCanvas from "../SvgComponents/ExshausterPreview/ExhausterCanvas";
import styles from "./CardOneExhauster.module.css";
import ItemsList from "../Accordion/partials/ItemsList";

interface IPropExhauster {
  data: Data;
}
interface Data {
  displayName: string;
  isWork: boolean;
  rotorName: string;
  rotorChangeDate: string;
  rotorChangePrediction: number;
  bearings: Bearings[];
  oilLevel: string;
}
interface Bearings {
  [key: string]: string;
}

const CardOneExhauster: React.FC<IPropExhauster> = ({ data }) => {
  const okData = data.bearings.filter(
    (el) => el.temperature === "ok" && el.vibration === "ok"
  );
  const alertData = data.bearings.filter(
    (el) => el.temperature !== "ok" || el.vibration !== "ok"
  );

  const rotorDate = data.rotorChangeDate.slice(0, 10);
  return (
    <>
      <Panel
        className={styles.panel}
        title={data.displayName}
        TitleBarRightComponent={
          <Button className={styles.button_header}>
            <ButtonArrow />
          </Button>
        }
        TitleBarLeftComponent={data.isWork ? <CircleOk /> : <CircleAlert />}
      >
        <div>
          <div className={styles.group_rotor}>
            <p className={styles.title_rotor}>Ротор № {data.rotorName}</p>
            <div className={styles.rotor_data}>{rotorDate}</div>
          </div>
          <div className={styles.separator}></div>
          <p className={styles.repair}>Последняя замена ротора</p>
          <div className={styles.update_group}>
            <div className={styles.rotor_update_day}>3 сут</div>
            <div className={styles.update_group_forecast}>
              <div className={styles.update_forecast_title}>Прогноз</div>
              <div className={styles.update_forecast_day}>
                {data.rotorChangePrediction} сут
              </div>
            </div>
          </div>
          <ExshausterCanvas />
          <Accordion title="Предупреждение">
            <ItemsList
              listItems={alertData}
              oilLevel={
                data.oilLevel === "warning" || data.oilLevel === "alert"
                  ? "alert"
                  : undefined
              }
            />
          </Accordion>
          <Accordion title="Все подшипники">
            <ItemsList
              listItems={okData}
              oilLevel={data.oilLevel === "ok" ? "ok" : undefined}
            />
          </Accordion>
        </div>
      </Panel>
    </>
  );
};

export default CardOneExhauster;
