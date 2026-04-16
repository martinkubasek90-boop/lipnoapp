import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackStepButton from "@/components/lipno/BackStepButton";
import PwaBoot from "@/components/lipno/PwaBoot";
import { SeasonProvider } from "@/components/lipno/SeasonProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lipno.info"),
  title: "Lipno.info - zážitky a ubytování pro rodiny s dětmi",
  description: "Aktuální informace o regionu, počasí, webkamery, vstupenky, ubytování a kalendář akcí na Lipně.",
  manifest: "/manifest.webmanifest",
  applicationName: "Lipno",
  appleWebApp: {
    capable: true,
    title: "Lipno",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
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
  themeColor: "#001E60",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Lipno" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="pb-32" style={{ background: "var(--surface)", color: "var(--on-surface)", fontFamily: "\"Source Sans Pro\", sans-serif" }}>
        <PwaBoot />
        <SeasonProvider>
          {children}
          <BackStepButton />
        </SeasonProvider>
      </body>
    </html>
  );
}
