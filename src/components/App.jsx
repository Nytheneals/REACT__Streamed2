import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducers";

import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";
import Toggle from "./Toggle";

// STORE
const store = createStore(rootReducer, {}, composeWithDevTools());

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
