import ReactEcharts from "echarts-for-react";

// Styles
import styles from "../TrendsPage.module.css";

function Chart() {
	const option = {
		tooltip: {
			trigger: "axis",
		},
		legend: {
			data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true,
		},
		dataZoom: [
			{
				type: "slider",
				xAxisIndex: 0,
				zoomLock: true,
				handleSize: 20,
			},
		],
		xAxis: {
			type: "category",
			boundaryGap: false,
			data: [
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
				"08:00",
			],
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				name: "Email",
				type: "line",
				stack: "Total",
				data: [120, 132, 101, 134, 90, 230, 210],
			},
			{
				name: "Union Ads",
				type: "line",
				stack: "Total",
				data: [220, 182, 191, 234, 290, 330, 310],
			},
			{
				name: "Video Ads",
				type: "line",
				stack: "Total",
				data: [150, 232, 201, 154, 190, 330, 410],
			},
			{
				name: "Direct",
				type: "line",
				stack: "Total",
				data: [320, 332, 301, 334, 390, 330, 320],
			},
			{
				name: "Search Engine",
				type: "line",
				stack: "Total",
				data: [820, 932, 901, 934, 1290, 1330, 1320],
			},
		],
	};

	return (
		<div className={styles["chart_container"]}>
			<ReactEcharts option={option} style={{ height: "100%" }} />
		</div>
	);
}

export default Chart;
