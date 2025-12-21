import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Princeton Idea Exchange | AI Strategy Consultants",
  description: "AI Strategy Consultants helping legacy businesses count on. We design campaigns that drive long-term value through GTM engineering, branding, and AI-powered solutions.",
  keywords: ["AI Strategy", "GTM Engineering", "Business Consulting", "Startup Consulting", "Princeton Idea Exchange"],
  authors: [{ name: "Princeton Idea Exchange" }],
  openGraph: {
    title: "Princeton Idea Exchange | AI Strategy Consultants",
    description: "AI Strategy Consultants helping legacy businesses count on.",
    type: "website",
    locale: "en_US",
    siteName: "Princeton Idea Exchange",
  },
  twitter: {
    card: "summary_large_image",
    title: "Princeton Idea Exchange | AI Strategy Consultants",
    description: "AI Strategy Consultants helping legacy businesses count on.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
