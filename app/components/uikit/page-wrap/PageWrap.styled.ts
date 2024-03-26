import styled from 'styled-components';
import {NAV_FIXED_HEIGHT} from '../../nav/Nav';

const getLimit = (size: string) => {
    if (size === 'sm') {
        return '720px';
    } else if (size === 'md') {
        return '840px';
    } else {
        return '1200px';
    }
}

export const StyledPageWrap = styled.div<{$limit: 'sm' | 'md' | 'lg' | undefined;}>`
    ${({$limit, theme: {space}}) => `
        padding: ${space.md};
        max-width: ${$limit ? getLimit($limit) : 'initial'};
        margin: auto;
    `}
`;
