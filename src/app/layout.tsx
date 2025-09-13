import type { Metadata } from "next";
import { anton, baseFont, dottedFont, UpRightFontOne } from "@/lib/font-config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animesh kakoty",
  description: "Animesh Kakoty's portfolio website showcasing projects, skills, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${baseFont.variable} ${dottedFont.variable} ${anton.variable} ${UpRightFontOne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
