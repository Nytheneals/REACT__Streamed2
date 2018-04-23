import { combineReducers } from "redux";
import messageReducer from "./reducers";

const rootReducer = combineReducers({ message: messageReducer });

export default rootReducer;
