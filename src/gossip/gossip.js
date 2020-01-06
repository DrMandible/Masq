import React from "react";
import * as Styled from "../characterAssign/styled";
import * as StyledGossip from "./styled";
import UIController from "../UIController";
import { ReactComponent as Mask } from "../characterAssign/mask.svg";
import { character } from "../characterAssign/character";
import { NPC } from "../database/players.js";

let AllNPC = NPC();

const NPCList = () => {
  let x = Object.keys(AllNPC).map((npc, key) => npc);
  return (
    <div>
      {x.map((npc, key) => (
        <div key={key}>
          <Styled.TextWrapper>
            <StyledGossip.NPCWrapper>
              <Styled.TextDivider
                bgColor={Object.values(AllNPC)[key].color.secondary}
              >
                <Styled.TextDivider
                  bgColor={Object.values(AllNPC)[key].color.background}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  {npc}
                  <div>{Object.values(AllNPC)[key].charm}</div>
                  <StyledGossip.IconWrapper>
                    <StyledGossip.Icon
                      sparkle1={Object.values(AllNPC)[key].color.secondary}
                      sparkle2={Object.values(AllNPC)[key].color.secondary}
                      rightEye={Object.values(AllNPC)[key].color.primary}
                      leftEye={Object.values(AllNPC)[key].color.primary}
                    >
                      <Mask />
                    </StyledGossip.Icon>
                  </StyledGossip.IconWrapper>
                </Styled.TextDivider>
              </Styled.TextDivider>
            </StyledGossip.NPCWrapper>
          </Styled.TextWrapper>
        </div>
      ))}
    </div>
  );
};

export const Gossip = props => {
  let palette = props.palette;
  let reveal = props.gossipReveal;
  return (
    <>
      <Styled.TextDivider bgColor={palette.primary}>
        {reveal ? (
          <>
            <Styled.TextDivider bgColor={"gray"}>
              Hide Gossip
            </Styled.TextDivider>
            <NPCList />
          </>
        ) : (
          <Styled.TextDivider bgColor={palette.background}>
            <div>
              <b>Gossip</b>
            </div>
          </Styled.TextDivider>
        )}
      </Styled.TextDivider>
      <Styled.Footer>❤️ : {character.charm}</Styled.Footer>
    </>
  );
};
