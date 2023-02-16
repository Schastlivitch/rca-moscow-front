import { FC, useState, ReactNode } from "react";
import styles from "./Accordion.module.css";
import arrowIcon from "../../assets/images/arrow_selector.svg";
import Button from "../Button";
import joinClassNames from "../../Utils/joinClassNames";
import ArrowSelector from "../../assets/imagesTsx/ArrowSelector";
import Document from "../../assets/imagesTsx/Document";
import Note from "../../assets/imagesTsx/Note";

interface IAccordionProp {
  iconDoc?: boolean;
  iconNote?: boolean;
  title?: string;
  className?: string;
  children?: ReactNode;
}
const Accordion: FC<IAccordionProp> = ({
  iconDoc,
  iconNote,
  title,
  className,
  children,
}) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className={joinClassNames([styles.body, className])}>
      <div className={styles.header}>
        <Button
          className={styles["header__btn"]}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          {iconDoc && (
            <div className={styles.icon}>
              <Document />
            </div>
          )}
          {iconNote && (
            <div className={styles.icon}>
              <Note />
            </div>
          )}
          <h3 className={styles["header__title"]}>{title}</h3>
          <div
            className={joinClassNames([
              styles["arrow"],
              isOpen ? styles["arrow_down"] : styles["arrow_up"],
            ])}
          >
            <div className={styles["arrow-icon"]}>
              <ArrowSelector />
            </div>
            {/* <img src={arrowIcon} alt="chevron" className={styles['arrow-icon']} /> */}
          </div>
        </Button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Accordion;
