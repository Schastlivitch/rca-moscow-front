import { addHours } from "date-fns";
import ReactEcharts from "echarts-for-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useSelector from "../../../hooks/useSelector";
import { getTrendsAction } from "../../../store/trends";
import chartDataConverter from "../../../Utils/chartDataConverter";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	currentParam: string;
	dates: Date[];
}

function Chart({ currentParam, dates }: IProps) {
	const dispatch = useDispatch();

	const urlParams = useParams() as {
		exhausterId: string;
	};

	const chart = useSelector((state) => state.trends.chart);

	const option = chartDataConverter(currentParam, dates[0], chart);

	useEffect(() => {
		dispatch(getTrendsAction());
	}, [currentParam, dates, urlParams.exhausterId]);

	return (
		<div className={styles["chart_container"]}>
			<ReactEcharts option={option} style={{ height: "100%" }} />
		</div>
	);
}

export default Chart;
