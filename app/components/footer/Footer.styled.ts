import styled from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme: { colors } }) => `
        background-color: ${colors.lightgrey};
        color: ${colors.darkgrey};
    `}
`;
