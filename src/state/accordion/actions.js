import { SET_SELECTED_SECTION } from "./reducer";
import { store } from "../../stores";

export const setSelectedSection = (selectedSection) => {
  let state = store.getState();

  return {
    type: SET_SELECTED_SECTION,
    payload: {
      selectedSection,
    }
  };
};
