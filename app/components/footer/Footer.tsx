'use client';

import React from 'react';
import { StyledFooter } from './Footer.styled';
import { Button, PageWrap, Flex } from '../uikit/';

export default function Footer() {
    return (
        <StyledFooter>
            <PageWrap>
                <Flex $align="center" $justify="space-between">
                    <p>&copy; {new Date().getFullYear()} - Hirewire Ltd</p>
                    <Button href="mailto:info@hirewire.uk">Get in touch</Button>
                </Flex>
            </PageWrap>
        </StyledFooter>
    );
}
