import React from "react";
import * as Styled from "./styled";
import { secretIDs } from "./identities";
import * as assign from "./assign";

export const SecretIdentity = props => {
  const SECRET_ID = assign.secretID();
  const SECRET_ID_PROPERTIES = secretIDs[SECRET_ID];
  let palette = props.palette;
  let secretReveal = props.secretReveal;
  return (
    <Styled.TextDivider bgColor={palette.primary} textColor="black">
      {secretReveal ? (
        <>
          <Styled.TextDivider bgColor="black">
            <p>
              <b>Hide Secret identity</b>
            </p>
          </Styled.TextDivider>
          <Styled.TextDivider bgColor={palette.background}>
            <Styled.CharacterTitle>{SECRET_ID}</Styled.CharacterTitle>
            <div>You are {SECRET_ID_PROPERTIES.bucket}</div>
          </Styled.TextDivider>
          <Styled.TextDivider bgColor={palette.background}>
            <table>
              <tbody>
                <tr>
                  <th>Goal: </th>
                  <td>{SECRET_ID_PROPERTIES.goal.description}</td>
                </tr>
                <tr>
                  <th>Power:</th>
                  <td>{SECRET_ID_PROPERTIES.power.description}</td>
                </tr>
              </tbody>
            </table>
          </Styled.TextDivider>
        </>
      ) : (
        <Styled.TextDivider bgColor={palette.background}>
          <p>
            <b>Secret identity</b>
          </p>
        </Styled.TextDivider>
      )}
    </Styled.TextDivider>
  );
};
