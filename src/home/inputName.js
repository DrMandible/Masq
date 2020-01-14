import React from "react";
import { character } from "../database/players";
import * as Themed from "../theme/styles";

export const InputName = ({ current, send }) => {
  const handleSubmit = e => {
    character.Name = e;
    // console.log(character.Name);
  };

  return (
    <>
      <Themed.TextDivider bgColor="transparent">
        <h1>Name: </h1>
        <input
          style={{ color: "white" }}
          placeholder={character.Name}
          onChange={e => {
            handleSubmit(e.target.value);
          }}
        />
      </Themed.TextDivider>
    </>
  );
};
