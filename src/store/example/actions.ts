import * as actionTypes from "./actionTypes";
import { TestType } from "./types";

export const testAction = (payload: TestType): Action<TestType> => ({
  type: actionTypes.TEST_TYPE,
  payload,
});
