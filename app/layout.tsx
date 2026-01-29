import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiroo Aoyama - Product Designer",
  description: "Product Designer crafting AI design principles, mobile experiences, and personal projects. Previously at Adobe, Meta (WhatsApp, Instagram), and Zenni Optical.",
  keywords: ["Product Designer", "UX Designer", "AI Design", "Mobile Design", "Portfolio", "Hiroo Aoyama"],
  authors: [{ name: "Hiroo Aoyama" }],
  openGraph: {
    title: "Hiroo Aoyama - Product Designer",
    description: "Product Designer crafting AI design principles, mobile experiences, and personal projects.",
    url: "https://hiroo-aoyama.com",
    siteName: "Hiroo Aoyama Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiroo Aoyama - Product Designer",
    description: "Product Designer crafting AI design principles, mobile experiences, and personal projects.",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = sessionStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark-mode');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
