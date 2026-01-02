import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// Lato - Regular (400) for body, Bold (700) for headings
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interactive Selector 2",
  description: "Emerging Technology Sectors Interactive Selector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.variable}>
        {children}
      </body>
    </html>
  );
}
