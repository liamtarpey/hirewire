'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { PageWrap, Flex } from '../uikit';
import ContactUsCta from '../contact-us-cta/ContactUsCta';

// Styled
import { StyledNav, StyledLogo } from './Nav.styled';

/** Fixed height value of nav in px */
export const NAV_FIXED_HEIGHT = '74';

export default function Nav() {
    return (
        <StyledNav>
            <PageWrap>
                <Flex $align="center" $justify="start">
                    <StyledLogo>
                        <Link href="/">
                            <Flex $align="center" $justify="start">
                                <Image
                                    priority
                                    src="/logos/hirewire-logo.png"
                                    alt="Hirewire Logo"
                                    width={150}
                                    height={42}
                                />
                            </Flex>
                        </Link>
                    </StyledLogo>

                    {/* Links */}
                    {/* <div>
                        <Link href="/services">Services</Link>
                    </div> */}

                    {/* CTA */}
                    <div style={{ marginLeft: 'auto' }}>
                        <ContactUsCta />
                    </div>
                </Flex>
            </PageWrap>
        </StyledNav>
    );
}
