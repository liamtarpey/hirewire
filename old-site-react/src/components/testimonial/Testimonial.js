import React from "react";
import { StyledTestimonial } from "./Testimonial.styled";

export default function Testimonial({ quote, name }) {
  return (
    <StyledTestimonial>
      <strong>{quote}</strong>
      <div>
        <i>--{name}</i>
      </div>
    </StyledTestimonial>
  );
}
