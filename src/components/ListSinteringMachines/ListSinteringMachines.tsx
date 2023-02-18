import React, { memo, useEffect } from "react";
import CardOneExhauster from "../CardOneExhauster";
import Panel from "../Panel";
import { useDispatch } from "react-redux";
import { getMachinesAction } from "../../store/main/index";
import useSelector from "../../hooks/useSelector";
import styles from "./ListSinteringMachines.module.css";

interface IProps {
	isInactiveShown: boolean;
}

const ListSinteringMachines: React.FC<IProps> = ({ isInactiveShown }) => {
	const dispatch = useDispatch();

	const machines = useSelector((state) => state.main.machines);

	useEffect(() => {
		dispatch(getMachinesAction());

		setInterval(() => {
			dispatch(getMachinesAction());
		}, 1000 * 60);
	}, [dispatch]);

	return (
		<div className={styles.body}>
			{machines.map((machine) => (
				<Panel title={machine.displayName} className={styles.panel}>
					<div className={styles.body_panel}>
						{machine.exhausters.map((exhauster) => (
							<CardOneExhauster
								item={exhauster}
								isInactiveShown={isInactiveShown}
							/>
						))}
					</div>
				</Panel>
			))}
		</div>
	);
};

export default memo(ListSinteringMachines);
