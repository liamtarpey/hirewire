'use client';

import { PageWrap } from '../../uikit';
import { StyledJobOpenings } from './JobOpenings.styled';
import Script from 'next/script';

export default function JobOpenings() {
    const getUrl = () => {
        return `https://hirewire.breezy.hr/embed/js?inline=true&group_by=none&v=${Math.random().toString()}`;
    };

    return (
        <>
            <Script src={getUrl()}></Script>
            <PageWrap $limit="md">
                <h2>Latest Job Openings</h2>
                <StyledJobOpenings
                    align="stretch"
                    justify="start"
                    gap={'20px'}
                    flexwrap="wrap"
                    id="bzOpeningsContainer"
                ></StyledJobOpenings>
            </PageWrap>
        </>
    );
}
