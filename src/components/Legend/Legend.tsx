import clsx from "clsx";
import React from "react";
import { ReactComponent as LegendSvg } from "../../assets/legend.svg";
import Button from "../Button";
import styles from "./Legend.module.css";

interface IProps {
	isInactiveShown: boolean;
	toggleActiveShown: () => void;
}

const Legend: React.FC<IProps> = ({ isInactiveShown, toggleActiveShown }) => {
	return (
		<div className={styles.body}>
			<Button
				className={clsx(styles.button, isInactiveShown && styles["--active"])}
				onClick={toggleActiveShown}
			>
				{isInactiveShown
					? "Скрывать неактивные эксгаустеры"
					: "Показать неактивные эксгаустеры"}
			</Button>
			<LegendSvg />
		</div>
	);
};

export default Legend;
