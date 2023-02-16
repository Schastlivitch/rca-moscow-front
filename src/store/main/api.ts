import mockMachinesList from "./mock";
import { SinteringMachineType } from "./types";

export default function getMachinesList() {
	return new Promise<SinteringMachineType[]>((resolve, reject) => {
		setTimeout(() => {
			const randomized = Math.floor(Math.random() * 1000);

			if (randomized > 500) {
				resolve(mockMachinesList);
			} else {
				reject();
			}
		}, 1000);
	});
}
