import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import StyledLayout from './components/StyledLayout/Styled';

/** Layout components */
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

/** Lato Google font */
const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
    title: 'Hirewire',
    description: 'Hiring for the future',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <StyledLayout>
                    <Nav />
                    {children}
                    <Footer />
                </StyledLayout>
            </body>
        </html>
    );
}
