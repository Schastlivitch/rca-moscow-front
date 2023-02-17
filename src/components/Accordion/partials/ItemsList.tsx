import React from "react";
import { ReactComponent as Temp } from "../../../assets/temp.svg";
import { ReactComponent as TempWarning } from "../../../assets/tempAttention.svg";
import { ReactComponent as TempAlert } from "../../../assets/tempDanger.svg";
import { ReactComponent as Vibration } from "../../../assets/vibration.svg";
import { ReactComponent as VibrationWarning } from "../../../assets/vibrationAttention.svg";
import { ReactComponent as VibrationAlert } from "../../../assets/vibrationDanger.svg";
import { ReactComponent as Oil } from "../../../assets/oil.svg";
import { ReactComponent as OilAlert } from "../../../assets/oilDanger.svg";
import styles from "./ItemsList.module.css";

interface IListItems {
  listItems?: [];
  oilLevel?: string;
}

const ItemsList: React.FC<IListItems> = ({ listItems, oilLevel }) => {
  return (
    <div>
      {listItems
        ? listItems.map(
            (el: {
              displayName: string;
              temperature: string;
              vibration: string;
            }) => (
              <div className={styles.item_area}>
                <div className={styles.name}>{el.displayName}</div>
                <div className={styles.svg_group}>
                  {el.temperature && el.temperature === "ok" ? <Temp /> : null}
                  {el.temperature && el.temperature === "warning" ? (
                    <TempWarning />
                  ) : null}
                  {el.temperature && el.temperature === "alert" ? (
                    <TempAlert />
                  ) : null}

                  {el.vibration && el.vibration === "ok" ? <Vibration /> : null}
                  {el.vibration && el.vibration === "warning" ? (
                    <VibrationWarning />
                  ) : null}
                  {el.vibration && el.vibration === "alert" ? (
                    <VibrationAlert />
                  ) : null}
                </div>
              </div>
            )
          )
        : null}
      <div className={styles.item_area}>
        <div className={styles.name}>Уровень масла</div>
        <div className={styles.svg_group}>
          {oilLevel && oilLevel === "ok" ? <Oil /> : <OilAlert />}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
