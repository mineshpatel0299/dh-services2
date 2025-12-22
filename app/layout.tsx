import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Using Inter as a temporary alternative to Brandon Grotesque
// Replace with Brandon Grotesque when you have the font files
const brandonGrotesque = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Uncomment this and remove the Inter import above when you have Brandon Grotesque font files
// const brandonGrotesque = localFont({
//   src: [
//     {
//       path: "../public/fonts/BrandonGrotesque-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/BrandonGrotesque-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/BrandonGrotesque-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-body",
//   display: "swap",
// });

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
      <body className={`${bodoniModa.variable} ${brandonGrotesque.variable}`}>
        {children}
      </body>
    </html>
  );
}
