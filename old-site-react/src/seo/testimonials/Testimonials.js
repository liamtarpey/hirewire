import React from "react";
import PageWrap from "../../components/page-wrap/PageWrap";
import Testimonial from "../../components/testimonial/Testimonial";
import Flex from "../../components/flex/Flex";

const TESTIMONIALS_DATA = [
  {
    name: "John Doe",
    quote: "Jane was amazing, she staffed my company in no time!",
  },
  {
    name: "Barbara Streisand",
    quote: "I would recommend Hirewire to anyone!",
  },
];

export default function Testimonials() {
  return (
    <PageWrap>
      <Flex align="center" justify="stretch">
        {(TESTIMONIALS_DATA || []).map(({ name, quote }) => (
          <Testimonial name={name} quote={quote} />
        ))}
      </Flex>
    </PageWrap>
  );
}
