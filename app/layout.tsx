import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Saurabh Kumar | ImageX Flutter",
  description: "Personal portfolio website of Saurabh Kumar showcasing ImageX Flutter — a premium, high-performance Flutter package that simplifies image rendering from Network, Asset, SVG, File, and Memory sources.",
  keywords: [
    "Flutter",
    "Dart",
    "Flutter Package",
    "ImageX Flutter",
    "Flutter Image Cache",
    "Flutter SVG Rendering",
    "Saurabh Kumar Flutter",
    "Mobile Software Engineer",
    "Linear Design Portfolio"
  ],
  authors: [{ name: "Saurabh Kumar" }],
  openGraph: {
    title: "Saurabh Kumar | ImageX Flutter",
    description: "Showcasing ImageX Flutter, a premium reusable image loading widget for Flutter with built-in caching, placeholders, shimmer, and full-screen viewers.",
    url: "https://github.com/saurabhkumar-sk/imagex_flutter",
    siteName: "Saurabh Kumar Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Kumar | ImageX Flutter",
    description: "Showcasing ImageX Flutter, a premium reusable image loading widget for Flutter with caching, SVG support, and custom builders.",
    creator: "@saurabh_kumar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
