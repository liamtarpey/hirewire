'use client';

import StyledComponentsRegistry from './styled-registry';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export default function StyledLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
    );
}
