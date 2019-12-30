import React, { Fragment, useEffect } from "react";
import axios from "axios";
import {
  setCharacters,
  unfavoriteCharacter,
  favoriteCharacter
} from "../state";
import "./styles/CharacterList.css";

export const CharacterList = ({ state, dispatch }) => {
  useEffect(() => {
    if (state.characters.length === 0) {
      axios
        .get("https://swapi.co/api/people")
        .then(response => {
          let characters = response.data.results;
          characters.forEach(character => {
            character.favorited = false;
          });
          setCharacters(characters, dispatch, state);
        })
        .catch(err => console.log(err));
    }
  }, [state, dispatch]);

  const toggleFavoriteStatus = characterIndex => {
    if (state.characters[characterIndex].favorited) {
      unfavoriteCharacter(characterIndex, dispatch, state);
    } else {
      favoriteCharacter(characterIndex, dispatch, state);
    }
  };

  if (state && state.characters) {
    return (
      <Fragment>
        {state.characters.map((character, index) => {
          return (
            <div
              className="character-list-container"
              onClick={_ => toggleFavoriteStatus(index)}
            >
              <p
                className={
                  `${character.favorited ? "favorite" : ""}` + " character-item"
                }
              >
                {character.name}
              </p>
              <p
                className={
                  `${character.favorited ? "favorite" : ""}` + " character-item"
                }
              >
                {character.homeworld}
              </p>
              <p
                className={
                  `${character.favorited ? "favorite" : ""}` + " character-item"
                }
              >
                {character.eye_color}
              </p>
            </div>
          );
        })}
      </Fragment>
    );
  }

  return null;
};
