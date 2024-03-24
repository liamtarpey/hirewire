import React from "react";
import PageWrap from "../../components/page-wrap/PageWrap";
import Flex from "../../components/flex/Flex";
import { StyledPersona } from "./OurTeam.styled";

const TEAM_MEMBERS = [
  {
    name: "Jane Sumbilla",
    position: "Managing Director",
  },
  {
    name: "Liam Tarpey",
    position: "Technical consultant",
  },
];

export default function OurTeam() {
  return (
    <PageWrap>
      <h2>Our Team</h2>
      <p>
        For exceptional tech recruitment, trust in Hirewire. Whether it's
        permanent or interim staff, we seamlessly oversee the entire process,
        from crafting job descriptions to streamlining onboarding. Our
        experienced team excels across diverse industries and sectors,
        consistently identifying the ideal candidates. With Hirewire at your
        side, you can devote your full attention to business growth, knowing
        your recruitment needs are expertly managed.
      </p>
      <Flex align="center" justify="space-around">
        {(TEAM_MEMBERS || []).map(({ name, position }) => (
          <StyledPersona>
            <img src="https://placedog.net/200/200" alt={name} />
            <h2>{name}</h2>
            <p>{position}</p>
          </StyledPersona>
        ))}
      </Flex>
    </PageWrap>
  );
}
