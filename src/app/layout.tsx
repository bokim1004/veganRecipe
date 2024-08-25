

import type { Metadata } from "next";
import ClientLayout from "@/app/clientLayout";
import { Inter } from "next/font/google";
import "./globals.css";



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

      <ClientLayout>
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
      </ClientLayout>
  );
}
