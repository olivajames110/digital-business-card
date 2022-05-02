export const setFormState = (state) => {
  return {
    type: "SET_FORM_STATE",
    payload: state,
  };
};

export const updateFormState = (data) => {
  return {
    type: "UPDATE_FORM_STATE",
    payload: data,
  };
};

export const updateFormStateStyles = (data) => {
  return {
    type: "UPDATE_FORM_STATE_STYLES",
    payload: data,
  };
};

export const clearFormState = () => {
  return {
    type: "CLEAR_FORM_STATE",
  };
};
