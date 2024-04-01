'use client';

import styled from 'styled-components';

const getLimit = (size: string) => {
    if (size === 'sm') {
        return '960px';
    } else if (size === 'md') {
        return '1200px';
    } else {
        return '1600px';
    }
}

export const StyledPageWrap = styled.div<{$limit: 'sm' | 'md' | 'lg' | undefined;}>`
    ${({$limit, theme: {space}}) => `
        padding: ${space.md};
        max-width: ${$limit ? getLimit($limit) : 'initial'};
        margin: auto;
    `}
`;
