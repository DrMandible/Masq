import React from "react";
import { gossipConfirm } from "./gossipMachine";
import { gossipFrequency } from "./weights";
import * as Styled from "../theme/styles";
import * as StyledGossip from "./styled";
import { ColoredMask } from "../assets";

import { NPC } from "../database/players.js";
let AllNPC = NPC();

export const NPCList = ({ current, send }) => {
  let x = Object.keys(AllNPC).map((npc, key) => npc);
  let data = current.context.data;
  gossipFrequency(current);

  const handleClick = e => {
    // console.log("[NPCList: handleClick()]", e);
    gossipConfirm.target = e;
    gossipConfirm.cost = 5;
    send("CHOOSE_GOSSIP");
    // console.log(gossipConfirm);
  };
  // console.log("[NPCList: current]", current);
  return (
    <>
      <div>
        {x.map((npc, key) => (
          <div
            key={key}
            onClick={e => {
              handleClick(npc);
            }}
            style={{ zIndex: "999999", pointerEvents: "auto" }}
          >
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
                      backgroundImage: "url(https://i.imgur.com/17x3OSQ.png)"
                    }}
                  >
                    <ColoredMask
                      maskName={Object.values(AllNPC)[key].design}
                      color={Object.values(AllNPC)[key].color}
                      height="5rem"
                      width="5rem"
                    />
                    {npc}
                    <div
                      style={{
                        width: "50%",
                        height: "100%"
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      {Object.values(data.NPCList)[key].design ===
                        data.character.design && (
                        <Styled.TextDivider
                          bgColor="gray"
                          style={{
                            minWidth: "3rem",
                            height: "3rem",
                            justifyContent: "center",
                            borderRadius: "50%",
                            padding: "0.2rem",
                            margin: "0.2rem",
                            backgroundImage:
                              "url(https://i.imgur.com/17x3OSQ.png)"
                          }}
                        >
                          <ColoredMask
                            color={{
                              primary: "black",
                              secondary: "black",
                              shadow: "black"
                            }}
                            maskName={Object.values(data.NPCList)[key].design}
                            height="2rem"
                            width="2rem"
                          />
                        </Styled.TextDivider>
                      )}

                      {Object.values(data.NPCList)[key].color.id ===
                        data.character.color.id && (
                        <Styled.TextDivider
                          bgColor={
                            Object.values(data.NPCList)[key].color.primary
                          }
                          style={{
                            minWidth: "3rem",
                            height: "3rem",
                            justifyContent: "center",
                            borderRadius: "50%",
                            padding: "0.2rem",
                            margin: "0.2rem",
                            backgroundImage:
                              "url(https://i.imgur.com/17x3OSQ.png)"
                          }}
                        >
                          <Styled.TextDivider
                            bgColor={
                              Object.values(data.NPCList)[key].color.secondary
                            }
                            style={{
                              width: "1rem",
                              height: "1rem",
                              justifyContent: "center",
                              borderRadius: "50%",
                              padding: "0",
                              margin: 0
                            }}
                          />
                        </Styled.TextDivider>
                      )}
                    </div>
                  </Styled.TextDivider>
                </Styled.TextDivider>
              </StyledGossip.NPCWrapper>
            </Styled.TextWrapper>
          </div>
        ))}
      </div>
    </>
  );
};
