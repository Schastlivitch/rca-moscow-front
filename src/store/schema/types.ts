export interface ISchemaReducer extends IExhausterParameters {
	isLoading: boolean;
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
	temperature: number;
	vibration?: {
		axial: number;
		vertical: number;
		horizontal: number;
	};
};

type CoolerTemperatureType = {
	temperatureAfter: number;
	temperatureBefore: number;
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
	amperage: number;
	voltage: number;
};

export type TransmissionType = {
	rotor: ElectricalParameters;
	stator: ElectricalParameters;
};

export type OilSystemType = {
	level: number;
	pressure: number;
};
