import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, composeWithDevTools())

export type AppRootStateType = ReturnType<typeof rootReducer>