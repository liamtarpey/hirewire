'use client';

import styled from "styled-components";
import { Flex } from '../uikit';


export const StyledFooter = styled.footer`
  ${({ theme: { colors } }) => `
        background-color: ${colors.lightgrey};
        color: ${colors.darkgrey};
    `}
`;

export const StyledFooterBottom = styled(Flex)`
    @media(max-width:700px) {
        display: block;
    }`
;

export const StyledFooterText = styled.div`
    ${({theme: {fontSizes}}) => `
        font-size: ${fontSizes.sm};
    `}
`;
