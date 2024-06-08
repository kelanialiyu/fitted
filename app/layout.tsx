import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitted Task App",
  description: "A simple app that uses github to Authenticate users and list their repos onces they are sign-on",
};

export default async function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

   if (session?.user ) {
      // redirect('/dashboard')
   }
  return (
    <html lang="en">
        <body className={inter.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
      </html>
  );
}
