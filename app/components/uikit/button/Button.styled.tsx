'use client';

import styled from 'styled-components';

export const SHARED_STYLES = `
    background-color: transparent;
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0;
    text-transform: uppercase;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 3px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        text-decoration: none;
        box-shadow: 0 0 4px rgba(11, 11, 11, 0.1);
        transform: translate3d(1px, -1px, 0);
    }
`;

export const StyledA = styled.a`
    display: inline-block;
    ${SHARED_STYLES};
    ${({ theme: { colors } }) => `
      background-color: ${colors.purple};
      color: ${colors.white};
    `}
`;

export const StyledButton = styled.button`
    ${SHARED_STYLES};
    ${({ theme: { colors } }) => `
      background-color: ${colors.purple};
      color: ${colors.white};
    `}
`;
