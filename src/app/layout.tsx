import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FooterSection from "@/components/footer/FooterSection";
import NavBar from "@/components/navigation/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KosiTech",
  description:
    "At KosiTech, we harness the skills of African professionals to deliver world-class tech solutions that drive global business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
