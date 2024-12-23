import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spill The PDF",
  description: "AI Chatbot to extract text from PDFs and have a conversation with it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en" data-theme="synthwave" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
