import { mockArray } from "./mock";
import { TrendChartType } from "./types";

export default function getTrends() {
	return new Promise<TrendChartType[]>((resolve) => {
		setTimeout(() => {
			resolve(mockArray);
		}, 1000);
	});
}
