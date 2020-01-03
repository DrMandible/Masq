import React from "react";
import { Link } from "@reach/router";
import { character } from "../characterAssign/character";

import "./styles.css";

import * as div from "./styled";

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
        <div.PopUp />
      </>
    );
  };

  console.log(character.Name, character.GameRoom);

  return (
    <>
      <div.BackgroundEffectsWrapper>
        <div.Flare />
      </div.BackgroundEffectsWrapper>
      <div.BackgroundWrapper>
        {/* <Styled.BackgroundImage /> */}
        <div>
          <div.MasqTitle className="Masq">Masq</div.MasqTitle>
        </div>
        <div>
          <input
            placeholder="Player Name"
            onChange={e => {
              handleNameChange(e.target.value);
            }}
            onSubmit={e => {
              handleNameChange(e.target.value);
            }}
          />
          {/* <input
            placeholder="Game Room"
            onChange={e => {
              handleGameName(e.target.value);
            }}
          /> */}
        </div>
        <div.ButtonWrapper onClick={() => StartButton()}>
          <nav>
            <Link to="characterAssign">
              <div.StartButton>
                Put on your<div className="MasqInline">Masq</div>
              </div.StartButton>
            </Link>
          </nav>
        </div.ButtonWrapper>
      </div.BackgroundWrapper>
    </>
  );
};
