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

const spin = keyframes`
  0% {
    opacity: 0.1
    transform: rotate(0deg) scale(1);
  }
  50% {
    opacity: 0.3
    transform: rotate(180deg) scale(1.5);
    
  }
  100% {
    opacity: 0.1
    transform: rotate(360deg) scale(1);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.4
  }
  50% {
    opacity: 0.8
    
  }
  100% {
    opacity: 0.4
  }
`;

export const Pulsing = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* pointer-events: none; */
  background: red;
  animation: ${pulse};
`;

export const BackgroundEffectsWrapper = styled.div`
  z-index: 101;
  position: absolute;
  left: -25vh;
  top: -25vh;
  height: 150vh;
  width: 150vh;
  overflow: hidden !important;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(255, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 1) 100%
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
  animation: ${spin} 10s linear infinite;
  z-index: -1;
`;

export const BackgroundWrapper = styled.div`
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  background: black;
  overflow: hidden;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: ${pulse};
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
  margin: 0;
  padding: 0;
  z-index: 99999;
  width: 90vw;
  position: absolute;
  bottom: 15%;
  left: 5vw;
  animation: ${Animation.slideInTopRight};
`;

export const PopUpContent = styled.div`
  margin: 0rem;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  h1 {
    font-size: 3rem;
    padding: 0.5rem;
  }
`;

export const SVGButtonWrapper = styled.svg`
  height: 3rem;
  width: 3rem;
`;

export const StartButton = styled.button`
  /* font-family: "Source Serif Pro"; */
  z-index: 200;
  color: white;
  width: 100%;
  background-color: transparent;
  border-radius: 15px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const MasqTitle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* background: red; */
  width: 100%;
  align-self: center;
  z-index: 200;
  color: rgba(0, 0, 0, 1);
  font-size: 10rem;
  /* margin: -1.5rem; */
  /* padding: -30rem; */
  -webkit-animation: ${flipVerticalFwd} 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: ${flipVerticalFwd} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation-delay: ${props => props.delay};
`;
