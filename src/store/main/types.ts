export interface IMainReducer {
	machines: SinteringMachineType[];
	isLoading: boolean;
	timestamp: string | null;
}

export type SinteringMachineType = {
	name: string;
	displayName: string;
	exhausters: ExhausterChecklistType[];
};

export type ExhausterChecklistType = {
	name: string;
	displayName: string;
	isWork: boolean;
	rotorName: string;
	rotorChangeDate: string;
	rotorChangePrediction: number;
	bearings: BearingCheckLampsType[];
	oilLevel: CheckLampValueType;
};

type BearingCheckLampsType = {
	name: string;
	displayName: string;
	temperature: CheckLampValueType;
	vibration: CheckLampValueType;
};

type CheckLampValueType = "ok" | "warning" | "alert";
