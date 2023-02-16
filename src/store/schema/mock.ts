import { IExhausterParameters } from "./types";

const mockSchema: IExhausterParameters = {
	bearings: [
		{
			displayName: "ПС1",
			name: "1",
			temperature: 77,
			vibration: {
				axial: 55,
				horizontal: 44,
				vertical: 123,
			},
		},
		{
			displayName: "ПС2",
			name: "2",
			temperature: 123,
			vibration: {
				axial: 126,
				horizontal: 11,
				vertical: 87,
			},
		},
		{
			displayName: "ПС3",
			name: "3",
			temperature: 15,
		},
		{
			displayName: "ПС4",
			name: "4",
			temperature: 73,
		},
		{
			displayName: "ПС5",
			name: "5",
			temperature: 42,
		},
		{
			displayName: "ПС6",
			name: "6",
			temperature: 9,
		},
		{
			displayName: "ПС7",
			name: "7",
			temperature: 78,
			vibration: {
				axial: 53,
				horizontal: 87,
				vertical: 1,
			},
		},
		{
			displayName: "ПС8",
			name: "8",
			temperature: 45,
			vibration: {
				axial: 45,
				horizontal: 43,
				vertical: 23,
			},
		},

		{
			displayName: "ПС9",
			name: "6",
			temperature: 45,
		},
	],
	cooler: {
		oil: {
			temperatureAfter: 10,
			temperatureBefore: 20,
		},
		water: {
			temperatureAfter: 10,
			temperatureBefore: 20,
		},
	},
	gasManifold: {
		temperature: 100,
		underPressure: 200,
	},
	isWork: true,
	oilSystem: {
		level: 50,
		pressure: 300,
	},
	transmission: {
		rotor: {
			amperage: 0.1,
			voltage: 25,
		},
		stator: {
			amperage: 2.5,
			voltage: 65,
		},
	},
	valve: {
		isOpen: true,
		position: 45,
	},
};

export default mockSchema;
