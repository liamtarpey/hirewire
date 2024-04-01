'use client';

import styled from 'styled-components';
import { NAV_FIXED_HEIGHT } from '../../nav/Nav';

export const StyledPageContainer = styled.div`
    ${({theme}) => `
        margin-top: ${NAV_FIXED_HEIGHT}px;
        min-height: calc(85vh - ${NAV_FIXED_HEIGHT}px);
    `}
`;
