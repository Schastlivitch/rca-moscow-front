export interface ITrendsReducer {
	chart: TrendChartType;
	timestamp: string | null;
	isLoading: boolean;
}

export type TrendChartType = number[];
