import * as actionTypes from "./actionTypes";
import { IExhausterParameters, ISchemaReducer } from "./types";

const initialState: ISchemaReducer = {
	bearings: [],
	cooler: {
		oil: {
			temperatureAfter: 0,
			temperatureBefore: 0,
		},
		water: {
			temperatureAfter: 0,
			temperatureBefore: 0,
		},
	},
	gasManifold: {
		temperature: 0,
		underPressure: 0,
	},
	oilSystem: {
		level: 0,
		pressure: 0,
	},
	transmission: {
		rotor: {
			amperage: 0,
			voltage: 0,
		},
		stator: {
			amperage: 0,
			voltage: 0,
		},
	},
	valve: {
		isOpen: false,
		position: 0,
	},
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
				...payload,
				timestamp: new Date().toISOString(),
				isLoading: false,
			};

		case actionTypes.GET_SCHEMA_FAILURE:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default reducer;
