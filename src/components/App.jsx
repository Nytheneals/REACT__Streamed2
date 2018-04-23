import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducers";

import Movies from "./MoviesList";
import MovieDetail from "./MovieDetail";

// STORE
const store = createStore(rootReducer);

//********************MAIN COMPONENT********************//

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Movies} />
          <Route path="/:Id" component={MovieDetail} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
