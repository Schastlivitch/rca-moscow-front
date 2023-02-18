import mockMachinesList from "./mock";
import { SinteringMachineType } from "./types";

export default function getMachinesList() {
	return new Promise<SinteringMachineType[]>((resolve) => {
		setTimeout(() => {
			resolve(mockMachinesList);
		}, 1000);
	});
}
