import { applyMiddleware, legacy_createStore as createStore} from "redux";
import { Reducer } from "./ReducerFunction";
import {thunk} from "redux-thunk"

export const Store = createStore(Reducer,applyMiddleware(thunk) )