import mobilePreviewReducer from "./mobilePreviewReducer";
import cardPreviewStateReducer from "./cardPreviewStateReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cardPreviewState: cardPreviewStateReducer,
  mobilePreviewActive: mobilePreviewReducer,
});

export default rootReducer;
