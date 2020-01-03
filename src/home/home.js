import React from "react";
import { Link } from "@reach/router";
import { character } from "../characterAssign/character";

import "./styles.css";

import * as Styled from "./styled";

export const HomeScreen = () => {
  const [modal, setModal] = React.useState(true);
  const handleNameChange = e => {
    character.Name = e;
  };
  const handleGameName = e => {
    character.GameRoom = e;
  };

  const StartButton = () => {
    return (
      <>
        <Styled.PopUp />
      </>
    );
  };

  console.log(character.Name, character.GameRoom);

  return (
    <>
      <Styled.BackgroundWrapper>
        {/* <Styled.Pulsing /> */}
        <Styled.BackgroundEffectsWrapper>
          <Styled.Flare />
        </Styled.BackgroundEffectsWrapper>
        {/* <Styled.BackgroundImage /> */}
        <div>
          <Styled.MasqTitle className="Masq">Masq</Styled.MasqTitle>
        </div>
        <div>
          {/* <input
            placeholder="Player Name"
            onChange={e => {
              handleNameChange(e.target.value);
            }}
            onSubmit={e => {
              handleNameChange(e.target.value);
            }}
          /> */}
          {/* <input
            placeholder="Game Room"
            onChange={e => {
              handleGameName(e.target.value);
            }}
          /> */}
        </div>
        <Styled.ButtonWrapper onClick={() => StartButton()}>
          <nav>
            <Link to="characterAssign" style={{ textDecoration: "none" }}>
              <Styled.StartButton>Play</Styled.StartButton>
            </Link>
          </nav>
        </Styled.ButtonWrapper>
      </Styled.BackgroundWrapper>
    </>
  );
};
