import React from "react";

// Components
import PageWrap from "../../components/page-wrap/PageWrap";
import TextAnimation from "../../components/text-animation/TextAnimation";

// Theming
import { StyledHeader, StyledHeaderText } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <PageWrap>
        <StyledHeaderText>
          {/* Elevating Tech careers, one placement at a time. */}
          Smart hires, happy companies.
        </StyledHeaderText>
        {/* <TextAnimation text="Let us help you" /> */}
      </PageWrap>
    </StyledHeader>
  );
}
