import React from "react";
import { TextStyled } from "./styled";
import { IText } from "./types";

export const Text: React.FC<IText> = ({ children, ...props }) => (
  <TextStyled {...props}>{children}</TextStyled>
);
