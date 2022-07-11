import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reposReducer from "./reposReducer";

const rootReducer = combineReducers({
	repos: reposReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))