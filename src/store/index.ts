import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mainReducer from "./main/reducer";
import schemaReducer from "./schema/reducer";
import trendsReducer from "./trends/reducer";
import flagsReducer from "./flags/reducer";

const middlewares = [thunk];

const rootReducer = combineReducers({
	main: mainReducer,
	schema: schemaReducer,
	trends: trendsReducer,
	flags: flagsReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
