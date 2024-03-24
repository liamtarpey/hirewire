'use client';

import Contact from './components/seo/contact/Contact';
import SEOHeader from './components/seo/header/SEOHeader';
import JobOpenings from './components/seo/job-openings/JobOpenings';
import OurTeam from './components/seo/our-team/OurTeam';

export default function Home() {
    return (
        <main>
            <SEOHeader />
            <JobOpenings />
            <OurTeam />
            <Contact />
        </main>
    );
}
