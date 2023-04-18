const cardDirectionReducer = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_CARD_DIRECTION":
      let direction = !state;
      return direction;
    case "SET_CARD_DIRECTION_FORWARD":
      return true;
    case "SET_CARD_DIRECTION_BACKWARD":
      return false;

    default:
      return state;
  }
};

export default cardDirectionReducer;
