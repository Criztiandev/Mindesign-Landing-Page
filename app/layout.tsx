import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const thickThin = localFont({
  src: "../public/fonts/ThickThin.ttf",
  variable: "--font-thick-thin",
});

export const metadata: Metadata = {
  title: "Mindesigns - Design and Marketing Specialists",
  description:
    "Generate more leads and customers through your website. Design and marketing are our specialities.",
  icons: {
    icon: "/images/koala-logo.png",
    shortcut: "/images/koala-logo.png",
    apple: "/images/koala-logo.png",
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/koala-logo.png" type="image/png" />
        <link
          rel="shortcut icon"
          href="/images/koala-logo.png"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/images/koala-logo.png" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${thickThin.variable} font-poppins`}
      >
        <Toaster
          richColors
          position="top-right"
          duration={5000}
          closeButton
          theme="dark"
        />
        {children}
      </body>
    </html>
  );
}
