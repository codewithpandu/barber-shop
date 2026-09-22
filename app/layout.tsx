import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCA BARBER — Atelier Grooming Pria di Senopati, Jakarta",
  description:
    "ARCA Barber Jakarta: potongan presisi arsitektural, hot towel ritual, dan private sanctuary di Senopati. Booking sesi pribadi Anda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-base font-sans text-offwhite antialiased">{children}</body>
    </html>
  );
}
