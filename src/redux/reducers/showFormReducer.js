const showFormReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_SHOW_FORM":
      return true;
    case "SET_HIDE_FORM":
      return false;

    default:
      return state;
  }
};

export default showFormReducer;
