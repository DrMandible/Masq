import React from "react";
import * as Styled from "../theme/styles";
import { character } from "../characterAssign/character";
import { useMachine } from "@xstate/react";
import { gossipMachine } from "./gossipMachine";
import { ConfirmGossip } from "./confirmGossip";
import { NPCList } from "./npcList";

export const GossipList = props => {
  const [current, send] = useMachine(gossipMachine);
  let palette = current.context.data.character.color;

  return (
    <>
      <>
        <Styled.TextDivider bgColor={palette.primary}>
          {current.matches("idle") && (
            <>
              <Styled.TextDivider
                bgColor={palette.secondary}
                onClick={() => send("HIDE")}
                style={{ zIndex: "99999", pointerEvents: "auto" }}
              >
                Hide Gossip
              </Styled.TextDivider>
              <NPCList current={current} send={send} />
            </>
          )}

          {current.matches("hide") && (
            <>
              <Styled.TextDivider
                bgColor={palette.background}
                onClick={() => send("SHOW")}
                style={{ zIndex: "99999", pointerEvents: "auto" }}
              >
                Show Gossip
              </Styled.TextDivider>
            </>
          )}

          {current.matches("confirm") && (
            <>
              <ConfirmGossip current={current} send={send} />
            </>
          )}
        </Styled.TextDivider>

        <Styled.Footer>❤️ : {character.charm}</Styled.Footer>
      </>
    </>
  );
};
