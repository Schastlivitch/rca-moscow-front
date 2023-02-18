import { IExhausterParameters } from "./types";
import { faker } from "@faker-js/faker";

const mockSchema: IExhausterParameters[] = [
	{
		bearings: [
			{
				displayName: "ПС1",
				name: "1",
				temperature: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "warning",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "alert",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС2",
				name: "2",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС3",
				name: "3",
				temperature: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС4",
				name: "4",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС5",
				name: "5",
				temperature: {
					status: "alert",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС6",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС7",
				name: "7",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС8",
				name: "8",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС9",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		],
		cooler: {
			oil: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			water: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		gasManifold: {
			temperature: faker.datatype.number({ max: 100, min: 20 }),
			underPressure: faker.datatype.number({ max: 100, min: 20 }),
		},
		isWork: true,
		oilSystem: {
			level: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
			pressure: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
		},
		transmission: {
			rotor: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			stator: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		valve: {
			isOpen: true,
			position: 45,
		},
	},
	{
		bearings: [
			{
				displayName: "ПС1",
				name: "1",
				temperature: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "alert",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС2",
				name: "2",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС3",
				name: "3",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС4",
				name: "4",
				temperature: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС5",
				name: "5",
				temperature: {
					status: "alert",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС6",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС7",
				name: "7",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС8",
				name: "8",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС9",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		],
		cooler: {
			oil: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			water: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		gasManifold: {
			temperature: faker.datatype.number({ max: 100, min: 20 }),
			underPressure: faker.datatype.number({ max: 100, min: 20 }),
		},
		isWork: true,
		oilSystem: {
			level: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
			pressure: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
		},
		transmission: {
			rotor: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			stator: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		valve: {
			isOpen: true,
			position: 45,
		},
	},
	{
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
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "alert",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС2",
				name: "2",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС3",
				name: "3",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС4",
				name: "4",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС5",
				name: "5",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС6",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС7",
				name: "7",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС8",
				name: "8",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС9",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		],
		cooler: {
			oil: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			water: {
				temperatureAfter: {
					status: "alert",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		gasManifold: {
			temperature: faker.datatype.number({ max: 100, min: 20 }),
			underPressure: faker.datatype.number({ max: 100, min: 20 }),
		},
		isWork: true,
		oilSystem: {
			level: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
			pressure: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
		},
		transmission: {
			rotor: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			stator: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		valve: {
			isOpen: true,
			position: 45,
		},
	},
	{
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
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС2",
				name: "2",
				temperature: {
					status: "alert",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "warning",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС3",
				name: "3",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС4",
				name: "4",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС5",
				name: "5",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС6",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС7",
				name: "7",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС8",
				name: "8",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС9",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		],
		cooler: {
			oil: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			water: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		gasManifold: {
			temperature: faker.datatype.number({ max: 100, min: 20 }),
			underPressure: faker.datatype.number({ max: 100, min: 20 }),
		},
		isWork: true,
		oilSystem: {
			level: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
			pressure: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
		},
		transmission: {
			rotor: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			stator: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		valve: {
			isOpen: true,
			position: 45,
		},
	},
	{
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
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС2",
				name: "2",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС3",
				name: "3",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС4",
				name: "4",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС5",
				name: "5",
				temperature: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС6",
				name: "6",
				temperature: {
					status: "alert",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС7",
				name: "7",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС8",
				name: "8",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС9",
				name: "6",
				temperature: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		],
		cooler: {
			oil: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			water: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		gasManifold: {
			temperature: faker.datatype.number({ max: 100, min: 20 }),
			underPressure: faker.datatype.number({ max: 100, min: 20 }),
		},
		isWork: true,
		oilSystem: {
			level: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
			pressure: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
		},
		transmission: {
			rotor: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			stator: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		valve: {
			isOpen: true,
			position: 45,
		},
	},
	{
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
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС2",
				name: "2",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС3",
				name: "3",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС4",
				name: "4",
				temperature: {
					status: "warning",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС5",
				name: "5",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС6",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			{
				displayName: "ПС7",
				name: "7",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС8",
				name: "8",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				vibration: {
					axial: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					horizontal: {
						status: "ok",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
					vertical: {
						status: "warning",
						value: faker.datatype.number({ max: 100, min: 20 }),
					},
				},
			},
			{
				displayName: "ПС9",
				name: "6",
				temperature: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		],
		cooler: {
			oil: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			water: {
				temperatureAfter: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				temperatureBefore: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		gasManifold: {
			temperature: faker.datatype.number({ max: 100, min: 20 }),
			underPressure: faker.datatype.number({ max: 100, min: 20 }),
		},
		isWork: true,
		oilSystem: {
			level: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
			pressure: {
				status: "ok",
				value: faker.datatype.number({ max: 100, min: 20 }),
			},
		},
		transmission: {
			rotor: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
			stator: {
				amperage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
				voltage: {
					status: "ok",
					value: faker.datatype.number({ max: 100, min: 20 }),
				},
			},
		},
		valve: {
			isOpen: true,
			position: 45,
		},
	},
];

export default mockSchema;
