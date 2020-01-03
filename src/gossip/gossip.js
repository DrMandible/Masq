import React from "react";
import * as Styled from "../characterAssign/styled";
import * as StyledGossip from "./styled";
import UIController from "../UIController";
import { ReactComponent as Mask } from "../characterAssign/mask.svg";
import { character } from "../characterAssign/character";
import { NPC } from "../database/players.js";

let AllNPC = NPC();

const NPCList = () => {
  const [show, setShow] = React.useState("");
  console.log(show);
  let x = Object.keys(AllNPC).map((npc, key) => npc);
  return (
    <div>
      {x.map((npc, key) => (
        <div key={key}>
          <Styled.TextWrapper onClick={() => setShow({ npc })}>
            <StyledGossip.NPCWrapper>
              <Styled.TextDivider
                bgColor={Object.values(AllNPC)[key].color.primary}
              >
                <Styled.TextDivider
                  bgColor={Object.values(AllNPC)[key].color.secondary}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                  }}
                >
                  {npc}
                  <div>{Object.values(AllNPC)[key].charm}</div>
                  <StyledGossip.IconWrapper>
                    <StyledGossip.Icon
                      sparkle1={"purple"}
                      sparkle2={"pink"}
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
          <Styled.TextDivider bgColor={palette.secondary}>
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
