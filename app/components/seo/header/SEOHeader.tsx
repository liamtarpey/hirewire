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
                    <h1>Seamless Tech-Talent Pairing.</h1>
                    <p>Customized Placements, Tailored for Success</p>
                </StyledHeaderText>
            </PageWrap>
        </StyledHeader>
    );
}
