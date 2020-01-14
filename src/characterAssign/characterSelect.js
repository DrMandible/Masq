import React from "react";
import * as Styled from "./styled";
import { Link } from "@reach/router";
import { character } from "../database/players";
import { ColoredMask } from "../assets";
import { GossipList } from "../gossip/gossip";
import { useMachine } from "@xstate/react";
import { gossipLoader } from "../gossip/gossipMachine";

export const CharacterSelect = () => {
  const [current, send] = useMachine(gossipLoader);
  const mask = current.context.data.character.color;
  console.log(
    "[CharacterSelect} current.context.data.character: ",
    current.context.data.character
  );
  return (
    <>
      <div>
        <Styled.ScreenWrapper bgColor={character.color.background}>
          <div style={{ margin: "2vh" }} />
          <ColoredMask
            color={mask}
            maskName={current.context.data.character.design}
            height="15rem"
            width="15rem"
          />
          <GossipList />
          <div style={{ marginBottom: "4rem" }} />
        </Styled.ScreenWrapper>

        {/* Routing */}
        <Link to="/">
          <Styled.HomeButton />
        </Link>
      </div>
    </>
  );
};
