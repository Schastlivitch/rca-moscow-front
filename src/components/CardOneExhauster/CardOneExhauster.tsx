import React from "react";
import Accordion from "../Accordion/Accordion";
import Button from "../Button";
import Panel from "../Panel";
import { ReactComponent as CircleAlert } from "../../assets/isWorkAlertCircle.svg";
import { ReactComponent as CircleOk } from "../../assets/isWorkOkCircle.svg";
import { ReactComponent as ButtonArrow } from "../../assets/buttonArrow.svg";
import ExshausterPreview from "../SvgComponents/ExshausterPreview/ExshausterPreview";
import styles from "./CardOneExhauster.module.css";
import ItemsList from "../Accordion/partials/ItemsList";
import { useNavigate } from "react-router-dom";
import { ExhausterChecklistType } from "../../store/main/types";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import clsx from "clsx";

interface IProps {
	item: ExhausterChecklistType;
}

const CardOneExhauster: React.FC<IProps> = ({ item }) => {
	const navigate = useNavigate();

	const okData = item.bearings.filter(
		(bearing) => bearing.temperature === "ok" && bearing.vibration === "ok"
	);

	const alertData = item.bearings.filter(
		(bearing) => bearing.temperature !== "ok" || bearing.vibration !== "ok"
	);

	const rotorDate = format(new Date(item.rotorChangeDate), "dd MMM yyyy", {
		locale: ru,
	});

	return (
		<>
			<Panel
				className={clsx(styles.panel, !item.isWork && styles["--inactive"])}
				title={item.displayName}
				TitleBarRightComponent={
					<Button
						className={styles.button_header}
						onClick={() => navigate(`/schema/${item.name}`)}
					>
						<ButtonArrow />
					</Button>
				}
				TitleBarLeftComponent={item.isWork ? <CircleOk /> : <CircleAlert />}
			>
				<div>
					<div className={styles.group_rotor}>
						<p className={styles.title_rotor}>Ротор № {item.rotorName}</p>
						<div className={styles.rotor_data}>{rotorDate}</div>
					</div>
					<div className={styles.separator}></div>
					<p className={styles.repair}>Последняя замена ротора</p>
					<div className={styles.update_group}>
						<div className={styles.rotor_update_day}>3 сут</div>
						<div className={styles.update_group_forecast}>
							<div className={styles.update_forecast_title}>Прогноз</div>
							<div className={styles.update_forecast_day}>
								{item.rotorChangePrediction} сут
							</div>
						</div>
					</div>
					<ExshausterPreview className={styles["preview"]} />
					<Accordion title="Предупреждение" isPreOpened>
						<ItemsList
							listItems={alertData}
							oilLevel={
								item.oilLevel === "warning" || item.oilLevel === "alert"
									? "alert"
									: undefined
							}
						/>
					</Accordion>
					<Accordion title="Все подшипники">
						<ItemsList
							listItems={okData}
							oilLevel={item.oilLevel === "ok" ? "ok" : undefined}
						/>
					</Accordion>
				</div>
			</Panel>
		</>
	);
};

export default CardOneExhauster;
