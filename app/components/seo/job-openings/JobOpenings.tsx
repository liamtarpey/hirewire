'use client';

import { PageWrap } from '../../uikit';
import { StyledJobOpenings } from './JobOpenings.styled';
import Script from 'next/script';

export default function JobOpenings() {
    const getUrl = () => {
        const RANDOM_STRING = (Math.random() * 999).toString();
        return `https://hirewire.breezy.hr/embed/js?inline=true&group_by=none&hirewire_v=${RANDOM_STRING}`;
    };

    return (
        <>
            <Script src={getUrl()} type="module"></Script>
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
