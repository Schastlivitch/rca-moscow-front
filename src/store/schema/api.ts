import mockSchema from "./mock";
import { IExhausterParameters } from "./types";
import detailParameters from './detailParameters.json'

export default function getSchema(exhausterId: string) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomized = Math.floor(Math.random() * 1000);

			if (randomized > 500) {
				resolve(detailParameters);
			} else {
				reject();
			}
		}, 1000);
	});
}
