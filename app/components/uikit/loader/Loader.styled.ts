'use client';

import styled, {keyframes, css} from 'styled-components';

const spinnerAnimation = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`;

const animation = css(
    (['1.2s','cubic-bezier(0.5, 0, 0.5, 1)', 'infinite'] as any) as TemplateStringsArray,
    spinnerAnimation
);

export const StyledLoader = styled.span<{
    standalone: boolean;
}>`
    ${({theme: {colors}, standalone}) => `
        position: relative;
        display: ${standalone ? 'block' : 'inline-block'};
        margin: ${standalone ? '1.25rem auto' : '0'};
        width: 1.5rem;
        height: 1.5rem;

        span {
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 0.188rem solid transparent;
            border-radius: 50%;
            border-color: ${colors.purple} transparent transparent transparent;
            
            animation: ${animation};

            &:nth-child(1) {
                animation-delay: -0.45s;
            }

            &:nth-child(2) {
                animation-delay: -0.3s;
            }

            &:nth-child(3) {
                animation-delay: -0.15s;
            }
        }

        @keyframes spinnerAnimation{
            0% { transform: rotate(0deg) }
            100% { transform: rotate(360deg) }
        };
    `}

`;
