import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Movies from "./MoviesList";
import MovieDetail from "./MovieDetail";

const hello = () => "Hello";
const store = createStore(hello);

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
