const initialState = {
  messageVisibility: false
};

const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SALUTIONS":
      return { ...state, messageVisibility: !state.messageVisibility };
      break;

    case "SHOW_TEXT":
      return { ...state, text: payload };
      break;

    case "SHOW_DELETE":
      return { ...state, text: payload };
      break;

    default:
      return state;
      break;
  }
};

export default messageReducer;
