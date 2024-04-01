/* eslint-disable react/no-unescaped-entities */
import ContactUsEmailLink from '../../components/contact-us-email-link/ContactUsEmailLink';

export default function RefundPolicy() {
    return (
        <>
            <h1>Refund Policy</h1>
            <h2>Terminology</h2>
            <ul>
                <li>
                    <strong>Client:</strong> Refers to the company that we are
                    agreeing to source candidates for.
                </li>
                <li>
                    <strong>Candidate:</strong> Refers to the candidate(s) we
                    source for the clients.
                </li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
                100% of the agreed payment should be paid upon the candidate's
                start date. If the candidate doesn't show/join the company, no
                payment is due.
            </p>

            <h2>Refund Terms</h2>
            <p>
                We offer a split responsibility model for not passing
                probationary period. The probationary period is defined by the
                client at their contract level with the company. If the
                candidate does not successfully complete their probationary
                period, we refund 50% of the amount.
            </p>

            <h2>Contractual Agreement</h2>
            <p>
                These terms are subject to change based on the contract that is
                agreed between Hirewire Ltd and the client. However, these are
                our standard terms. Please check the contract for any potential
                amendments to this policy.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about our refund policy, please
                contact us at <ContactUsEmailLink />
            </p>
        </>
    );
}
