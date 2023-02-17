import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Temp } from "../../../assets/temp.svg";
import { ReactComponent as TempWarning } from "../../../assets/tempAttention.svg";
import { ReactComponent as TempAlert } from "../../../assets/tempDanger.svg";
import { ReactComponent as Vibration } from "../../../assets/vibration.svg";
import { ReactComponent as VibrationWarning } from "../../../assets/vibrationAttention.svg";
import { ReactComponent as VibrationAlert } from "../../../assets/vibrationDanger.svg";
import { ReactComponent as Oil } from "../../../assets/oil.svg";
import { ReactComponent as OilAlert } from "../../../assets/oilDanger.svg";
import styles from "./ItemsList.module.css";
import { clearMouseOverItem, setMouseOverItem } from "../../../store/flags";

interface IListItems {
  listItems?: Bearings[];
  oilLevel?: string;
}
interface Bearings {
  [key: string]: string;
}

const ItemsList: React.FC<IListItems> = ({ listItems, oilLevel }) => {
  const dispatch = useDispatch();
  // const handlerOverMouse = () => {
  //   const handleClickTypePass = (e: React.MouseEvent<HTMLElement>) => {
  //     const element = e.target as HTMLInputElement;
  //     const updateValue = { ...inputRadioValue, typePass: element.value };
  //     setRadioInputValue(updateValue);
  //   };
  // };
  return (
    <div>
      {listItems
        ? listItems.map((el) => (
            <div
              key={el.name}
              className={styles.item_area}
              onMouseOver={() => {
                dispatch(setMouseOverItem(el.displayName));
              }}
              onMouseLeave={() => {
                dispatch(clearMouseOverItem());
              }}
            >
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
          ))
        : null}
      {oilLevel ? (
        <div className={styles.item_area}>
          <div className={styles.name}>Уровень масла</div>
          <div className={styles.svg_group}>
            {oilLevel === "ok" ? <Oil /> : null}
            {oilLevel === "alert" ? <OilAlert /> : null}
            {oilLevel === "warning" ? <OilAlert /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ItemsList;
