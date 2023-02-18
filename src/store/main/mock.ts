import { SinteringMachineType } from "./types";

const mockMachinesList: SinteringMachineType[] = [
	{
		displayName: "Агломашина №1",
		name: "sinteringMachine1",
		exhausters: [
			{
				name: "u171",
				displayName: "Эксгаустер У-171",
				isWork: true,
				rotorName: "35к",
				rotorChangeDate: "2011-10-05T14:48:00.000Z",
				rotorChangePrediction: 10,
				oilLevel: "ok",
				bearings: [
					{
						name: "1",
						displayName: "№1 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "2",
						displayName: "№2 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "3",
						displayName: "№3 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "4",
						displayName: "№4 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "5",
						displayName: "№5 п-к",
						temperature: "alert",
						vibration: "warning",
					},
					{
						name: "6",
						displayName: "№6 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "7",
						displayName: "№7 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "8",
						displayName: "№8 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "9",
						displayName: "№9 п-к",
						temperature: "ok",
						vibration: "ok",
					},
				],
			},
			{
				name: "u172",
				displayName: "Эксгаустер У-172",
				isWork: false,
				rotorName: "36к",
				rotorChangeDate: "2011-10-05T14:48:00.000Z",
				rotorChangePrediction: 10,
				oilLevel: "ok",
				bearings: [
					{
						name: "1",
						displayName: "№1 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "2",
						displayName: "№2 п-к",
						temperature: "ok",
						vibration: "warning",
					},
					{
						name: "3",
						displayName: "№3 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "4",
						displayName: "№4 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "5",
						displayName: "№5 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "6",
						displayName: "№6 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "7",
						displayName: "№7 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "8",
						displayName: "№8 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "9",
						displayName: "№9 п-к",
						temperature: "ok",
						vibration: "ok",
					},
				],
			},
		],
	},
	{
		displayName: "Агломашина №2",
		name: "sinteringMachine2",
		exhausters: [
			{
				name: "u173",
				displayName: "Эксгаустер У-173",
				isWork: true,
				rotorName: "37к",
				rotorChangeDate: "2011-10-05T14:48:00.000Z",
				rotorChangePrediction: 10,
				oilLevel: "warning",
				bearings: [
					{
						name: "1",
						displayName: "№1 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "2",
						displayName: "№2 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "3",
						displayName: "№3 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "4",
						displayName: "№4 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "5",
						displayName: "№5 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "6",
						displayName: "№6 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "7",
						displayName: "№7 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "8",
						displayName: "№8 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "9",
						displayName: "№9 п-к",
						temperature: "ok",
						vibration: "ok",
					},
				],
			},
			{
				name: "u174",
				displayName: "Эксгаустер У-174",
				isWork: false,
				rotorName: "39к",
				rotorChangeDate: "2011-10-05T14:48:00.000Z",
				rotorChangePrediction: 10,
				oilLevel: "alert",
				bearings: [
					{
						name: "1",
						displayName: "№1 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "2",
						displayName: "№2 п-к",
						temperature: "ok",
						vibration: "warning",
					},
					{
						name: "3",
						displayName: "№3 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "4",
						displayName: "№4 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "5",
						displayName: "№5 п-к",
						temperature: "alert",
						vibration: "ok",
					},
					{
						name: "6",
						displayName: "№6 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "7",
						displayName: "№7 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "8",
						displayName: "№8 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "9",
						displayName: "№9 п-к",
						temperature: "ok",
						vibration: "ok",
					},
				],
			},
		],
	},
	{
		displayName: "Агломашина №3",
		name: "sinteringMachine3",
		exhausters: [
			{
				name: "u175",
				displayName: "Эксгаустер У-175",
				isWork: true,
				rotorName: "35к",
				rotorChangeDate: "2011-10-05T14:48:00.000Z",
				rotorChangePrediction: 10,
				oilLevel: "ok",
				bearings: [
					{
						name: "1",
						displayName: "№1 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "2",
						displayName: "№2 п-к",
						temperature: "ok",
						vibration: "warning",
					},
					{
						name: "3",
						displayName: "№3 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "4",
						displayName: "№4 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "5",
						displayName: "№5 п-к",
						temperature: "alert",
						vibration: "warning",
					},
					{
						name: "6",
						displayName: "№6 п-к",
						temperature: "warning",
						vibration: "warning",
					},
					{
						name: "7",
						displayName: "№7 п-к",
						temperature: "ok",
						vibration: "warning",
					},
					{
						name: "8",
						displayName: "№8 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "9",
						displayName: "№9 п-к",
						temperature: "ok",
						vibration: "ok",
					},
				],
			},
			{
				name: "u176",
				displayName: "Эксгаустер У-176",
				isWork: false,
				rotorName: "36к",
				rotorChangeDate: "2011-10-05T14:48:00.000Z",
				rotorChangePrediction: 10,
				oilLevel: "alert",
				bearings: [
					{
						name: "1",
						displayName: "№1 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "2",
						displayName: "№2 п-к",
						temperature: "ok",
						vibration: "warning",
					},
					{
						name: "3",
						displayName: "№3 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "4",
						displayName: "№4 п-к",
						temperature: "ok",
						vibration: "ok",
					},
					{
						name: "5",
						displayName: "№5 п-к",
						temperature: "alert",
						vibration: "warning",
					},
					{
						name: "6",
						displayName: "№6 п-к",
						temperature: "warning",
						vibration: "warning",
					},
					{
						name: "7",
						displayName: "№7 п-к",
						temperature: "ok",
						vibration: "warning",
					},
					{
						name: "8",
						displayName: "№8 п-к",
						temperature: "ok",
						vibration: "alert",
					},
					{
						name: "9",
						displayName: "№9 п-к",
						temperature: "ok",
						vibration: "ok",
					},
				],
			},
		],
	},
];

export default mockMachinesList;
