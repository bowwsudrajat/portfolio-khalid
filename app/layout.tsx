import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const BASE_URL = "https://portfolio-khalid-seven.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Khalid Sudrajat — Frontend Engineer",
  description:
    "Frontend Engineer with 10+ years of experience building responsive, high-performance web interfaces. Specialized in React, Next.js, and modern UI development. Based in Bekasi, Indonesia.",
  keywords: [
    "Khalid Sudrajat",
    "Frontend Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Ember.js",
    "TypeScript",
    "UI Development",
    "Web Interfaces",
    "Digital Experiences",
    "Portfolio",
    "Bekasi",
    "Indonesia",
  ],
  authors: [{ name: "Khalid Sudrajat", url: `mailto:kholidsudrajat@gmail.com` }],
  creator: "Khalid Sudrajat",
  openGraph: {
    title: "Khalid Sudrajat — Frontend Engineer",
    description:
      "10+ years crafting premium web interfaces for enterprise finance, healthcare, and e-commerce. React · Next.js · UI Development.",
    url: BASE_URL,
    siteName: "Khalid Sudrajat Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Sudrajat — Frontend Engineer",
    description:
      "10+ years crafting premium web interfaces for enterprise finance, healthcare, and e-commerce.",
    creator: "@khalidsudrajat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts CDN for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
