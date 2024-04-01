'use client';

import styled from 'styled-components';
import { Flex } from '../../uikit';

export const StyledJobOpenings = styled(Flex)`
    @media(max-width:700px) {
        display: block;
        a {
            display: block;
            width: 100%;
            margin-bottom: 12px;

            img {
                display: block;
            }
        }
        
    }
`;
