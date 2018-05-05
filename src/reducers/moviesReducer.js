import {GET_MOVIES, GET_MOVIE} from "../actions/action";

const initialState = {
  movies: [],
  moviesLoaded: false,
  movie: {},
  movieLoaded: false
};

const moviesReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
        moviesLoaded: true
      };

    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        movieLoaded: true
      };

    default:
      return state;
  }
};

export default moviesReducer;