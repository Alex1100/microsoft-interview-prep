import React, { Fragment } from "react";
import { CharacterConsumer } from "../providers";
import { CharacterList } from "../components";
import "./styles/CharacterContainer.css";

export const CharacterContainer = () => {
  return (
    <Fragment>
      <CharacterConsumer>
        {({ state, dispatch }) => {
          return (
            <div className="characters">
              <CharacterList {...{ state, dispatch }} />
            </div>
          );
        }}
      </CharacterConsumer>
    </Fragment>
  );
};
