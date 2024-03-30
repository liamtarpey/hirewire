import { PageWrap } from '../../uikit';
import Job from './Job';
import { StyledJobOpenings } from './JobOpenings.styled';
import fetchSignIn from '@/app/data/fetchSignIn';

const CURRENT_JOBS = [
    {
        name: 'Platform Engineer',
        company: 'Hirewire',
        location: 'Darmstadt, Germany',
        url: 'https://hirewire.breezy.hr/p/26c20456d1a101-platform-developer-devops',
    },
    {
        name: 'Senior IT Systems Architect',
        company: 'Hirewire',
        location: 'Melville, NY (Hybrid)',
        url: 'https://hirewire.breezy.hr/p/72ff5c3dd29b01-senior-it-systems-architect',
    },
    {
        name: 'Mobile Engineer - iOS',
        company: 'Hirewire',
        location: 'Los Angeles, CA',
        url: 'https://hirewire.breezy.hr/p/e195f6a3fe7101-mobile-engineer-ios',
    },
    {
        name: 'Mobile Engineer - Android',
        company: 'Hirewire',
        location: 'Los Angeles, CA',
        url: 'https://hirewire.breezy.hr/p/ed6d5c681d2201-android-developer',
    },
];

export default async function JobOpenings() {
    const signIn = await fetchSignIn();
    console.log('reqs:', signIn);

    return (
        <PageWrap $limit="md">
            <h2>Latest Job Openings</h2>
            <StyledJobOpenings
                $align="stretch"
                $justify="start"
                gap={'20px'}
                flexwrap="wrap"
            >
                {CURRENT_JOBS.map((props, index) => (
                    <Job key={index} {...props} />
                ))}
            </StyledJobOpenings>
        </PageWrap>
    );
}
