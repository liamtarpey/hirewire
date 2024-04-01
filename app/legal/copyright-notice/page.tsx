import { PageWrap, RichText } from '../../components/uikit';
import { PageContainer } from '../../components/uikit';
import ContactUsEmailLink from '../../components/contact-us-email-link/ContactUsEmailLink';

export default function CopyrightNotice() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <RichText>
                        <h1>Copyright Notice</h1>
                        <p>
                            © {new Date().getFullYear()} Hirewire Ltd. All
                            rights reserved.
                        </p>

                        <p>
                            The content, design, and graphics on this website
                            are the property of Hirewire Ltd and are protected
                            by copyright laws. No part of this website may be
                            reproduced, distributed, or transmitted in any form
                            or by any means, including photocopying, recording,
                            or other electronic or mechanical methods, without
                            the prior written permission of Hirewire Ltd, except
                            in the case of brief quotations embodied in critical
                            reviews and certain other noncommercial uses
                            permitted by copyright law.
                        </p>

                        <p>
                            For permission requests, please contact us at{' '}
                            <ContactUsEmailLink />
                        </p>
                    </RichText>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
