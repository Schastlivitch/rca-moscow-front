import React, { useEffect } from "react";
import CardOneExhauster from "../CardOneExhauster";
import Panel from "../Panel";
import { useDispatch } from "react-redux";
import { getMachinesAction } from "../../store/main/index";
import useSelector from "../../hooks/useSelector";
import styles from "./ListSinteringMachines.module.css";

const ListSinteringMachines: React.FC = () => {
	const dispatch = useDispatch();

	const machines = useSelector((state) => state.main.machines);

	useEffect(() => {
		dispatch(getMachinesAction());
	}, [dispatch]);

	return (
		<div className={styles.body}>
			{machines.map((machine) => (
				<Panel title={machine.displayName} className={styles.panel}>
					<div className={styles.body_panel}>
						{machine.exhausters.map((exhauster) => (
							<CardOneExhauster item={exhauster} />
						))}
					</div>
				</Panel>
			))}
		</div>
	);
};

export default ListSinteringMachines;
