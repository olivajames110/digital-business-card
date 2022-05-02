import mobilePreviewReducer from "./mobilePreviewReducer";
import formStateReducer from "./formStateReducer";
import formStepReducer from "./formStepReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formState: formStateReducer,
  mobilePreviewActive: mobilePreviewReducer,
  formStep: formStepReducer,
});

export default rootReducer;
