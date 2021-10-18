import styled, { keyframes } from "styled-components";

export const LoadPageStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderStyled = styled.div`
  background: rgb(221, 214, 243);
  background: linear-gradient(
    90deg,
    rgba(221, 214, 243, 1) 0%,
    rgba(250, 172, 168, 1) 100%
  );
  overflow: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 48px;
    height: 48px;
    margin: 8px;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
export const LoaderText = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 200;
  margin-top: -16px;
`;
