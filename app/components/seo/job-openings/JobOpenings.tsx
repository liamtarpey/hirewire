import { PageWrap } from '../../uikit';
import { StyledJobOpenings } from './JobOpenings.styled';
import Script from 'next/script';

export default function JobOpenings() {
    return (
        <>
            <Script src="https://hirewire.breezy.hr/embed/js?inline=true&group_by=none"></Script>
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
