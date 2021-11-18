import styled from "styled-components";
import { IButton } from "./types";

const DEFAULT_BCKG = `linear-gradient(135deg, #094809 40%, #fc894d)`
const DEFAULT_COLOR = `white`;
const DEFAULT_BORDER = `none`;
const DEFAULT_RADIUS = `10px`;
const PADDING_TOP = `10px`;
const PADDING_BOTTOM = `10px`;
const PADDING_LEFT = `30px`;
const PADDING_RIGHT = `30px`;
const DEFAULT_FONT_SIZE = `20px`;

/** Hover */
const DEFAULT_BCKG_HOVER = `linear-gradient(135deg, #094809 40%, #f3b697)`

export const ButtonStyled = styled.button<IButton>`
  border: ${DEFAULT_BORDER};
  border-radius: ${DEFAULT_RADIUS};
  background-image: ${DEFAULT_BCKG};
  cursor: pointer;

  ${({ color = DEFAULT_COLOR }) => color && `color: ${color};`}
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
  ${({ paddingTop = PADDING_TOP }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ paddingBottom = PADDING_BOTTOM }) => paddingBottom && `padding-bottom: ${paddingBottom};`}
  ${({ paddingLeft = PADDING_LEFT }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ paddingRight = PADDING_RIGHT }) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ fontSize = DEFAULT_FONT_SIZE }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}

  &:hover {
    background-image: ${DEFAULT_BCKG_HOVER};
  }
`;
