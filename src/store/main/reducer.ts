import * as actionTypes from "./actionTypes";
import { IMainReducer, SinteringMachineType } from "./types";

const initialState: IMainReducer = {
	machines: [],
	timestamp: null,
	isLoading: false,
};

const reducer = (
	state: IMainReducer = initialState,
	action: Action
): IMainReducer => {
	switch (action.type) {
		case actionTypes.GET_MACHINES_LIST_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case actionTypes.GET_MACHINES_LIST_SUCCESS:
			const machines = action.payload as SinteringMachineType[];

			return {
				machines,
				timestamp: new Date().toISOString(),
				isLoading: false,
			};

		case actionTypes.GET_MACHINES_LIST_FAILURE:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default reducer;
