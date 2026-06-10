import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MagneticCursor from "@/components/MagneticCursor";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Pandolfo — Frontend Developer",
  description:
    "Frontend developer based in Rocky Hill, CT, crafting fast, beautiful things for the web.",
  openGraph: {
    title: "Matthew Pandolfo — Frontend Developer",
    description:
      "Frontend developer based in Rocky Hill, CT, crafting fast, beautiful things for the web.",
    type: "website",
    url: "https://mattpandolfo.com",
    siteName: "Matthew Pandolfo",
    locale: "en_US",
    images: [
      {
        url: "https://mattpandolfo.com/og.png",
        width: 1200,
        height: 630,
        alt: "Matthew Pandolfo",
      },
    ],
  },
  twitter: {
    title: "Matthew Pandolfo — Frontend Developer",
    description:
      "Frontend developer based in Rocky Hill, CT, crafting fast, beautiful things for the web.",
    images: [
      {
        url: "https://mattpandolfo.com/og.png",
        width: 1200,
        height: 630,
        alt: "Matthew Pandolfo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  applicationName: "Matthew Pandolfo",
  appleWebApp: {
    title: "Matthew Pandolfo",
    statusBarStyle: "default",
    capable: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0b",
  colorScheme: "dark",
  maximumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark cursor-none overflow-x-clip">
      <body
        className={`${fraunces.variable} ${instrumentSans.variable} ${jetBrainsMono.variable} font-sans antialiased min-h-svh flex flex-col`}
      >
        <SmoothScroll />
        <MagneticCursor />
        <div className="noise" aria-hidden />
        <Navbar />
        <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 md:px-6">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
