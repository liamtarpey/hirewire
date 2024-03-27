import styled from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme: { colors } }) => `
        background-color: ${colors.lightgrey};
        color: ${colors.darkgrey};
    `}
`;

export const StyledFooterText = styled.div`
    ${({theme: {fontSizes}}) => `
        font-size: ${fontSizes.sm};
    `}
`;
