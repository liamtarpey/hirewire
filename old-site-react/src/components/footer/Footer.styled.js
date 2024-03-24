import styled from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme: { colors } }) => `
        background-color: ${colors.white};
        color: ${colors.darkgrey};
    `}
`;
