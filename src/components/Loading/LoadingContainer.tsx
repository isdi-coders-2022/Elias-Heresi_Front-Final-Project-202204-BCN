import styled from "styled-components";

const LoadingContainer = styled.section`
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
