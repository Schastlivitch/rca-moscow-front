import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes";
import getTrends from "./api";

export const getTrendsAction = () => {
	return (dispatch: Dispatch): Promise<Action> => {
		dispatch({ type: actionTypes.GET_TRENDS_REQUEST });

		return getTrends()
			.then((payload) => {
				return dispatch({ type: actionTypes.GET_TRENDS_SUCCESS, payload });
			})
			.catch(() => {
				return dispatch({ type: actionTypes.GET_TRENDS_FAILURE });
			});
	};
};
