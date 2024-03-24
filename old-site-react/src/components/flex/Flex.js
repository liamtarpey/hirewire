import React from "react";
import { StyledFlex } from "./Flex.styled";

export default function Flex({ children, ...props }) {
  return <StyledFlex {...props}>{children}</StyledFlex>;
}
