import { IExampleReducer } from "./types";
import * as actionTypes from "./actionTypes";

const initialState: IExampleReducer = {
  exampleA: 0,
  exampleB: "",
};

const reducer = (
  state: IExampleReducer = initialState,
  action: Action
): IExampleReducer => {
  switch (action.type) {
    case actionTypes.TEST_TYPE:
      return {
        ...state,
        exampleA: 1,
      };

    default:
      return state;
  }
};

export default reducer;
