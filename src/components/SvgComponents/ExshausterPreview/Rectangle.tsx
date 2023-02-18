import React from "react";
interface IProps {
  activ: string;
  x: number;
  y: number;
  id: string;
  width: string;
  height: string;
}
const Rectangle: React.FC<IProps> = ({ activ, x, y, id, width, height }) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="1"
        fill={activ === id ? "#fda610" : "none"}
      />
    </g>
  );
};

export default Rectangle;
