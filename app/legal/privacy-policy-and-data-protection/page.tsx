/* eslint-disable react/no-unescaped-entities */
import ContactUsEmailLink from '../../components/contact-us-email-link/ContactUsEmailLink';
import { PageWrap, RichText } from '../../components/uikit';
import { PageContainer } from '../../components/uikit';

export default function PriavcyPolicy() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <RichText>
                        <h1>Privacy Policy and Data Protection Compliance</h1>
                        <h2>Introduction</h2>
                        <p>
                            Welcome to Hirewire Ltd. This Privacy Policy and
                            Data Protection Compliance statement describe how we
                            collect, use, and protect information that you
                            provide when you use our website. Our policy is
                            designed to comply with applicable data protection
                            regulations, including the General Data Protection
                            Regulation (GDPR) for the EU, the California
                            Consumer Privacy Act (CCPA) for California
                            residents, and other relevant privacy laws.
                        </p>

                        <h2>Information We Collect</h2>
                        <p>
                            We do not collect any personal data on individuals
                            through our website. However, we may collect
                            non-personal identification information about Users
                            whenever they interact with our Site. This may
                            include browser name, type of computer, and
                            technical information about Users' means of
                            connection to our Site.
                        </p>

                        <h2>How We Use Collected Information</h2>
                        <p>
                            We use the information collected to improve customer
                            service, personalize user experience, and improve
                            our Site. We do not use any personal information for
                            these purposes.
                        </p>

                        <h2>Web Browser Cookies</h2>
                        <p>
                            Our Site may use cookies to enhance User experience.
                            Users' web browsers place cookies on their hard
                            drive for record-keeping purposes and sometimes to
                            track information about them. However, we do not use
                            any third-party cookies.
                        </p>

                        <h2>Data Security</h2>
                        <p>
                            We adopt appropriate data collection, storage, and
                            processing practices and security measures to
                            protect against unauthorized access, alteration,
                            disclosure, or destruction of non-personal
                            identification information collected on our Site.
                        </p>

                        <h2>GDPR Compliance</h2>
                        <p>
                            As part of our commitment to data protection and
                            privacy, we comply with the requirements of the
                            General Data Protection Regulation (GDPR) for users
                            in the European Union. This includes:
                        </p>
                        <ul>
                            <li>
                                Ensuring that data processing is lawful, fair,
                                and transparent.
                            </li>
                            <li>
                                Obtaining explicit consent before collecting any
                                personal data.
                            </li>
                            <li>
                                Providing users with the right to access,
                                rectify, or erase their personal data.
                            </li>
                            <li>
                                Implementing appropriate technical and
                                organizational measures to ensure data security.
                            </li>
                        </ul>

                        <h2>CCPA Compliance</h2>
                        <p>
                            For California residents, we comply with the
                            California Consumer Privacy Act (CCPA). This
                            includes:
                        </p>
                        <ul>
                            <li>
                                Providing consumers with the right to know,
                                access, and delete personal information
                                collected by businesses.
                            </li>
                            <li>
                                Offering opt-out mechanisms for the sale of
                                personal information to third parties.
                            </li>
                            <li>
                                Implementing reasonable security measures to
                                protect personal information.
                            </li>
                        </ul>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy,
                            please contact us at <ContactUsEmailLink />
                        </p>
                    </RichText>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
