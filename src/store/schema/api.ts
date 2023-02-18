import { faker } from "@faker-js/faker";
import detailParameters from "./detailParameters.json";
import mockSchema from "./mock";
import { IExhausterParameters } from "./types";

export default function getSchema(exhausterId: string) {
	return new Promise<IExhausterParameters[]>((resolve) => {
		setTimeout(async () => {
			resolve(mockSchema);
		}, 1000);
	});
}
