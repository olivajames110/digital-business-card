const isMobileReducer = (
  state = {
    bool: true,
    clientWidth: document.body.clientWidth,
  },
  action
) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return action.payload;

    default:
      return state;
  }
};

export default isMobileReducer;
