import { createStore, combineReducers } from "redux";
import calculatorReducer from "./calculatorReducer";

let reducers = combineReducers({
    calculatorData : calculatorReducer
});

let store = createStore(reducers);

export default store;