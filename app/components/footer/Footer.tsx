import React from 'react';
import {
    StyledFooter,
    StyledFooterBottom,
    StyledFooterText,
} from './Footer.styled';
import { PageWrap, Flex } from '../uikit/';
import ContactUsCta from '../contact-us-cta/ContactUsCta';
import Link from 'next/link';

export default function Footer() {
    return (
        <StyledFooter>
            <PageWrap $limit="md">
                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li>
                            <Link href="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-of-service">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/cookie-policy">Cookie Policy</Link>
                        </li>
                        <li>
                            <Link href="/gdpr-compliance-statement">
                                GDPR Compliance Statement
                            </Link>
                        </li>
                        <li>
                            <Link href="/disclaimer">Disclaimer</Link>
                        </li>
                    </ul>
                </div>
                <StyledFooterBottom align="center" justify="space-between">
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
                </StyledFooterBottom>
            </PageWrap>
        </StyledFooter>
    );
}
