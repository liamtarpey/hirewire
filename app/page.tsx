import Contact from './components/seo/contact/Contact';
import SEOHeader from './components/seo/header/SEOHeader';
import JobOpenings from './components/seo/job-openings/JobOpenings';
import OurTeam from './components/seo/our-team/OurTeam';

import { PageContainer } from './components/uikit';

export default function Home() {
    return (
        <main>
            <PageContainer>
                <SEOHeader />
                <JobOpenings />
                <OurTeam />
                <Contact />
            </PageContainer>
        </main>
    );
}
