import React from "react";
import { Design } from "./design";
import { Colors } from "./colors";
import { useMachine } from "@xstate/react";
import { homeMachine } from "./homeMachine";
import { PlayerMask } from "../assets";
import { Link } from "@reach/router";

import "./styles.css";

import * as Styled from "./styled";
import * as Themed from "../characterAssign/styled";

export const HomeScreen = () => {
  const [current, send] = useMachine(homeMachine);
  const data = current.context.data.character;

  React.useEffect(() => {
    console.log(
      "[Home.js] homeMachine current.value:",
      current.value,
      "\n",
      "homeMachine current.context.data.character:",
      data
    );
  }, [current, data]);

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
              send("DESIGN");
            }}
          >
            <Styled.StartButton>Play</Styled.StartButton>
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
          <h1 style={{ zIndex: "998" }}>
            <Themed.TextDivider
              style={{ padding: "1rem", zIndex: "999" }}
              bgColor="rgba(153, 116, 3, 1)"
            >
              <PlayerMask />
              Confirm
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
                  style={{ padding: "1rem" }}
                  bgColor="red"
                >
                  Cancel
                </Themed.TextDivider>
                <Link to="characterAssign">
                  <Themed.TextDivider
                    onClick={() => {
                      send("ACCEPT");
                      console.log(current);
                    }}
                    style={{ padding: "1rem" }}
                    bgColor="green"
                  >
                    Accept
                  </Themed.TextDivider>
                </Link>
              </div>
            </Themed.TextDivider>
          </h1>
        )}
        {current.matches("complete") && (
          <h1
            style={{
              zIndex: "201"
            }}
          >
            <PlayerMask />
            <Link to="characterAssign">Begin</Link>
          </h1>
        )}
      </Styled.BackgroundWrapper>
    </>
  );
};
