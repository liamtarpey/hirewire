'use client';

import styled from 'styled-components';
import { Flex } from '../../uikit';
import {SHARED_STYLES} from '../../uikit/button/Button.styled';

export const StyledJobOpenings = styled(Flex)`
    ${({theme: {colors, fontSizes}}) => `
        .bzOpeningsCategoryList,
        .bzOpeningsList {
            display: inherit;
            flex-wrap: inherit;
            align-items: inherit;
            gap: inherit;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .bzOpening,
        .bzOpeningsCategory {
            position: relative;
            border: 1px solid ${colors.midgrey};
            border-radius: 4px;
            text-align: left;
            width: 250px;
            color: ${colors.black};
            text-decoration: none;

            h2 {
                padding-top: 60px;
                margin: 0 0 12px 0;
                font-size: ${fontSizes.md};
                color: ${colors.black};
            }

            .bzMeta {
                color: ${colors.black};
                padding-left: 20px;
            }

            a {
                display: block;
                padding: 20px;

                &:hover {
                    text-decoration: none;
                }

                &:before {
                    content: '';
                    position: absolute;
                    background-image: url('/logos/hirewire-logo-square.png');
                    background-size: 40px 40px;
                    top: 20px;
                    left: 20px;
                    width: 40px;
                    height: 40px;
                }
            }

            &:hover {
                text-decoration: none;
                box-shadow: 1px 8px 20px ${colors.midgrey};
            }
        }
        .bzButtonApply {
            display: none;
            ${SHARED_STYLES};
            background-color: ${colors.purple};
            color: ${colors.white};
        }

        @media(max-width:700px) {
            gap: 0;

            .bzOpeningsCategoryList,
            .bzOpeningsList {
                display: block;
                width: 100%;
            }
            .bzOpening {
                width: inherit;
                margin-bottom: 20px;
            }
        }
    `}   
`;
