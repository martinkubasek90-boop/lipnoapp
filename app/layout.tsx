import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lipno. Sport & resort",
  description: "Mobilní aplikace pro sportovní středisko Lipno. Vstupenky, provoz, zážitky a servis na jednom místě.",
};

export const viewport: Viewport = {
  themeColor: "#0c4a6e",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="pb-32" style={{ background: "var(--surface)", color: "var(--on-surface)", fontFamily: "Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
