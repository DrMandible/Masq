import React from "react";
import * as Styled from "./maskStyles";
import { homeMachine } from "../home/homeMachine";
import { useMachine } from "@xstate/react";
import { ReactComponent as FeatherMask } from "./featherMask.svg";
import { ReactComponent as SparkleMask } from "./sparkleMask.svg";
import { ReactComponent as MustacheMask } from "./mustacheMask.svg";
import { ReactComponent as TopFeathersMask } from "./topFeathersMask.svg";
import { character } from "../database/players";

const MaskWithFeathers = props => {
  return (
    <Styled.MaskIcon height={props.height} width={props.width}>
      <Styled.SVGButtonWrapper
        primary={props.primary}
        secondary={props.secondary}
      >
        <FeatherMask />
      </Styled.SVGButtonWrapper>
    </Styled.MaskIcon>
  );
};

const MaskWithSparkles = props => {
  return (
    <Styled.MaskIcon height={props.height} width={props.width}>
      <Styled.SVGButtonWrapper
        primary={props.primary}
        secondary={props.secondary}
      >
        <SparkleMask />
      </Styled.SVGButtonWrapper>
    </Styled.MaskIcon>
  );
};

const MaskWithMustache = props => {
  return (
    <Styled.MaskIcon height={props.height} width={props.width}>
      <Styled.SVGButtonWrapper
        primary={props.primary}
        secondary={props.secondary}
      >
        <MustacheMask />
      </Styled.SVGButtonWrapper>
    </Styled.MaskIcon>
  );
};
const MaskWithTopFeathers = props => {
  return (
    <Styled.MaskIcon height={props.height} width={props.width}>
      <Styled.SVGButtonWrapper
        primary={props.primary}
        secondary={props.secondary}
      >
        <TopFeathersMask />
      </Styled.SVGButtonWrapper>
    </Styled.MaskIcon>
  );
};

export const masks = {
  "Feather Mask": (
    <MaskWithFeathers
      primary={character.color.primary}
      secondary={character.color.secondary}
    />
  ),
  "Sparkle Mask": (
    <MaskWithSparkles
      primary={character.color.primary}
      secondary={character.color.secondary}
    />
  ),
  "Mustache Mask": (
    <MaskWithMustache
      primary={character.color.primary}
      secondary={character.color.secondary}
    />
  ),
  "Top Feathers Mask": (
    <MaskWithTopFeathers
      primary={character.color.primary}
      secondary={character.color.secondary}
    />
  )
};

export const PlayerMask = () => {
  const [current, send] = useMachine(homeMachine);
  let data = current.context.data.character;
  let colors = data.color;

  return ColoredMask(colors);
};

export const ColoredMask = props => {
  let maskName = props.maskName;
  let colors = props.color;

  // console.log("[ColoredMask] props: ", props);

  switch (maskName) {
    case "Feather Mask":
      return (
        <MaskWithFeathers
          primary={colors.primary}
          secondary={colors.secondary}
          shadow={colors.shadow}
          height={props.height}
          width={props.width}
        />
      );
    case "Sparkle Mask":
      return (
        <MaskWithSparkles
          primary={colors.primary}
          secondary={colors.secondary}
          height={props.height}
          width={props.width}
        />
      );
    case "Mustache Mask":
      return (
        <MaskWithMustache
          primary={colors.primary}
          secondary={colors.secondary}
          height={props.height}
          width={props.width}
        />
      );
    case "Top Feathers Mask":
      return (
        <MaskWithTopFeathers
          primary={colors.primary}
          secondary={colors.secondary}
          height={props.height}
          width={props.width}
        />
      );
    default:
      return (
        <>
          ${console.error("[ColoredMask] Mask color prop not found")}
          <div>Mask not found</div>
        </>
      );
  }
};
