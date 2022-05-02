import { isMobile } from "react-device-detect";
import { v4 as uuidv4 } from "uuid";

const formInitStat = {
  id: uuidv4(),
  url: "",
  name: "",
  job: "",
  company: "",
  phone: "",
  email: "",
  imagePersonal: "",
  imageWork: "",
  webAddressWork: "",
  address: {
    street: "",
    city: "",
  },
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedIn: "",
    website: "",
  },
  themeName: "bright",
  pageBackgroundColor: "",
  themeStyles: {
    background: "",
    color: "",
    borderRadius: "",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
};

const formStateReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_FORM_STATE":
      return action.payload;
    case "UPDATE_FORM_STATE":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;

      return newState;
    case "UPDATE_FORM_STATE_STYLES":
      let themeStyles = { ...state.themeStyles };
      themeStyles[action.payload.keyName] = action.payload.value;
      return { ...state, themeStyles };

    case "CLEAR_FORM_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default formStateReducer;
