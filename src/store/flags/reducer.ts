import * as actionTypes from "./actionTypes";
import { IFlagsReducer } from "./types";

const initialState: IFlagsReducer = {
	exhausterPreview: '',
};

const reducer = (
	state: IFlagsReducer = initialState,
	action: Action
): IFlagsReducer => {
	switch (action.type) {
		case actionTypes.SET_MOUSE_OVER_ITEM:
			return {
				...state,
        exhausterPreview: action.payload,
			};
      case actionTypes.CLEARE_MOUSE_OVER_ITEM:
        return {
          ...state,
          exhausterPreview: '',
        };
		default:
			return state;
	}
};

export default reducer;
