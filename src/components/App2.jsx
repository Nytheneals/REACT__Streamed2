import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from "./MoviesList";
import MovieDetail from "./MovieDetail";

//********************MAIN COMPONENT********************//

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Movies} />
        <Route path="/:Id" component={MovieDetail} />
      </div>
    </Router>
  );
};

export default App;
