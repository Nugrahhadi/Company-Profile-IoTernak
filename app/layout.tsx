import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "IoTernak - Ecosystem",
  description: "Revolutionizing livestock operations with smart IoT technology",
  icons: {
    icon: [
      {
        url: "/images/favicon_ioternak/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon_ioternak/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon_ioternak/favicon.ico",
    apple: "/images/favicon_ioternak/apple-touch-icon.png",
  },
  manifest: "/images/favicon_ioternak/manifest.webmanifest",
  openGraph: {
    title: "IoTernak - Ecosystem",
    description:
      "Revolutionizing livestock operations with smart IoT technology",
    images: [
      {
        url: "/images/favicon_ioternak/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/favicon_ioternak/android-chrome-192x192.png"],
  },
  verification: {
    google: "6c5YszP4IuUxyd5Ck7-Qj7yhrvvarBfblzX48dtb3wQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300 flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-020VBT6T3X" />
      </body>
    </html>
  );
}
