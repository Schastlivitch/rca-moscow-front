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

type BearingItemType = {
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

type CoolerType = {
	oil: CoolerTemperatureType;
	water: CoolerTemperatureType;
};

type GasManifoldType = {
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

type TransmissionType = {
	rotor: ElectricalParameters;
	stator: ElectricalParameters;
};

type OilSystemType = {
	level: number;
	pressure: number;
};
