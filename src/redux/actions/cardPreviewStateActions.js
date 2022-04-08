export const setCardPreviewState = (state) => {
  return {
    type: "SET_CARD_PREVIEW_STATE",
    payload: state,
  };
};

export const updateCardPreviewState = (data) => {
  return {
    type: "UPDATE_CARD_PREVIEW_STATE",
    payload: data,
  };
};

export const clearCardPreviewState = () => {
  return {
    type: "CLEAR_CARD_PREVIEW_STATE",
  };
};
