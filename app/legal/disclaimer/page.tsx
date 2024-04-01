import ContactUsEmailLink from '../../components/contact-us-email-link/ContactUsEmailLink';
import { PageWrap, RichText } from '../../components/uikit';
import { PageContainer } from '../../components/uikit';

export default function Disclaimer() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <RichText>
                        <h1>Disclaimer</h1>
                        <p>
                            Welcome to Hirewire Ltd. The information provided on
                            this website is for general informational purposes
                            only.
                        </p>

                        <h2>1. Accuracy of Information</h2>
                        <p>
                            We make no representations or warranties of any
                            kind, express or implied, about the completeness,
                            accuracy, reliability, suitability, or availability
                            of the information, products, services, or related
                            graphics contained on this website. Any reliance you
                            place on such information is strictly at your own
                            risk.
                        </p>

                        <h2>2. Limitation of Liability</h2>
                        <p>
                            In no event will we be liable for any loss or
                            damage, including without limitation, indirect or
                            consequential loss or damage, or any loss or damage
                            whatsoever arising from loss of data or profits
                            arising out of, or in connection with, the use of
                            this website.
                        </p>

                        <h2>3. External Links</h2>
                        <p>
                            This website may contain links to external websites
                            that are not under the control of Hirewire Ltd. We
                            have no control over the nature, content, and
                            availability of those sites. The inclusion of any
                            links does not necessarily imply a recommendation or
                            endorsement of the views expressed within them.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this
                            Disclaimer, please contact us at{' '}
                            <ContactUsEmailLink />
                        </p>
                    </RichText>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
