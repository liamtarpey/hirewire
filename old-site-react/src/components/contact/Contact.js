import React from "react";
import PageWrap from "../../components/page-wrap/PageWrap";
import Button from "../../components/button/Button";
import { StyledContact } from "./Contact.styled";

export default function Contact() {
  return (
    <PageWrap>
      <StyledContact>
        <Button>Get in touch</Button>
      </StyledContact>
    </PageWrap>
  );
}
