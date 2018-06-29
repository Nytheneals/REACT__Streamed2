import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  form: formReducer,
});

export default rootReducer;
