import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lipno.info - zážitky a ubytování pro rodiny s dětmi",
  description: "Aktuální informace o regionu, počasí, webkamery, vstupenky, ubytování a kalendář akcí na Lipně.",
  icons: {
    icon: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rodinný areál Lipno",
    description: "Aktuální informace o regionu, počasí, webkamery, vstupenky, ubytování a kalendář akcí.",
    images: ["https://www.lipno.info/files/lipno/images/meta/17111046033408-171-7215842.jpg"],
    url: "https://www.lipno.info/",
    siteName: "Lipno.info - zážitky a ubytování pro rodiny s dětmi",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="pb-32" style={{ background: "var(--surface)", color: "var(--on-surface)", fontFamily: "\"Source Sans Pro\", sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
