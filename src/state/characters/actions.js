import {
  SET_CHARACTERS,
  FAVORITE_CHARACTER,
  UNFAVORITE_CHARACTER
} from "../../providers";

const constructSetCharacters = characters => ({
  type: SET_CHARACTERS,
  payload: {
    characters
  }
});

const constructFavoriteCharacter = characters => ({
  type: FAVORITE_CHARACTER,
  payload: {
    characters
  }
});

const constructUnfavoriteCharacter = characters => ({
  type: UNFAVORITE_CHARACTER,
  payload: {
    characters
  }
});

export const setCharacters = (characters, dispatch, _) => {
  dispatch(constructSetCharacters(characters));
};

export const favoriteCharacter = (characterIndex, dispatch, state) => {
  state.characters[characterIndex].favorited = true;
  dispatch(constructFavoriteCharacter(state.characters));
};

export const unfavoriteCharacter = (characterIndex, dispatch, state) => {
  state.characters[characterIndex].favorited = false;
  dispatch(constructUnfavoriteCharacter(state.characters));
};
