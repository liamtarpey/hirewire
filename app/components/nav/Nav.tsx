'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Components
import { PageWrap, Button, Flex } from '../uikit';

// Styled
import { StyledNav, StyledLogo } from './Nav.styled';

export default function Nav() {
    const { push } = useRouter();
    return (
        <StyledNav>
            <PageWrap>
                <Flex align="center" justify="space-between">
                    <StyledLogo onClick={void push('/')}>
                        <Flex align="center" justify="start">
                            <Image
                                src="/logos/hirewire-logo.png"
                                alt="Hirewire Logo"
                                width={150}
                                height={42}
                            />
                        </Flex>
                    </StyledLogo>
                    <div>
                        <Button href="mailto:info@hirewire.uk">
                            Get in touch
                        </Button>
                    </div>
                </Flex>
            </PageWrap>
        </StyledNav>
    );
}
