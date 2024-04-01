'use client';

import styled from 'styled-components';

export const StyledHeader = styled.div`
    ${({ theme: { colors } }) => `
        background: ${colors.purple};
    `}
`;

export const StyledHeaderText = styled.div`
    ${({ theme: { colors, space } }) => `
        padding: 100px 0;
        color: ${colors.white};
      

        h1 {
            line-height: 60px;
            margin: 0;
            font-size: 40px;
        }

        p {
            margin: 0;
        }
  `}
`;
