import styled from "styled-components";
import { IText } from "./types";

export const TextStyled = styled.span<IText>`
  ${({ color }) => color && `color: ${color};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ paddingX }) =>
    paddingX &&
    `
    padding-top: ${paddingX};
    padding-bottom: ${paddingX};
  `}
  ${({ paddingY }) =>
    paddingY &&
    `
    padding-left: ${paddingY};
    padding-right: ${paddingY};
  `}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
`;
