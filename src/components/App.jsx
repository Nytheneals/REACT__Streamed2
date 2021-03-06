import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from "redux-logger";
import thunk from 'redux-thunk';

// import MoviesList from './MoviesList';
// import MovieDetail from './MovieDetail';
import NewConfigForm from './NewConfigFormRedux';
import rootReducer from '../reducers/rootReducers';

// MIDDLEWARE
const middleware = [thunk];

// STORE
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

//* *******************MAIN COMPONENT********************//

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Link to="/">
          {/* <div className="header">
            <h1>
              STR3AM3D
              <sup>TM</sup>
            </h1>
            <h4>[ Cheerios' Movie List ]</h4>
          </div> */}
        </Link>
        {/* <Route exact path="/" component={MoviesList}/> */}
        <Route exact path="/" component={NewConfigForm} />
        {/* <Route path="/:Id" component={MovieDetail}/> */}
      </div>
    </Router>
  </Provider>
);

export default App;
