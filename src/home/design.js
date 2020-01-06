import React from "react";
import * as Styled from "../characterAssign/styled";
import * as HomeStyled from "./styled";
import { masks } from "../assets";
import { character } from "../database/players";

export const BWMask = props => {
  return (
    <>
      <div>{masks[character.design]}</div>
    </>
  );
};

const Choices = () => {
  const setDesign = e => {
    character.design = e;
  };

  return (
    <>
      {Object.values(masks).map((mask, key) => (
        <h1 key={key}>
          <Styled.TextDivider
            bgColor="white"
            style={{
              width: "7rem",
              height: "7rem",
              justifyContent: "center",
              margin: "0",
              backgroundImage: 'url("https://i.imgur.com/17x3OSQ.png")'
            }}
            onClick={() => setDesign(Object.keys(masks)[key])}
          >
            {mask}
          </Styled.TextDivider>
        </h1>
      ))}
    </>
  );
};

export const Design = props => {
  return (
    <>
      <HomeStyled.PopUp>
        <Styled.TextWrapper>
          <Styled.TextDivider bgColor="rgba(15,10,20,00.1)">
            <Styled.TextDivider bgColor="white">
              <span>
                <h1
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: "2rem"
                  }}
                >
                  <div className="Masq" style={{ color: "white" }}>
                    Design
                  </div>
                </h1>
              </span>
            </Styled.TextDivider>
            <HomeStyled.PopUpContent>
              <Choices />
            </HomeStyled.PopUpContent>
          </Styled.TextDivider>
        </Styled.TextWrapper>
      </HomeStyled.PopUp>
    </>
  );
};
