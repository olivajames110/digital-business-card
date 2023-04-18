import showFormReducer from "./showFormReducer";
import cardDirectionReducer from "./cardDirectionReducer";
import mobilePreviewReducer from "./mobilePreviewReducer";
import isMobileReducer from "./isMobileReducer";
import formStateReducer from "./formStateReducer";
import formStepReducer from "./formStepReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formState: formStateReducer,
  mobilePreviewActive: mobilePreviewReducer,
  formStep: formStepReducer,
  cardDirectionIsForward: cardDirectionReducer,
  showForm: showFormReducer,
  isMobile: isMobileReducer,
});

export default rootReducer;
