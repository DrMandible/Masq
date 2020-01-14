import React from "react";
import { gossipConfirm } from "./gossipMachine";
import * as Styled from "../theme/styles";

export const ConfirmGossip = ({ current, send }) => {
  return (
    <Styled.TextDivider
      bgColor={
        current.context.data.NPCList[gossipConfirm.target].color.secondary
      }
    >
      <h1>Confirm</h1>
      <Styled.TextDivider
        bgColor={
          current.context.data.NPCList[gossipConfirm.target].color.background
        }
      >
        <h2>
          <table>
            <tbody>
              <tr>
                <th>Target:</th>
                <td>{gossipConfirm.target}</td>
              </tr>
              <tr>
                <th>Cost:</th>
                <td>{gossipConfirm.cost}</td>
              </tr>
            </tbody>
          </table>
        </h2>
      </Styled.TextDivider>
      <div>
        <Styled.StartButton
          style={{
            margin: "1rem",
            padding: "1rem",
            backgroundColor: "red"
          }}
          onClick={() => send("CANCEL")}
        >
          Cancel
        </Styled.StartButton>
        <Styled.StartButton
          style={{
            margin: "1rem",
            padding: "1rem",
            backgroundColor: "green"
          }}
          onClick={() => send("CONFIRM")}
        >
          Confirm
        </Styled.StartButton>
      </div>
    </Styled.TextDivider>
  );
};
