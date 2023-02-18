import React from "react";
import ExshausterPreview from "./ExshausterPreview";
import Rectangle from "./Rectangle";
import useSelector from "../../../hooks/useSelector";
import { RECTANGLE_LIST } from "./utils";
import styles from "./Exhauster.module.css";

const ExhausterCanvas: React.FC = () => {
  // получение данных из стора
  const flag = useSelector((state) => {
    if (state.flags !== undefined) {
      return state.flags.exhausterPreview;
    }
  });
  return (
    <div>
      <div className={styles.body}>
        <svg
          width="261"
          height="139"
          fill="blue"
          overflow="visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <ExshausterPreview />
            {RECTANGLE_LIST
              ? RECTANGLE_LIST.map((el) => (
                  <Rectangle
                    activ={flag || ""}
                    x={el.x}
                    y={el.y}
                    width={el.width}
                    height={el.height}
                    key={el.id}
                    id={el.id}
                  />
                ))
              : null}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ExhausterCanvas;
