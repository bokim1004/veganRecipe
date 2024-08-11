
"use client"; // Add this at the top of the file

import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';


export default function ClientLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}