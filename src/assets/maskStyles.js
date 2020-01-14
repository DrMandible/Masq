import React from "react";
import styled from "styled-components";
import * as Masks from "./index";

export const MaskIcon = styled.div`
  height: 7rem;
  height: ${props => props.height};
  width: 6rem;
  width: ${props => props.width};
`;
export const SVGButtonWrapper = styled.svg`
  height: 100%;
  width: 100%;
  --primary: ${props => props.primary};
  --secondary: ${props => props.secondary};
`;
