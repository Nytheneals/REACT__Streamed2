import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import thunk from "redux-thunk";

import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";
import Toggle from "./Toggle";
import rootReducer from "../reducers/rootReducers";

// MIDDLEWARE
const middleware = [thunk];

// STORE
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

//********************MAIN COMPONENT********************//

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Toggle />
          <Route exact path="/" component={MoviesList} />
          <Route path="/:Id" component={MovieDetail} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
