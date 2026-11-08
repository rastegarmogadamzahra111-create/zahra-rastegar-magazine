import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zahra Rastegar | مجله دیجیتال",
  description: "مجله‌ای برای روان‌شناسی، پژوهش، دانش و زندگی؛ دانش، اندیشه، زندگی.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Zahra Rastegar — Digital Magazine",
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
