import * as actionTypes from "./actionTypes";
import { IExhausterParameters, ISchemaReducer } from "./types";

const initialState: ISchemaReducer = {
	bearings: [],
	cooler: {
		oil: {
			temperatureAfter: {
				status: "ok",
				value: 0,
			},
			temperatureBefore: {
				status: "ok",
				value: 0,
			},
		},
		water: {
			temperatureAfter: {
				status: "ok",
				value: 0,
			},
			temperatureBefore: {
				status: "ok",
				value: 0,
			},
		},
	},
	gasManifold: {
		temperature: 0,
		underPressure: 0,
	},
	oilSystem: {
		level: {
			status: "ok",
			value: 0,
		},
		pressure: {
			status: "ok",
			value: 0,
		},
	},
	transmission: {
		rotor: {
			amperage: {
				status: "ok",
				value: 0,
			},
			voltage: {
				status: "ok",
				value: 0,
			},
		},
		stator: {
			amperage: {
				status: "ok",
				value: 0,
			},
			voltage: {
				status: "ok",
				value: 0,
			},
		},
	},
	valve: {
		isOpen: false,
		position: 0,
	},
	displayName: "",
	timestamp: null,
	isWork: false,
	isLoading: false,
};

const reducer = (
	state: ISchemaReducer = initialState,
	action: Action
): ISchemaReducer => {
	switch (action.type) {
		case actionTypes.GET_SCHEMA_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case actionTypes.GET_SCHEMA_SUCCESS:
			const payload = action.payload as IExhausterParameters;

			return {
				...state,
				...payload,
				timestamp: new Date().toISOString(),
				isLoading: false,
			};

		case actionTypes.GET_SCHEMA_FAILURE:
			return {
				...state,
				isLoading: false,
			};

		case actionTypes.SET_EXHAUSTER_NAME:
			const displayName = action.payload as string;

			return {
				...state,
				displayName,
			};

		default:
			return state;
	}
};

export default reducer;
