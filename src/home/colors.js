import React from "react";
import * as Styled from "../characterAssign/styled";
import * as HomeStyled from "./styled";
import { ColoredMask } from "../assets";
import { character } from "../database/players";

const colors = [
  {
    id: "Red and Yellow on Purple",
    primary: "rgb(255, 66, 66)",
    background: "rgb(66, 0, 66)",
    secondary: "yellow"
  },
  {
    id: "Violet and Cyan on Maroon",
    primary: "violet",
    background: "rgb(66, 0, 0)",
    secondary: "cyan"
  },
  {
    id: "Green and Blue on Olive",
    primary: "rgb(122, 255, 122)",
    background: "rgb(66, 66, 0)",
    secondary: "rgb(166, 166, 255)"
  },
  {
    id: "Orange and Blue on Sherpa Blue",
    primary: "rgb(255, 99, 0)",
    background: "rgb(0, 66, 66)",
    secondary: "blue"
  },
  {
    id: "Yellow and Red on Green",
    primary: "rgb(255, 255, 102)",
    background: "rgb(12, 66, 12)",
    secondary: "red"
  }
];

let Choices = () => {
  const setColor = e => {
    // console.log("Setting character color to: ", e);
    character.color = e;
  };
  return (
    <>
      {colors.map((color, key) => (
        <Styled.TextDivider
          bgColor={color.background}
          style={{
            width: "7rem",
            height: "7rem",
            justifyContent: "center",
            backgroundImage: 'url("https://i.imgur.com/17x3OSQ.png")'
          }}
          key={key}
          onClick={() => setColor(color)}
        >
          <ColoredMask color={color} maskName={character.design}>
            {[character.design]}
          </ColoredMask>
        </Styled.TextDivider>
      ))}
    </>
  );
};

export const Colors = props => {
  return (
    <>
      <Styled.TextDivider bgColor="gray">
        <h1
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "2rem"
          }}
        >
          <div className="Masq">Color</div>
        </h1>
      </Styled.TextDivider>
      <HomeStyled.PopUpContent>
        <Choices />
      </HomeStyled.PopUpContent>
    </>
  );
};
