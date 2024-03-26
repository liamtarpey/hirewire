import styled from 'styled-components';

export const StyledHeader = styled.div`
    ${({ theme: { colors } }) => `
    background: ${colors.purple};
  `}
`;

export const StyledHeaderText = styled.h1`
    ${({ theme: { colors, space } }) => `
    padding: 100px 0;
    color: ${colors.white};
    line-height: 60px;
  `}
`;
