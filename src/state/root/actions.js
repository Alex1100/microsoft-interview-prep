import { SET_SELECTED_COMPONENT } from "../";
import { store } from "../../stores";

export const setSelectedComponent = (selectedComponent) => {
  let state = store.getState();
  return {
    type: SET_SELECTED_COMPONENT,
    payload: {
      selectedComponent,
    },
  };
};
