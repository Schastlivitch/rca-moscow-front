import * as actionTypes from "./actionTypes";
import { ITrendsReducer, TrendChartType } from "./types";

const initialState: ITrendsReducer = {
	chart: [],
	timestamp: null,
	isLoading: false,
	mockIndex: 0,
};

const reducer = (
	state: ITrendsReducer = initialState,
	action: Action
): ITrendsReducer => {
	switch (action.type) {
		case actionTypes.GET_TRENDS_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case actionTypes.GET_TRENDS_SUCCESS:
			const chart = action.payload as TrendChartType[];

			return {
				chart: chart[state.mockIndex],
				mockIndex: state.mockIndex < 5 ? state.mockIndex + 1 : state.mockIndex,
				timestamp: new Date().toISOString(),
				isLoading: false,
			};

		case actionTypes.GET_TRENDS_FAILURE:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default reducer;
