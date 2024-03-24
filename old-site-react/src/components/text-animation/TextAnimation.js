import React from "react";
import { StyledTextAnimation } from "./TextAnimation.styled";

// https://codepen.io/rachsmith/pen/BNKJme
// https://codepen.io/ClaireLarsen/pen/XmVyVX

export default function TextAnimation({ text }) {
  return (
    <StyledTextAnimation viewBox="0 0 960 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">
          &nbsp;--{text}--&nbsp;
        </text>
      </symbol>

      <g class="g-ants">
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
      </g>
    </StyledTextAnimation>
  );
}
