import React from "react";
import { Design } from "./design";
import { Colors } from "./colors";
import { InputName } from "./inputName";
import { useMachine } from "@xstate/react";
import { homeMachine } from "./homeMachine";
import { ColoredMask } from "../assets";
import { Link } from "@reach/router";

import "./styles.css";

import * as Styled from "./styled";
import * as Themed from "../theme/styles";

export const HomeScreen = () => {
  const [current, send] = useMachine(homeMachine);

  return (
    <>
      <Styled.BackgroundWrapper
        style={{
          padding: "0rem",
          backgroundImage: 'url("https://i.imgur.com/17x3OSQ.png")',
          background: "black"
        }}
      >
        <Styled.BackgroundEffectsWrapper>
          <Styled.Flare />
        </Styled.BackgroundEffectsWrapper>
        <div>
          <Styled.MasqTitle className="Masq">Masq</Styled.MasqTitle>
        </div>

        {current.matches("splash") && (
          <Themed.TextDivider
            onClick={() => {
              send("INPUT_NAME");
            }}
          >
            <Styled.StartButton>Play</Styled.StartButton>
          </Themed.TextDivider>
        )}

        {current.matches("inputName") && (
          <Themed.TextDivider>
            <InputName />
            <Styled.StartButton
              style={{
                zIndex: "9999999",
                pointerEvents: "auto",
                margin: "1rem"
                // color: "black"
              }}
              onClick={() => {
                send("DESIGN");
              }}
            >
              SUBMIT
            </Styled.StartButton>
          </Themed.TextDivider>
        )}

        {current.matches("design") && (
          <div
            onClick={() => {
              send("CHOOSE_DESIGN");
            }}
          >
            <Design />
          </div>
        )}
        {current.matches("colors") && (
          <Themed.TextDivider
            bgColor="rgba(63, 28, 28,0.1)"
            onClick={() => {
              send("CHOOSE_COLOR");
            }}
          >
            <Colors />
          </Themed.TextDivider>
        )}
        {current.matches("confirm") && (
          <ConfirmSetup current={current} send={send} />
        )}
        {current.matches("complete") && <></>}
      </Styled.BackgroundWrapper>
    </>
  );
};

export const ConfirmSetup = ({ current, send }) => {
  const data = current.context.data.character;
  return (
    <h1 style={{ zIndex: "998" }}>
      <Themed.TextDivider
        style={{ padding: "1rem", zIndex: "999" }}
        bgColor={data.color.background}
      >
        <h1>{data.Name}</h1>

        <ColoredMask maskName={data.design} color={data.color} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "1rem"
          }}
        >
          <Themed.TextDivider
            onClick={() => {
              send("CANCEL");
              console.log(current);
            }}
            style={{
              padding: "1rem",
              minWidth: "25vw",
              minHeight: "25vw",
              justifyContent: "center"
            }}
            bgColor="red"
          >
            Try Again
          </Themed.TextDivider>
          <Link to="characterAssign">
            <Themed.TextDivider
              onClick={() => {
                send("ACCEPT");
                console.log(current);
              }}
              style={{
                padding: "1rem",
                minWidth: "25vw",
                minHeight: "25vw",
                justifyContent: "center"
              }}
              bgColor="green"
            >
              Accept
            </Themed.TextDivider>
          </Link>
        </div>
      </Themed.TextDivider>
    </h1>
  );
};
