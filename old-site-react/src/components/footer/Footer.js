import React from "react";
import { StyledFooter } from "./Footer.styled";
import PageWrap from "../page-wrap/PageWrap";

export default function Footer() {
  return (
    <StyledFooter>
      <PageWrap>
        <p>&copy; {new Date().getFullYear()} - Hirewire Ltd</p>
      </PageWrap>
    </StyledFooter>
  );
}
