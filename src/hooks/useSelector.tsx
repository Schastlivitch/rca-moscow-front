import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
} from "react-redux";
import { RootState } from "../store";

const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;

export default useSelector;
