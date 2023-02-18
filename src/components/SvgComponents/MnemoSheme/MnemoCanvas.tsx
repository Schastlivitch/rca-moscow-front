import React from "react";

import useSelector from "../../../hooks/useSelector";
import CardMultiItem from "./CardMultiItem";
import CardOneItem from "./CardOneItem";

// import styles from "./Exhauster.module.css";

const MnemoCanvas: React.FC = () => {
  // получение данных из стора
  const flag = useSelector((state) => {
    if (state.flags !== undefined) {
      return state.flags.exhausterPreview;
    }
  });
  return (
    <div>
      <div>
        <svg
          width="1889"
          height="791"
          fill="none"
          overflow="visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <CardMultiItem />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default MnemoCanvas;
