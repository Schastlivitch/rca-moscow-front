export interface ITrendsReducer {
	chart: TrendChartType;
	timestamp: string | null;
	isLoading: boolean;
	mockIndex: number;
}

export type TrendChartType = number[];
