import React, { useEffect } from "react";
import CardOneExhauster from "../CardOneExhauster";
import Panel from "../Panel";
import { useDispatch } from "react-redux";
import { getMachinesAction } from "../../store/main/index";
import useSelector from "../../hooks/useSelector";
import styles from "./ListSinteringMachines.module.css";

const ListSinteringMachines: React.FC = () => {
  // инициализация запроса данных сервера
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMachinesAction());
  }, [dispatch]);

  // получение данных из стора
  const data = useSelector((state) => {
    if (state.main.machines !== undefined) {
      return state.main.machines;
    }
  });
  //
  return (
    <div className={styles.body}>
      {data
        ? data.map((el) => (
            <Panel title={el.displayName} className={styles.panel}>
              <div className={styles.body_panel}>
                <CardOneExhauster data={el.exhausters[0]} />
                <CardOneExhauster data={el.exhausters[1]} />
              </div>
            </Panel>
          ))
        : null}

      {/* <Panel title="Агломашина №2" className={styles.panel}>
        <div className={styles.body_panel}>
          <CardOneExhauster />
          <CardOneExhauster />
        </div>
      </Panel>
      <Panel title="Агломашина №3" className={styles.panel}>
        <div className={styles.body_panel}>
          <CardOneExhauster />
          <CardOneExhauster />
        </div>
      </Panel> */}
    </div>
  );
};

export default ListSinteringMachines;
