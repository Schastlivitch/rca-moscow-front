import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes";
import getSchema from "./api";

export const getMachinesAction = () => {
	return (dispatch: Dispatch): Promise<Action> => {
		dispatch({ type: actionTypes.GET_MACHINES_LIST_REQUEST });

		return getSchema()
			.then((payload) => {
				return dispatch({ type: actionTypes.GET_MACHINES_LIST_SUCCESS, payload });
			})
			.catch(() => {
				return dispatch({ type: actionTypes.GET_MACHINES_LIST_FAILURE });
			});
	};
};
