// Components
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import MnemoSheme from "../../components/SvgComponents/MnemoSheme/MnemoSheme";
import { getSchemaAction } from "../../store/schema";
import useSelector from "../../hooks/useSelector";
import Legend from "./partials/Legend";

// Styles
import styles from "./SchemaPage.module.css";
import Counter from "./partials/Timer";

function ControlPage() {
	const id = "1";
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getSchemaAction(id));
	// }, [dispatch]);
	useEffect(() => {
		dispatch(getSchemaAction(id));

		setInterval(() => {
			dispatch(getSchemaAction(id));
		}, 1000 * 60);
	}, [dispatch]);

	const { isLoading, displayName } = useSelector((state) => state.schema);

	const data = useSelector((state) => {
		return state.schema.bearings;
	});
	const transmission = useSelector((state) => {
		return state.schema.transmission;
	});
	const cooler = useSelector((state) => {
		return state.schema.cooler;
	});
	const oil = useSelector((state) => {
		return state.schema.oilSystem;
	});

	return (
		<Layout
			title={`Эксгаустер ${displayName}`}
			headerRightElement={<Counter />}
			isLoading={isLoading}
		>
			<div className={styles["root"]}>
				{Boolean(data.length) && (
					<MnemoSheme
						data={data}
						transmission={transmission}
						cooler={cooler}
						oil={oil}
					/>
				)}
			</div>
		</Layout>
	);
}

export default ControlPage;
