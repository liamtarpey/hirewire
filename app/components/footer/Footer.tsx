import React from 'react';
import {
    StyledFooter,
    StyledFooterBottom,
    StyledFooterText,
} from './Footer.styled';
import { PageWrap, Flex } from '../uikit';
import ContactUsCta from '../contact-us-cta/ContactUsCta';
import Link from 'next/link';

export default function Footer() {
    return (
        <StyledFooter>
            <PageWrap $limit="md">
                <div>
                    <h3>Legal & Miscellaneous</h3>
                    <ul>
                        <li>
                            <Link href="/legal/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/legal/terms-of-service">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/legal/privacy-policy-and-data-protection">
                                Privacy Policy & Data Protection
                            </Link>
                        </li>
                        <li>
                            <Link href="/legal/refund-policy">
                                Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/legal/disclaimer">Disclaimer</Link>
                        </li>
                        <li>
                            <Link href="/legal/cookie-policy">
                                Cookie Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/legal/accessibility-statement">
                                Accessibility Statement
                            </Link>
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
