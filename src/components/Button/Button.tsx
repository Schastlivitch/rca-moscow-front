import { FC, ComponentPropsWithoutRef } from "react";

// Utils
import joinClassNames from "../../Utils/joinClassNames";

// Styles
import styles from "./Button.module.css";

interface IProps extends ComponentPropsWithoutRef<"button"> {}

const Button: FC<IProps> = (props) => {
  const { children, className, type, ...rest } = props;
  return (
    <button
      {...rest}
      type={type || "button"}
      className={joinClassNames([styles["root"], className])}
    >
      {children}
    </button>
  );
};

export default Button;
