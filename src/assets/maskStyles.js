import React from "react";
import styled from "styled-components";
import * as Masks from "./index";

export const MaskIcon = styled.div`
  height: 7rem;
  width: 6rem;
`;
export const SVGButtonWrapper = styled.svg`
  height: 6rem;
  width: 6rem;
  --primary: ${props => props.primary};
  --secondary: ${props => props.secondary};
`;
