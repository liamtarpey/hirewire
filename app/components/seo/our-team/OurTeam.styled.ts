'use client';

import styled from "styled-components";

export const StyledPersona = styled.div`
  ${({ theme: { colors } }) => `
    padding-top: 30px;
    img {
      display: block;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 12px;
      border: 5px solid ${colors.purple};
      width: 140px;
      height: 140px;
    }
    h2 {
      margin: 0 0 4px 0;
    }
    p {
      margin: 0;
    }
    `}
`;
