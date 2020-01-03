import styled, { keyframes } from "styled-components";
import * as Animation from "../animation.js";

const flipVerticalFwd = keyframes`
    0% {
      -webkit-transform: translateZ(160px) rotateY(180deg);
              transform: translateZ(160px) rotateY(180deg);
              -webkit-opacity: 0;
              opactiy: 0;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
              transform: translateZ(0) rotateY(0);
              -webkit-opacity: 100;
              opacity: 100;
    }
  }
  `;

const vibrate = keyframes`
    0% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-1px, 1px);
              transform: translate(-1px, 1px);
    }
    40% {
      -webkit-transform: translate(-1px, -1px);
              transform: translate(-1px, -1px);
    }
    60% {
      -webkit-transform: translate(1px, 1px);
              transform: translate(1px, 1px);
    }
    80% {
      -webkit-transform: translate(1px, -1px);
              transform: translate(1px, -1px);
    }
    100% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
  `;

const shake = keyframes`
      0%,
    100% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
      -webkit-transform-origin: 50% 0;
              transform-origin: 50% 0;
    }
    10% {
      -webkit-transform: rotate(2deg);
              transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      -webkit-transform: rotate(-4deg);
              transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      -webkit-transform: rotate(4deg);
              transform: rotate(4deg);
    }
    80% {
      -webkit-transform: rotate(-2deg);
              transform: rotate(-2deg);
    }
    90% {
      -webkit-transform: rotate(2deg);
              transform: rotate(2deg);
    }
  `;

const pulse = keyframes`
  0% {
    opacity: 0.4
    transform: rotate(0deg) scale(1);
  }
  50% {
    opacity: 0.8
    transform: rotate(180deg) scale(1.5);
    
  }
  100% {
    opacity: 0.4
    transform: rotate(360deg) scale(1);
  }
`;

export const BackgroundEffectsWrapper = styled.div`
  z-index: -101;
  position: absolute;
  left: -29vh;
  top: -15vh;
  height: 150vh;
  width: 150vh;
  overflow: hidden !important;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari prior 9.0 */
  transform: rotate(45deg); /* Standard syntax */
  pointer-events: none;
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.9),
    rgba(255, 255, 255, 0.5)
  );
`;

export const Flare = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("https://i.imgur.com/xihQMKz.jpg");
  background-size: cover;
  overflow: hidden !important;
  mix-blend-mode: color-dodge;
  animation: ${pulse} 10s linear infinite;
`;

export const BackgroundWrapper = styled.div`
  z-index: 0;
  overflow: hidden;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  input {
    margin: 1rem;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 5px;
    background-color: rgba(125, 0, 245, 0.6);
    color: black;
  }
`;

export const PopUp = styled.div`
  z-index: 99999;
  width: 50vw;
  height: 6rem;
  position: absolute;
  top: 33%;
  animation: ${Animation.slideInTopRight};
  background-color: rgba(125, 0, 245, 0.6);
`;

export const ButtonWrapper = styled.div`
  z-index: 100;
  width: 70vw;
  height: 10vh;
  :hover {
    -webkit-animation: ${vibrate} 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      infinite;
    animation: ${vibrate} 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  }
`;

export const StartButton = styled.button`
  font-family: "Source Serif Pro";
  z-index: 100;
  color: white;
  width: 70vw;
  height: 10vh;
  background-color: rgba(125, 0, 245, 0.6);
  border-radius: 15px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const BackgroundImage = styled.div`
  z-index: -900;
  position: absolute;
  height: 100vh;
  width: 100vw;
  /* background-image: url(https://i.imgur.com/kHY9lRg.jpg); */
  background-size: cover;
  opacity: 1;
`;

export const MasqTitle = styled.div`
  z-index: 100;
  font-family: "Source Serif Pro";
  color: rgba(0, 0, 0, 1);
  font-size: 10rem;
  margin: -1.5rem;
  padding: -30rem;
  -webkit-animation: ${flipVerticalFwd} 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: ${flipVerticalFwd} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation-delay: ${props => props.delay};
`;

export const TitleArticle = styled.div`
  z-index: 100;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  margin-top: -1.5rem;
  margin-bottom: -2rem;
  padding: -30rem;
  -webkit-animation: ${flipVerticalFwd} 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: ${flipVerticalFwd} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation-delay: ${props => props.delay};
`;

export const Title = styled.div`
  z-index: 100;
  font-family: "Source Serif Pro";
  color: rgba(0, 0, 0, 1);
  font-size: 3.5rem;
  margin: -1.5rem;
  padding: -30rem;
  -webkit-animation: ${flipVerticalFwd} 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: ${flipVerticalFwd} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation-delay: ${props => props.delay};
`;
