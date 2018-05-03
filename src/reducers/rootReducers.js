import { combineReducers } from "redux";
import messageReducer from "./smsReducer";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
