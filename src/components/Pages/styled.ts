import styled from "styled-components";
import { TextStyled } from "../Text/styled";
import { device } from "../../utils";

export const Title = styled(TextStyled)`
  font-family: Rouge Script;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  text-align: center;
`;

export const Page1Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const Page2Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: end;
  align-items: center;
`;

export const Page3Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: end;
  align-items: center;

  @media ${device.mobileS} {
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Page2Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #ffffffa8;

  ${TextStyled} {
    font-family: "Podkova", sans-serif;
  }

  @media ${device.mobileS} {
    margin: auto;
    padding: 30px;
  }

  @media ${device.tablet} {
    margin: 100px;
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 100px;
  }

  /* opacity: 0.5; */
`;

export const MapStyled = styled.iframe`
  @media ${device.mobileS} {
    width: 320px;
    height: 400px;
  }

  @media ${device.tablet} {
    width: 560px;
    height: 400px;
  }
`;
