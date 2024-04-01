import React from 'react';
import {
    StyledFooter,
    StyledFooterLogo,
    StyledFooterBottom,
    StyledFooterText,
    StyledFooterUL,
    StyledFooterLinks,
} from './Footer.styled';
import { PageWrap } from '../uikit';
import ContactUsCta from '../contact-us-cta/ContactUsCta';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <StyledFooter>
            <PageWrap $limit="md">
                <StyledFooterLogo>
                    <Image
                        src="/logos/hirewire-logo.png"
                        alt="Hirewire Logo"
                        width="150"
                        height="42"
                    />
                </StyledFooterLogo>
                <StyledFooterLinks gap="100px">
                    <div>
                        <h3>Legal</h3>
                        <StyledFooterUL>
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
                        </StyledFooterUL>
                    </div>
                    <div>
                        <h3>Social</h3>
                        <StyledFooterUL>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/company/hirewireuk/?viewAsMember=true"
                                    target="_blank"
                                >
                                    Linkedin
                                </Link>
                            </li>
                        </StyledFooterUL>
                    </div>
                </StyledFooterLinks>
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
