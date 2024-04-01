/* eslint-disable react/no-unescaped-entities */
import ContactUsEmailLink from '../../components/contact-us-email-link/ContactUsEmailLink';

export default function CookiePolicy() {
    return (
        <>
            <h1>Cookie Policy</h1>
            <p>
                This Cookie Policy governs the use of cookies on the Hirewire
                Ltd website ("Site"). By using our website, you consent to the
                use of cookies in accordance with this policy.
            </p>

            <h2>What are cookies?</h2>
            <p>
                Cookies are small text files that are placed on your computer or
                mobile device by websites that you visit. They are widely used
                to make websites work more efficiently and to provide
                information to the owners of the site.
            </p>

            <h2>How we use cookies</h2>
            <p>
                Hirewire Ltd does not use 3rd-party cookies to enhance User
                experience and to analyse website traffic. We utilise
                cookie-less solutions from Vercel Analytics and Speed Insights
                to gather anonymised data about website usage, performance, and
                visitor interactions. This data help us improve our website and
                tailor it to our users' needs.
            </p>

            {/* <h2>Types of cookies we use</h2>
                        <ul>
                            <li>
                                <strong>Performance cookies:</strong> These
                                cookies collect information about how visitors
                                use our website, such as which pages are visited
                                most often and if they encounter any errors.
                                This data is used to improve the performance and
                                user experience of the site.
                            </li>
                        </ul> */}

            <h2>Managing cookies</h2>
            <p>
                Most web browsers allow you to control cookies through their
                settings preferences.
            </p>

            <h2>Changes to this Cookie Policy</h2>
            <p>
                Hirewire Ltd may update this Cookie Policy from time to time. We
                will notify you of any changes by posting the new Cookie Policy
                on this page.
            </p>

            <h2>Contact us</h2>
            <p>
                If you have any questions about this Cookie Policy, please
                contact us at <ContactUsEmailLink />
            </p>
        </>
    );
}
