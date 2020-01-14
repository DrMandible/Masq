import styled, { keyframes } from "styled-components";

const slideInTopStraight = keyframes`
  0% {
    -webkit-transform: translateY(-100vh);
          transform: translateY(-100vh);
  opacity: 0;
}
100% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
  opacity: 1;
}
  }
`;

const slideInTopRight = keyframes`
0% {
  -webkit-transform: translateY(90vh) rotate(-90deg) scale(0.1);
          transform: translateY(90vh) rotate(-90deg) scale(0.1);
  opacity: 0;
}
50% {
  -webkit-transform: scale(0.5) rotate(-10deg);
          transform: scale(0.5) rotate(-10deg);
}
80% {
  -webkit-transform: scale(1.1) rotate(5deg);
          transform: scale(1.1) rotate(5deg);
}
100% {
  -webkit-transform: translateY(0) rotate(0deg) scale(1);
          transform: translateY(0) rotate(0deg) scale(1);
  opacity: 1;
}
`;

export const RandomButton = styled.button`
  background: transparent;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  position: fixed;
  bottom: 0.3rem;
  right: 3rem;
  z-index: 1;
  :focus {
    border: none;
  }
`;

export const HomeButton = styled.button`
  background: transparent;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  position: fixed;
  bottom: 0.3rem;
  left: 2rem;
  z-index: 1;
  :focus {
    border: none;
  }
`;

export const Footer = styled.div`
  padding: 0.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100vw;
  border-top: 1px solid black;
  display: flex;
  background-color: rgba(50, 50, 50, 0.9);
  color: white;
  align-items: center;
  justify-content: space-around;
`;

export const FooterItem = styled.div`
  -webkit-animation: ${slideInTopStraight} 1s
    cubic-bezier(0.075, 0.82, 0.165, 1) both;
  animation: ${slideInTopStraight} 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FooterIconWrapper = styled.div`
  height: 1.5rem;
  width: 1.5rem;
`;

export const TextWrapper = styled.div`
  margin: 0rem;
  padding: 0rem;
  width: 100%;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-shadow: rgba(255, 255, 255, 0.8) 0 0px 20px;
  pointer-events: none;
`;

export const TextDivider = styled.div`
  -webkit-animation: ${slideInTopRight} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)
    both;
  animation: ${slideInTopRight} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) both;
  animation-delay: 0.1s;
  pointer-events: auto;
  margin: 0.2rem;
  padding: 0.1rem;
  width: 95%;
  border: 1px solid black;
  border-radius: 15px;
  background: black;
  background: ${props => props.bgColor};
  color: white;
  overflow: visible;
  background-image: url("https://i.imgur.com/8XtMhk5.png");
  -webkit-box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3),
    0px 0px 10px 3px #000000;
  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3),
    0px 0px 10px 3px #000000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  th {
    text-align: right;
    padding: 1rem;
  }
  td {
    text-align: left;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .outerCircleButton {
    min-width: 4rem;
    height: 4rem;
    justify-content: center;
    border-radius: 50%;
    padding: 0.2rem;
    margin: 0.2rem;
    background-image: url("https://i.imgur.com/17x3OSQ.png");
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-animation: ${slideInTopRight} 1s cubic-bezier(0.075, 0.82, 0.165, 1)
    both;
  animation: ${slideInTopRight} 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
`;

export const CharacterTitle = styled.div`
  padding: 0.5rem 0 0.2rem 0;
  font-size: 1.3em;
  font-weight: bold;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  z-index: 999;
`;

export const StartButton = styled.button`
  /* font-family: "Source Serif Pro"; */
  z-index: 200;
  color: white;
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  background-color: transparent;
  border-radius: 15px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const ScreenWrapper = styled.div`
  -webkit-box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 1);
  box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 1);
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: black;
  background: ${props => props.bgColor};
  background-image: url("https://i.imgur.com/17x3OSQ.png");
`;

export const BackgroundWrapper = styled.div`
  background: ${props => props.bgColor};
  /* height: 100vh; */
  width: 80vw;
  -webkit-box-shadow: 0px 0px 20px 10px #000000;
  box-shadow: 0px 0px 20px 10px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  border-radius: 0 0 10px 10px;
  background-image: url("https://i.imgur.com/8XtMhk5.png");
`;

export const Mask = styled.div`
  z-index: 100;
  -webkit-mask-size: 80vw 80vw;
  mask-size: 80vw 80vw;
  -webkit-mask-image: url("https://i.imgur.com/pLZ9bDI.png");
  mask-image: url("https://i.imgur.com/pLZ9bDI.png");
  transform: rotate(90deg);
  overflow: visible;
`;

export const BackgroundSVGWrapper = styled.div`
  -webkit-animation: ${slideInTopRight} 1s cubic-bezier(0.075, 0.82, 0.165, 1)
    both;
  animation: ${slideInTopRight} 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
  animation-delay: 0.3s;
`;

export const BackgroundSVG = styled.svg`
  margin-top: 5vw;
  width: 40vw;
  height: 40vw;
  --sparkle1: ${props => props.leftEye};
  --sparkle2: ${props => props.sparkle2};
  --left-eye-shadow: ${props => props.leftEyeShadow};
  --left-eye: ${props => props.leftEye};
  --right-eye-shadow: ${props => props.rightEyeShadow};
  --right-eye: ${props => props.rightEye};
`;
