import React from 'react';
import { PageWrap, Flex } from '../../uikit';
import { StyledPersona } from './OurTeam.styled';
import Image from 'next/image';

const TEAM_MEMBERS = [
    {
        name: 'Jane Sumbilla',
        position: 'Talent Acquisition Specialist',
        src: '/team/jane.jpeg',
    },
    {
        name: 'Liam Tarpey',
        position: 'Technical Consultant',
        src: '/team/liam.png',
    },
];

export default function OurTeam() {
    return (
        <PageWrap $limit="md">
            <h2>Our Team</h2>
            <p>
                For exceptional tech recruitment, trust in Hirewire. Whether
                it&apos;s permanent or interim staff, we seamlessly oversee the
                entire process, from crafting job descriptions to streamlining
                onboarding. Our experienced team excels across diverse
                industries and sectors, consistently identifying the ideal
                candidates. With Hirewire at your side, you can devote your full
                attention to business growth, knowing your recruitment needs are
                expertly managed.
            </p>
            <Flex align="center" justify="space-around">
                {(TEAM_MEMBERS || []).map(({ name, position, src }, index) => (
                    <StyledPersona key={index}>
                        <Image src={src} alt={name} width={140} height={140} />
                        <h2>{name}</h2>
                        <p>{position}</p>
                    </StyledPersona>
                ))}
            </Flex>
        </PageWrap>
    );
}
