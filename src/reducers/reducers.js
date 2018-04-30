const initialState = {
  messageVisibility: false
};

const messageReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "SALUTIONS":
      return { ...state, messageVisibility: !state.messageVisibility };
      break;

    default:
      return state;
      break;
  }
};

export default messageReducer;
