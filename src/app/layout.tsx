import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville, Caveat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Princeton Idea Exchange | Ship AI. This Weekend.",
  description: "Stop learning about AI. Start working with AI. We build fundable MVPs, working prototypes, and ship them in weeks.",
  keywords: ["AI Agent Engineering", "MVP Development", "AI Prototyping", "Fundable MVPs", "Princeton Idea Exchange"],
  authors: [{ name: "Jai Bhagat" }],
  openGraph: {
    title: "Princeton Idea Exchange | Ship AI. This Weekend.",
    description: "Most consultants give you a deck. We give you a demo. Working prototypes. Fundable MVPs. Shipped in weeks.",
    type: "website",
    locale: "en_US",
    siteName: "Princeton Idea Exchange",
  },
  twitter: {
    card: "summary_large_image",
    title: "Princeton Idea Exchange | Ship AI. This Weekend.",
    description: "Most consultants give you a deck. We give you a demo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${libreBaskerville.variable} ${caveat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
