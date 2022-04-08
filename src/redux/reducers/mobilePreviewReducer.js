const mobilePreviewReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_MOBILE_PREVIEW":
      return action.payload;

    default:
      return state;
  }
};

export default mobilePreviewReducer;
