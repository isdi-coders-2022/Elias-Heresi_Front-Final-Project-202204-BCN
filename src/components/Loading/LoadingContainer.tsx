import styled from "styled-components";

const LoadingContainer = styled.section`
  z-index: 0;
  background-color: rgb(111, 219, 135, 0.4);
  height: 100vh;
  width: 100%;
  position: absolute;
  div {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
    &.loader__text {
      display: none;
      font-size: 0.1px;
    }
  }

  #container {
    width: 200px;
    height: 200px;
  }

  @keyframes animation {
    0% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -105;
    }
    50% {
      stroke-dasharray: 80 10;
      stroke-dashoffset: -160;
    }
    100% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -300;
    }
  }

  #spinner {
    transform-origin: center;
    animation-name: animation;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
  }
`;

export default LoadingContainer;
