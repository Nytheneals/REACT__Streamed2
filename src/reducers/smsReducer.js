import { GREETINGS } from "../actions/action";

const initialState = {
  messageVisibility: false
};

const messageReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GREETINGS:
      return { ...state, messageVisibility: !state.messageVisibility };

    default:
      return state;
  }
};

export default messageReducer;
