import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mainReducer from "./main/reducer";
import schemaReducer from "./schema/reducer";

const middlewares = [thunk];

const rootReducer = combineReducers({
	main: mainReducer,
  schema: schemaReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
