import mockSchema from "./mock";
import { IExhausterParameters } from "./types";

export default function getSchema(exhausterId: string) {
	return new Promise<IExhausterParameters>((resolve, reject) => {
		setTimeout(() => {
			const randomized = Math.floor(Math.random() * 1000);

			if (randomized > 500) {
				resolve(mockSchema);
			} else {
				reject();
			}
		}, 1000);
	});
}
