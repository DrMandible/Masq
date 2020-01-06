import styled from "styled-components";

export const NPCWrapper = styled.div`
  z-index: 99999;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-items: space-around;
  justify-content: space-around;
  width: 90vw;

  /* padding: 0.75rem; */
`;

export const Icon = styled.svg`
  width: 3rem;
  height: 3rem;
  --sparkle1: ${props => props.leftEye};
  --sparkle2: ${props => props.sparkle2};
  --left-eye-shadow: ${props => props.leftEyeShadow};
  --left-eye: ${props => props.leftEye};
  --right-eye-shadow: ${props => props.rightEyeShadow};
  --right-eye: ${props => props.rightEye};
`;
export const IconWrapper = styled.div`
  height: 3rem;
  margin: 0.5rem;
`;
