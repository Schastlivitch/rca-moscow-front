export interface ISchemaReducer extends IExhausterParameters {
	isLoading: boolean;
	displayName: string;
	timestamp: string | null;
}

export interface IExhausterParameters {
	bearings: BearingItemType[];
	cooler: CoolerType;
	gasManifold: GasManifoldType;
	valve: ValveType;
	transmission: TransmissionType;
	oilSystem: OilSystemType;
	isWork: boolean;
}

export type BearingItemType = {
	name: string;
	displayName: string;
	temperature: {
		value: number;
		status: "ok" | "warning" | "alert";
	};
	vibration?: {
		axial: {
			value: number;
			status: "ok" | "warning" | "alert";
		};
		vertical: {
			value: number;
			status: "ok" | "warning" | "alert";
		};
		horizontal: {
			value: number;
			status: "ok" | "warning" | "alert";
		};
	};
};

type CoolerTemperatureType = {
	temperatureAfter: { value: number; status: "ok" | "warning" | "alert" };
	temperatureBefore: { value: number; status: "ok" | "warning" | "alert" };
};

export type CoolerType = {
	oil: CoolerTemperatureType;
	water: CoolerTemperatureType;
};

export type GasManifoldType = {
	temperature: number;
	underPressure: number;
};

type ValveType = {
	isOpen: boolean;
	position: number;
};

type ElectricalParameters = {
	amperage: { value: number; status: string };
	voltage: { value: number; status: string };
};

export type TransmissionType = {
	rotor: ElectricalParameters;
	stator: ElectricalParameters;
};

export type OilSystemType = {
	level: { value: number; status: string };
	pressure: { value: number; status: string };
};
