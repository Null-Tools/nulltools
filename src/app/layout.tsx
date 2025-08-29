import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nothingFont = localFont({
  src: '../../public/fonts/NothingFont.ttf',
  variable: '--font-nothing',
});

export const metadata: Metadata = {
  title: "Null Tools - Minimalist Developer Tools",
  description: "A suite of powerful, minimalist tools for developers and creators. Upload files, manage temporary communications, and process payments securely.",
  icons: {
    icon: [
      { url: "/nulltoolsdots.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/nulltoolsdots.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/nulltoolsdots.ico", sizes: "192x192", type: "image/x-icon" },
    ],
    apple: [
      { url: "/nulltoolsdots.ico", sizes: "180x180", type: "image/x-icon" },
    ],
    shortcut: "/nulltoolsdots.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nothingFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}