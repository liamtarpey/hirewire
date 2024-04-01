import { PageWrap } from '../../uikit';
import Job from './Job';
import { StyledJobOpenings } from './JobOpenings.styled';

const CURRENT_JOBS = [
    {
        name: 'Senior OS Engineer',
        company: 'Hirewire',
        location: 'Los Angeles, CA',
        url: 'https://hirewire.breezy.hr/p/12da327efdc101-senior-os-engineer',
    },
    {
        name: 'Senior IT Systems Architect',
        company: 'Hirewire',
        location: 'Melville, NY (Hybrid)',
        url: 'https://hirewire.breezy.hr/p/72ff5c3dd29b01-senior-it-systems-architect',
    },
    {
        name: 'Platform Engineer',
        company: 'Hirewire',
        location: 'Darmstadt, Germany',
        url: 'https://hirewire.breezy.hr/p/26c20456d1a101-platform-developer-devops',
    },
    {
        name: 'System Engineer',
        company: 'Hirewire',
        location: 'Munich, Germany',
        url: 'https://hirewire.breezy.hr/p/966a5c0370b401-system-engineer',
    },
    {
        name: 'Mobile App Developer (Capacitor)',
        company: 'Hirewire',
        location: 'Miami, FL',
        url: 'https://hirewire.breezy.hr/p/369c281de47601-mobile-app-developer-capacitor',
    },
    {
        name: 'Freelance Recruiter / Sourcer',
        company: 'Hirewire',
        location: 'Philippines - Remote',
        url: 'https://hirewire.breezy.hr/p/a093b90c3ab801-freelance-recruiter-sourcer',
    },
];

export default function JobOpenings() {
    return (
        <PageWrap $limit="md">
            <h2>Latest Job Openings</h2>
            <StyledJobOpenings
                align="stretch"
                justify="start"
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
