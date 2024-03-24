import { PageWrap } from '../../uikit';
import Job from './Job';
import { Flex } from '../../uikit';

const CURRENT_JOBS = [
    {
        name: 'Mobile Engineer - iOS',
        company: 'Hirewire',
        location: 'Los Angeles, CA',
        url: 'https://www.linkedin.com/jobs/search/?currentJobId=3869873164&f_C=98129050&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3869873164%2C3869844007%2C3869872702&refId=0H17AlzWNyqNHpG%2FHNQkZg%3D%3D&trackingId=0roSvoadZt5hAsoUrwWGjw%3D%3D&trk=d_flagship3_company',
    },
    {
        name: 'Senior IT Systems Architect',
        company: 'Hirewire',
        location: 'Melville, NY (Hybrid)',
        url: 'https://www.linkedin.com/jobs/search/?currentJobId=3869844007&f_C=98129050&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3869873164%2C3869844007%2C3869872702',
    },
    {
        name: 'Android Developer',
        company: 'Hirewire',
        location: 'Los Angeles, CA',
        url: 'https://www.linkedin.com/jobs/search/?currentJobId=3869872702&f_C=98129050&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3869873164%2C3869844007%2C3869872702',
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
