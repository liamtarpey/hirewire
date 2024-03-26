'use client';

import React from 'react';
import Link from 'next/link';
import { StyledFooter } from './Footer.styled';
import { PageWrap, Flex } from '../uikit/';
import ContactUsCta from '../contact-us-cta/ContactUsCta';

export default function Footer() {
    return (
        <StyledFooter>
            <PageWrap>
                <Flex $align="center" $justify="space-between">
                    <p>&copy; {new Date().getFullYear()} - Hirewire Ltd</p>
                    <ContactUsCta />
                </Flex>
                {/* <Flex>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </Flex> */}
            </PageWrap>
        </StyledFooter>
    );
}
