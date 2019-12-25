import { progressBarReducer } from "./progressBar";
import { combineReducers } from "redux";
import { rootReducer } from "./root";
import { accordionReducer } from "./accordion";

export const combinedReducer = combineReducers({
  accordionReducer,
  progressBarReducer,
  rootReducer,
});
