import { IExhausterParameters } from "./types";
import { faker } from "@faker-js/faker";

const mockSchema: IExhausterParameters = {
	bearings: [
		{
			displayName: "ПС1",
			name: "1",
			temperature: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
			vibration: {
				axial: {
					status: "ok",
					value: 0,
				},
				horizontal: {
					status: "ok",
					value: 0,
				},
				vertical: {
					status: "ok",
					value: 0,
				},
			},
		},
		{
			displayName: "ПС2",
			name: "2",
			temperature: {
				status: "ok",
				value: 0,
			},
			vibration: {
				axial: {
					status: "ok",
					value: 0,
				},
				horizontal: {
					status: "ok",
					value: 0,
				},
				vertical: {
					status: "ok",
					value: 0,
				},
			},
		},
		{
			displayName: "ПС3",
			name: "3",
			temperature: {
				status: "ok",
				value: 0,
			},
		},
		{
			displayName: "ПС4",
			name: "4",
			temperature: {
				status: "ok",
				value: 0,
			},
		},
		{
			displayName: "ПС5",
			name: "5",
			temperature: {
				status: "ok",
				value: 0,
			},
		},
		{
			displayName: "ПС6",
			name: "6",
			temperature: {
				status: "ok",
				value: 0,
			},
		},
		{
			displayName: "ПС7",
			name: "7",
			temperature: {
				status: "ok",
				value: 0,
			},
			vibration: {
				axial: {
					status: "ok",
					value: 0,
				},
				horizontal: {
					status: "ok",
					value: 0,
				},
				vertical: {
					status: "ok",
					value: 0,
				},
			},
		},
		{
			displayName: "ПС8",
			name: "8",
			temperature: {
				status: "ok",
				value: 0,
			},
			vibration: {
				axial: {
					status: "ok",
					value: 0,
				},
				horizontal: {
					status: "ok",
					value: 0,
				},
				vertical: {
					status: "ok",
					value: 0,
				},
			},
		},
		{
			displayName: "ПС9",
			name: "6",
			temperature: {
				status: "ok",
				value: 0,
			},
		},
	],
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
		temperature: 100,
		underPressure: 200,
	},
	isWork: true,
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
		isOpen: true,
		position: 45,
	},
};

export default mockSchema;
