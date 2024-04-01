'use client';

import styled from "styled-components";
import { Flex } from '../uikit';


export const StyledFooter = styled.footer`
  ${({ theme: { colors } }) => `
        background-color: ${colors.lightgrey};
        color: ${colors.darkgrey};
    `}
`;

export const StyledFooterLogo = styled.div`
    margin: 10px 0 20px 0;
`;

export const StyledFooterLinks = styled(Flex)`
    @media(max-width:700px) {
        display: block;
    }
    
    h3 {
        margin: 5px 0 10px 0;
    }
`;

export const StyledFooterBottom = styled(Flex)`
    ${({theme: {colors}}) => `
        border-top: 1px solid ${colors.midgrey};
        margin-top: 10px;
        @media(max-width:700px) {
            display: block;
        }
    `}
`;

export const StyledFooterUL = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 0 5px 0;
`;

export const StyledFooterText = styled.div`
    ${({theme: {fontSizes}}) => `
        font-size: ${fontSizes.sm};
    `}
`;
