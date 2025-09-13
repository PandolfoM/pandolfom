import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
  title: "PandolfoM",
  description: "Portfolio of Matthew Pandolfo",
  // openGraph: {
  //   title: "MJP Hub",
  //   description: "Hub for MJP Web Solutions",
  //   type: "website",
  //   url: "https://mjphub.com",
  //   siteName: "MJP Hub",
  //   locale: "en_US",
  //   images: [
  //     {
  //       url: "https://mjphub.com/og.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "MJP Web Solutions",
  //     },
  //   ],
  // },
  // twitter: {
  //   title: "MJP Hub",
  //   description: "Hub for MJP Web Solutions",
  //   images: [
  //     {
  //       url: "https://mjphub.com/og.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "MJP Web Solutions",
  //     },
  //   ],
  // },
  // icons: {
  //   icon: "/icon.ico",
  //   apple: "/apple-icon.png",
  // },
  // applicationName: "MJP Hub",
  // appleWebApp: {
  //   title: "MJP Hub",
  //   statusBarStyle: "default",
  //   capable: true,
  // },
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
      className="dark h-full pt-[172px] px-4 max-w-[1200px] m-auto lg:pt-28">
      <body
        className={`${inter.variable} ${inter.className} ${jetBrainsMono.variable} antialiased h-full`}>
        <Navbar />
        <span className="pt-[160px] lg:pt-[260px]" />
        {children}
      </body>
    </html>
  );
}
