import React from "react";
import * as Styled from "../characterAssign/styled";
import * as HomeStyled from "./styled";
import { ColoredMask } from "../assets";
import { character } from "../database/players";

const colors = [
  { primary: "violet", background: "rgb(66, 0, 0)", secondary: "cyan" },
  { primary: "darkorange", background: "rgb(0, 66, 66)", secondary: "blue" },
  { primary: "salmon", background: "rgb(66, 0, 66)", secondary: "red" },
  { primary: "orangered", background: "rgb(14, 14, 61)", secondary: "green" },
  {
    primary: "rgb(255, 255, 102)",
    background: "rgb(102, 0, 102)",
    secondary: "purple"
  }
];

let Choices = () => {
  const setColor = e => {
    console.log("Setting character color to: ", e);
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
          <ColoredMask primary={color.primary} secondary={color.secondary}>
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
      <Styled.TextDivider bgColor="green">
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
