import React from "react";
import { ButtonStyled } from "./styled";
import { IButton } from "./types";

export const Button: React.FC<IButton> = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);
