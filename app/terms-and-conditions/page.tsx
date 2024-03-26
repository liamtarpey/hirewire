'use client';

import { PageWrap } from '../components/uikit';
import { PageContainer } from '../components/uikit';

export default function Home() {
    return (
        <main>
            <PageWrap $limit="sm">
                <PageContainer>
                    <h1>Terms and Conditions</h1>
                </PageContainer>
            </PageWrap>
        </main>
    );
}
