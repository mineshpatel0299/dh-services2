import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
