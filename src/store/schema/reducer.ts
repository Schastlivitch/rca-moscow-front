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
	mockIndex: 0,
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
			const payload = action.payload as IExhausterParameters[];

			return {
				...state,
				...payload[state.mockIndex],
				timestamp: new Date().toISOString(),
				mockIndex: state.mockIndex < 5 ? state.mockIndex + 1 : state.mockIndex,
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
