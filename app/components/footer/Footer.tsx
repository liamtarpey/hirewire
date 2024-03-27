'use client';

import React from 'react';
import Link from 'next/link';
import { StyledFooter, StyledFooterText } from './Footer.styled';
import { PageWrap, Flex } from '../uikit/';
import ContactUsCta from '../contact-us-cta/ContactUsCta';

export default function Footer() {
    return (
        <StyledFooter>
            <PageWrap>
                <Flex $align="center" $justify="space-between">
                    <StyledFooterText>
                        <p>
                            &copy; {new Date().getFullYear()} - Hirewire Ltd.
                            All rights reserved.
                        </p>
                        <p>Registered in England. Company No: 15087755</p>
                        {/* <p>Registered office: 48 Gaumont Tower, London, E83BQ, UK</p> */}
                        {/* <p>VAT No: </p> */}
                    </StyledFooterText>
                    <ContactUsCta />
                </Flex>
                {/* <Flex>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/cookie-policy">Cookie Policy</Link>
                </Flex> */}
            </PageWrap>
        </StyledFooter>
    );
}
