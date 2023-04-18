import { v4 as uuidv4 } from "uuid";
import { brightStyles } from "../../components/Form/Components/ThemeSelector/themeStyles";

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
  imageWorkColor: "",
  webAddressWork: "",
  companyAddress: "",
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
  facebook: "",
  instagram: "",
  twitter: "",
  linkedIn: "",
  website: "",
  themeName: "bright",
  pageBackgroundColor: "",
  themeStyles: brightStyles,
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
