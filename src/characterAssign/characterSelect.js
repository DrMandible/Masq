import React from "react";
import * as Styled from "./styled";
import { Link } from "@reach/router";
import { character } from "./character";
import { masks } from "./masks";
import { SecretIdentity } from "./secretIdentity";
import { assignMask } from "./assign";
import { Gossip } from "../gossip/gossip";
import UIController from "../UIController";

import { ReactComponent as Mask } from "./mask.svg";
// console.log(UIController());
assignMask();

export const CharacterSelect = () => {
  const [show, setShow] = React.useState(UIController());
  const mask = masks[character.mask];
  const random = () => {
    window.location.reload();
  };

  return (
    <>
      <div>
        <Styled.ScreenWrapper secondaryColor={mask.secondary}>
          <Styled.BackgroundSVGWrapper>
            <Styled.BackgroundSVG
              sparkle1={"purple"}
              sparkle2={"pink"}
              rightEye={mask.primary}
              leftEye={mask.primary}
            >
              <Mask />
            </Styled.BackgroundSVG>
          </Styled.BackgroundSVGWrapper>
          <Styled.TextWrapper onClick={() => setShow(UIController("secret"))}>
            <SecretIdentity secretReveal={show.secret} palette={mask} />
          </Styled.TextWrapper>
          <Styled.TextWrapper onClick={() => setShow(UIController("gossip"))}>
            <Gossip
              gossipReveal={show.gossip}
              palette={mask}
              style={{ pointerEvents: "auto" }}
            />
          </Styled.TextWrapper>
          <div style={{ marginBottom: "4rem" }} />
        </Styled.ScreenWrapper>

        {/* Routing */}
        {/* <Link to="/">
          <Styled.HomeButton>
            <span role="img" aria-label="Home">
              🏰
            </span>
          </Styled.HomeButton>
        </Link> */}
        <Styled.RandomButton onClick={random}>
          <span role="img" aria-label="Randomize">
            🔄
          </span>
        </Styled.RandomButton>
      </div>
    </>
  );
};