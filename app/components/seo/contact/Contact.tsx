'use client';

import React from 'react';
import { Button, PageWrap } from '../../uikit';
import { StyledContact } from './Contact.styled';
import ContactUsCta from '../../contact-us-cta/ContactUsCta';
import ContactUsEmailLink from '../../contact-us-email-link/ContactUsEmailLink';

export default function Contact() {
    return (
        <PageWrap>
            <StyledContact>
                <h2>Want to chat to us?</h2>
                <ContactUsCta />
                <p>
                    or email <ContactUsEmailLink />
                </p>
            </StyledContact>
        </PageWrap>
    );
}
