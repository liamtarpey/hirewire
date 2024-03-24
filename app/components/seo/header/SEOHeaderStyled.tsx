import styled from 'styled-components';

export const StyledHeader = styled.div`
    ${({ theme: { colors } }) => `
    background: ${colors.white};
    margin-top: 52px;
  `}
`;

export const StyledHeaderText = styled.h1`
    ${({ theme: { colors, space } }) => `
    padding: 100px 0;
    color: ${colors.black};
    line-height: 60px;
  `}
`;