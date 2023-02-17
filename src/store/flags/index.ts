
import * as actionTypes from "./actionTypes";


export const setMouseOverItem = (value: string) => ({
  type: actionTypes.SET_MOUSE_OVER_ITEM,
  payload: value,
});

export const clearMouseOverItem = () => ({
  type: actionTypes.CLEARE_MOUSE_OVER_ITEM,
});


