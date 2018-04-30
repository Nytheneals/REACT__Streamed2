import { GREETINGS, GET_MOVIES } from "../actions/action";

const initialState = {
  messageVisibility: false,
  movies: []
};

const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GREETINGS:
      return { ...state, messageVisibility: !state.messageVisibility };
      break;

    case GET_MOVIES:
      return { ...state, movies: payload };
      break;

    default:
      return state;
      break;
  }
};

export default messageReducer;
