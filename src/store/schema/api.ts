import { faker } from "@faker-js/faker";
import detailParameters from "./detailParameters.json";
import mockSchema from "./mock";

export default function getSchema(exhausterId: string) {
	return new Promise((resolve) => {
		setTimeout(async () => {
			resolve(detailParameters);
		}, 1000);
	});
}
