import { isMobile } from "react-device-detect";
import { v4 as uuidv4 } from "uuid";
const formInitStateFilled = {
  id: uuidv4(),
  name: "Jimmy Oliva",
  job: "Front End Developer",
  company: "Greatest Company Ever Inc.",
  phone: "+1 (631)-456-3373",
  email: "Olivajames110@gmail.com",
  imagePersonal: "",
  imageWork: "",
  address: {
    street: "125 Carley Avenue",
    city: "Huntington NY, 11743",
  },

  webAddressWork: "",

  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedIn: "",
    website: "",
  },
  theme: {
    themeName: isMobile ? "bright" : "light",
    borderRadius: "",
  },
};
const formInitStat = {
  id: uuidv4(),
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
  theme: {
    themeName: isMobile ? "bright" : "light",
    borderRadius: "",
  },
};

const cardPreviewStateReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_CARD_PREVIEW_STATE":
      return action.payload.state;
    case "UPDATE_CARD_PREVIEW_STATE":
      let newState = { ...state };
      if (action.payload.nestedKey) {
        newState[action.payload.key][action.payload.nestedKey] =
          action.payload.value;
      } else {
        newState[action.payload.key] = action.payload.value;
      }

      return newState;

    case "CLEAR_CARD_PREVIEW_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default cardPreviewStateReducer;
