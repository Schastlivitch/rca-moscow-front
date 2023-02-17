import { addHours } from "date-fns";
import ReactEcharts from "echarts-for-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import chartDataConverter from "../../../Utils/chartDataConverter";
import { mockArray } from "../mock";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	currentParam: string;
	dates: Date[];
}

function Chart({ currentParam, dates }: IProps) {
	const urlParams = useParams() as {
		exhausterId: string;
	};

	const option = chartDataConverter("Test", dates[0], mockArray);

	useEffect(() => {
		console.log(dates[0] || addHours(new Date(), -4));
		console.log(dates[1] || new Date());
	}, [currentParam, dates, urlParams.exhausterId]);

	return (
		<div className={styles["chart_container"]}>
			<ReactEcharts option={option} style={{ height: "100%" }} />
		</div>
	);
}

export default Chart;
