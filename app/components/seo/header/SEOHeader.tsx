import React from 'react';

// Components
import { PageWrap } from '../../uikit';

// Theming
import { StyledHeader, StyledHeaderText } from './SEOHeaderStyled';

export default function SEOHeader() {
    return (
        <StyledHeader>
            <PageWrap $limit="md">
                <StyledHeaderText>
                    Seamless Tech-Talent Pairing.
                </StyledHeaderText>
            </PageWrap>
        </StyledHeader>
    );
}
