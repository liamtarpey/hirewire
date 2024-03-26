import React from 'react';
import { Button, PageWrap } from '../../uikit';
import { StyledContact } from './Contact.styled';
import ContactUsCta from '../../contact-us-cta/ContactUsCta';

export default function Contact() {
    return (
        <PageWrap>
            <StyledContact>
                <h2>Want to chat to us?</h2>
                <ContactUsCta />
                <p>
                    or email{' '}
                    <a href="mailto:info@hirewire.uk">info@hirewire.uk</a>
                </p>
            </StyledContact>
        </PageWrap>
    );
}
