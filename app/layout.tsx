import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "fonts/Cocogoose-Pro.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Dawood Portfolio",
  description: "My Personal Information and Web Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
