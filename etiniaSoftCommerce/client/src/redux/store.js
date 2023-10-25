import rootReducer from "./reducer";
import thunk from "redux-thunk";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevtools} from "redux-devtools-extension";

export const store =createStore(
    rootReducer,
    composeWithDevtools(applyMiddleware(thunk))
);