import React from "react";
import { createStore, combineReducers } from "redux";

//********************MAIN COMPONENT********************//

const App = () => {
  return (
    <div>
      <h1>Redux</h1>
    </div>
  );
};

export default App;

// DEFAULT STATE

const defaultState = {
  welcome: "Hi",
  otherState: "OtherStuff",
  counter: "Numerical"
};

// REDUCER
const greetingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GREET_ME":
      return {
        ...state,
        welcome: `Hello ${action.payload}`
      };
    case "GREET_WORLD":
      return {
        ...state,
        welcome: "Hello world"
      };

    default:
      return state;
  }
};

// STORE

const store = createStore(greetingsReducer);

// ACTION

store.dispatch({
  type: "GREET_ME",
  payload: "Natheneals"
});

console.log(store.getState());
