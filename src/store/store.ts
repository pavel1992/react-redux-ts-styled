import {createStore, combineReducers} from "redux";
import {commonReducer} from "./common/reducer";

const reducers = combineReducers({
    common: commonReducer
});

export const store = createStore(reducers);