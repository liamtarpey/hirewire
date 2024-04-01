/* eslint-disable react/no-unescaped-entities */
import ContactUsEmailLink from '../components/contact-us-email-link/ContactUsEmailLink';
import { PageWrap } from '../components/uikit';
import { PageContainer } from '../components/uikit';

export default function PriavcyPolicy() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <h1>Privacy Policy</h1>
                    <p>
                        Welcome to Hirewire Ltd. This Privacy Policy describes
                        how we collect, use, and protect information that you
                        provide when you use our website.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We do not collect any personal data on individuals
                        through our website. However, we may collect
                        non-personal identification information about Users
                        whenever they interact with our Site. This may include
                        browser name, type of computer, and technical
                        information about Users' means of connection to our
                        Site.
                    </p>

                    <h2>2. How We Use Collected Information</h2>
                    <p>
                        We use the information collected to improve customer
                        service, personalize user experience, and improve our
                        Site. We do not use any personal information for these
                        purposes.
                    </p>

                    <h2>3. Web Browser Cookies</h2>
                    <p>
                        Our Site may use cookies to enhance User experience.
                        Users' web browsers place cookies on their hard drive
                        for record-keeping purposes and sometimes to track
                        information about them. However, we do not use any
                        third-party cookies.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We adopt appropriate data collection, storage, and
                        processing practices and security measures to protect
                        against unauthorized access, alteration, disclosure, or
                        destruction of non-personal identification information
                        collected on our Site.
                    </p>

                    <h2>5. Changes to This Privacy Policy</h2>
                    <p>
                        Hirewire Ltd has the discretion to update this Privacy
                        Policy at any time. We encourage Users to frequently
                        check this page for any changes to stay informed about
                        how we are helping to protect the non-personal
                        information we collect.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy,
                        please contact us at <ContactUsEmailLink />
                    </p>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
