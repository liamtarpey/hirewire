/* eslint-disable react/no-unescaped-entities */
import { PageWrap, RichText } from '../components/uikit';
import { PageContainer } from '../components/uikit';
import ContactUsEmailLink from '../components/contact-us-email-link/ContactUsEmailLink';

export default function AccessibilityStatement() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <RichText>
                        <h1>Accessibility Statement</h1>

                        <p>
                            Hirewire Ltd is committed to ensuring that our
                            website is accessible to everyone, including people
                            with disabilities. We strive to maintain a
                            Lighthouse score of 100 for accessibility, which
                            complies with the Web Content Accessibility
                            Guidelines (WCAG) 2.1 Level AA standards.
                        </p>

                        <h2>Accessibility Features</h2>
                        <p>
                            Our website incorporates a range of accessibility
                            features to ensure that all users can access the
                            content and functionality. These features include:
                        </p>
                        <ul>
                            <li>Keyboard navigation support</li>
                            <li>Screen reader compatibility</li>
                            <li>High contrast mode</li>
                            <li>Alternative text for images</li>
                            <li>Descriptive link text</li>
                            <li>Accessible forms and controls</li>
                        </ul>

                        <h2>Feedback</h2>
                        <p>
                            We welcome feedback on the accessibility of our
                            website. If you encounter any accessibility barriers
                            or have suggestions for improvement, please contact
                            us at <ContactUsEmailLink /> We are committed to
                            making continuous improvements to ensure our website
                            is accessible to all users.
                        </p>

                        <p>Last updated: 01 April 2024.</p>
                    </RichText>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
