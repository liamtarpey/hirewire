import { PageWrap, RichText } from '../../components/uikit';
import { PageContainer } from '../../components/uikit';
import ContactUsEmailLink from '../../components/contact-us-email-link/ContactUsEmailLink';

export default function TermsOfService() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <RichText>
                        <h1>Terms of Service</h1>
                        <p>
                            Welcome to Hirewire Ltd. These terms and conditions
                            outline the rules and regulations for the use of our
                            website.
                        </p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using our website, you agree to be
                            bound by these Terms of Service. If you disagree
                            with any part of these terms, you may not access the
                            website.
                        </p>

                        <h2>2. Intellectual Property Rights</h2>
                        <p>
                            All content, trademarks, logos, and service marks
                            displayed on this website are the property of
                            Hirewire Ltd or their respective owners. You may not
                            use, reproduce, or modify any of the content without
                            our prior written consent.
                        </p>

                        <h2>3. User Conduct</h2>
                        <p>
                            When using our website, you agree not to engage in
                            any conduct that may be considered unlawful,
                            offensive, or harmful. This includes, but is not
                            limited to, posting or transmitting any content that
                            is defamatory, obscene, or infringes on the rights
                            of others.
                        </p>

                        <h2>4. Limitation of Liability</h2>
                        <p>
                            We make no representations or warranties of any
                            kind, express or implied, about the completeness,
                            accuracy, reliability, suitability, or availability
                            of the information, products, services, or related
                            graphics contained on this website. In no event will
                            we be liable for any loss or damage arising from the
                            use of this website.
                        </p>

                        <h2>5. Changes to Terms</h2>
                        <p>
                            We reserve the right to revise these Terms of
                            Service at any time without notice. By continuing to
                            use this website, you agree to be bound by the
                            updated terms and conditions.
                        </p>

                        <h2>6. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and
                            construed in accordance with the laws of England and
                            Wales. Any disputes relating to these terms and
                            conditions will be subject to the exclusive
                            jurisdiction of the courts of England and Wales.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or concerns about these
                            Terms of Service, please contact us at{' '}
                            <ContactUsEmailLink />
                        </p>
                    </RichText>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
