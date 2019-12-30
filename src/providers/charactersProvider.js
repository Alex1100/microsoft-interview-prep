import React, { useReducer, createContext } from "react";

export const SET_CHARACTERS = "SET_CHARACTERS";
export const FAVORITE_CHARACTER = "FAVORITE_CHARACTER";
export const UNFAVORITE_CHARACTER = "UNFAVORITE_CHARACTER";

const initialState = {
  characters: []
};

const CharacterContext = createContext(initialState);

export const CharacterConsumer = CharacterContext.Consumer;

export const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_CHARACTERS:
      case FAVORITE_CHARACTER:
      case UNFAVORITE_CHARACTER:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};
