import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import 'remixicon/fonts/remixicon.css'

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mousin | UI/UX Designer",
  description:
    "UI/UX Designer portfolio showcasing clean design, user-focused interfaces, and modern web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <SmoothScroll />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
