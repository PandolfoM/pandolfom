import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MagneticCursor from "@/components/MagneticCursor";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Matthew Pandolfo",
  description: "Home of Matthew Pandolfo",
  openGraph: {
    title: "Matthew Pandolfo",
    description: "Home of Matthew Pandolfo",
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
    title: "MJP Hub",
    description: "Home of Matthew Pandolfo",
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
  themeColor: "#000000",
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
    <html
      lang="en"
      className="dark h-full px-4 max-w-[1200px] m-auto lg:pt-28 cursor-none scroll-smooth overflow-x-hidden"
    >
      <body
        className={`${inter.variable} ${inter.className} ${jetBrainsMono.variable} antialiased h-full`}
      >
        <MagneticCursor />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
