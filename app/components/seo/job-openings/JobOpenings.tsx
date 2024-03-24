import { PageWrap } from '../../uikit';
import Job from './Job';
import { Flex } from '../../uikit';

const CURRENT_JOBS = [
    {
        name: 'Mobile Engineer - iOS',
        company: 'Hirewire',
        location: 'Los Angeles, CA',
        url: 'https://hirewire.breezy.hr/p/e195f6a3fe7101-mobile-engineer-ios',
    },
    {
        name: 'Senior IT Systems Architect',
        company: 'Hirewire',
        location: 'Melville, NY (Hybrid)',
        url: 'https://hirewire.breezy.hr/p/72ff5c3dd29b01-senior-it-systems-architect',
    },
    {
        name: 'Android Developer',
        company: 'Hirewire',
        location: 'Los Angeles, CA',
        url: 'https://hirewire.breezy.hr/p/ed6d5c681d2201-android-developer',
    },
];

export default function JobOpenings() {
    return (
        <PageWrap limit="md">
            <h2>Latest Job Openings</h2>
            <Flex align="center" justify="start" gap={'20px'}>
                {CURRENT_JOBS.map((props, index) => (
                    <Job key={index} {...props} />
                ))}
            </Flex>
        </PageWrap>
    );
}
