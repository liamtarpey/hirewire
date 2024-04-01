import ContactUsEmailLink from '../components/contact-us-email-link/ContactUsEmailLink';
import { PageWrap } from '../components/uikit';
import { PageContainer, RichText } from '../components/uikit';

export default function GDPRComplianceStatement() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <RichText>
                        <h1>GDPR Compliance Statement</h1>

                        <p>
                            Hirewire Ltd is committed to ensuring the protection
                            of your privacy and personal data. As a company, we
                            adhere to the requirements of the General Data
                            Protection Regulation (GDPR) and other relevant data
                            protection laws.
                        </p>

                        <h2>Data Collection and Processing</h2>
                        <p>
                            We do not collect or process any personal data on
                            individuals through our website. We solely utilise:
                            Vercel Analytics & Vercel Speed Insights to collect
                            anonymous usage reports for the purpose of improving
                            website performance and user experience. These tools
                            do not track or store any personally identifiable
                            information.
                        </p>

                        <h2>Third-Party Cookies</h2>
                        <p>
                            We do not use any third-party cookies on our
                            website. Our use of Vercel Analytics and Speed
                            Insights does not involve the use of third-party
                            cookies for tracking or advertising purposes.
                        </p>

                        <h2>Data Security</h2>
                        <p>
                            We employ industry-standard security measures to
                            protect any data collected through Vercel Analytics
                            and Speed Insights. This includes encryption, access
                            controls, and regular security assessments.
                        </p>

                        <h2>Your Rights</h2>
                        <p>
                            Under the GDPR, individuals have certain rights
                            regarding their personal data, including the right
                            to access, rectify, or erase their data. Since we do
                            not collect personal data through our website, these
                            rights do not apply in this context. However, if you
                            have any questions or concerns about our data
                            practices, please contact us using the information
                            provided below.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or concerns about our GDPR
                            compliance or data practices, please contact us at{' '}
                            <ContactUsEmailLink />
                        </p>
                    </RichText>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
