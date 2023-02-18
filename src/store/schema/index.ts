import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes";
import getSchema from "./api";

export const getSchemaAction = (exhausterId: string) => {
	return (dispatch: Dispatch): Promise<Action> => {
		dispatch({ type: actionTypes.GET_SCHEMA_REQUEST });

		return getSchema(exhausterId)
			.then((payload) => {
				return dispatch({ type: actionTypes.GET_SCHEMA_SUCCESS, payload });
			})
			.catch(() => {
				return dispatch({ type: actionTypes.GET_SCHEMA_FAILURE });
			});
	};
};

export const setExhausterNameAction = (payload: string) => ({
	type: actionTypes.SET_EXHAUSTER_NAME,
	payload,
});
