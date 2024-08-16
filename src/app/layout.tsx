

import type { Metadata } from "next";
import ClientLayout from "@/app/clientLayout";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vegan Recipes",
  description: "Discover delicious vegan recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={inter.className}>
      <ClientLayout>
          {children}
      </ClientLayout>
      </body>

    </html>
  );
}
