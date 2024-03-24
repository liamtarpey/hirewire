import React from 'react';

// Components
import { PageWrap } from '../../uikit';

// Theming
import { StyledHeader, StyledHeaderText } from './SEOHeaderStyled';

export default function SEOHeader() {
    return (
        <StyledHeader>
            <PageWrap>
                <StyledHeaderText>
                    Smart hires, happy companies.
                </StyledHeaderText>
            </PageWrap>
        </StyledHeader>
    );
}
