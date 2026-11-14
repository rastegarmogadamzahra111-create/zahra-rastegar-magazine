import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فِطرَت FITRAT | مجله دیجیتال",
  description: "مجله‌ای برای روان‌شناسی، پژوهش، دانش و زندگی؛ دانش، اندیشه، زندگی.",
  verification: {
    google: "6nUB-lfQUP21BFVzEO-nKYFaMxZZrqAS8WV_c0pYMbI",
  },
  openGraph: {
    title: "FITRAT — Digital Magazine",
    description: "دانش، اندیشه، زندگی",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
