import styled, { keyframes } from "styled-components";

export const slideInTopRight = keyframes`
0% {
  -webkit-transform: translateY(-100vh);
          transform: translateY(-100vh) rotate(-90deg);
  opacity: 0;
}
100% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
  opacity: 1;
}
`;
