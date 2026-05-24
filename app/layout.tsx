import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khalid Sudrajat — Frontend Developer Portfolio",
  description:
    "Frontend Developer with 10+ years of experience building responsive, scalable, and user-focused web interfaces. Based in Bekasi, Indonesia.",
  keywords: [
    "Khalid Sudrajat",
    "Frontend Developer",
    "React",
    "Ember.js",
    "Next.js",
    "Portfolio",
    "Bekasi",
    "Indonesia",
  ],
  authors: [{ name: "Khalid Sudrajat", url: "mailto:kholidsudrajat@gmail.com" }],
  openGraph: {
    title: "Khalid Sudrajat — Frontend Developer",
    description:
      "10+ years crafting premium web interfaces for enterprise finance, healthcare, and e-commerce.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Sudrajat — Frontend Developer",
    description:
      "10+ years crafting premium web interfaces for enterprise finance, healthcare, and e-commerce.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
