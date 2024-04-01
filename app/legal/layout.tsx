import { PageWrap, RichText } from '../components/uikit';
import { PageContainer } from '../components/uikit';

/**
 * Layout for all Legal pages
 * @param {Object}
 * @param {Object} param.children - React Node
 * @returns {Object} React component
 */
export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <RichText>{children}</RichText>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
