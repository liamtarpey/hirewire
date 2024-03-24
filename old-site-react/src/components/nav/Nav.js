import React from "react";

// Components
import PageWrap from "../page-wrap/PageWrap";
import Button from "../button/Button";
import Flex from "../flex/Flex";

// Styled
import { StyledNav, StyledLogo } from "./Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <PageWrap>
        <Flex align="center" justify="center">
          <StyledLogo>
            <Flex align="center" justify="start">
              <img src="/hirewire-logo.png" alt="Hirewire Logo " />
              Hirewire
            </Flex>
          </StyledLogo>
          <div>
            <Button>Get in touch</Button>
          </div>
        </Flex>
      </PageWrap>
    </StyledNav>
  );
}
