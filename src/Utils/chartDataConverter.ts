import { addHours, addMinutes, format } from "date-fns";

function getDataLine(startDate: string, dataLine: number[]) {
	const dateArray: any[] = [];
	let currentDate = new Date(startDate);
	dataLine.forEach((item) => {
		dateArray.push([currentDate.toISOString(), item]);
		currentDate = new Date(addMinutes(currentDate, 1));
	});

	return dateArray;
}

const chartDataConverter = (
	title: string,
	startDate: Date,
	values: number[]
) => {
	const dataLine = getDataLine(
		startDate
			? startDate.toISOString()
			: addHours(new Date(), -4).toISOString(),
		values
	);

	return {
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
			type: "time",
			boundaryGap: false,
			axisLabel: {
				formatter: function (value: Date) {
					return format(value, "HH:mm");
				},
			},
			maxInterval: 3600 * 1000,
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				name: title,
				type: "line",
				stack: "Total",
				data: dataLine,
				symbol: "none",
			},
		],
	};
};

export default chartDataConverter;
