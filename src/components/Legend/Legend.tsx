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
	const error = false;
	return (
		<div className={styles.body}>
			<Button
				className={clsx(styles.button, isInactiveShown && styles["--active"])}
				onClick={toggleActiveShown}
			>
				{isInactiveShown
					? "Скрывать неактивные "
					: "Показать неактивные эксгаустеры"}
			</Button>
			{error ? (
				<div className={styles.alert_area}>
					<div className={styles.alert_text}>Ошибка получения данных</div>
					<div className={styles.mgo_widget_call_pulse}> </div>
				</div>
			) : null}

			<LegendSvg />
		</div>
	);
};

export default Legend;
