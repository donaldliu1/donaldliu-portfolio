import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const noto = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Donald Liu Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto.className}>
      <body>{children}</body>
    </html>
  );
}
