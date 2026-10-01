import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCA BARBER — Atelier Grooming Pria di Senopati, Jakarta",
  description:
    "ARCA Barber Jakarta: potongan presisi arsitektural, hot towel ritual, dan private sanctuary di Senopati. Booking sesi pribadi Anda.",
  openGraph: {
    siteName: "Arca Barber Shop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603291783835-12c1ebe6c701?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Arca Barber Shop",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-base font-sans text-offwhite antialiased">
        {children}
      </body>
    </html>
  );
}
