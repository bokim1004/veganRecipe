
"use client"; // Add this at the top of the file

import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RecoilRoot} from "recoil";


export default function ClientLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {


const queryClient = new QueryClient();

    return (
        <RecoilRoot>
        <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </QueryClientProvider>
        </RecoilRoot>
    );
}