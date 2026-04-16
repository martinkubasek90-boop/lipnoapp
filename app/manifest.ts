import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lipno.info",
    short_name: "Lipno",
    description: "Zážitky, počasí, otevírací doby, kalendář akcí a praktické informace pro Lipno.",
    id: "/",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#001E60",
    orientation: "portrait",
    lang: "cs",
    categories: ["travel", "lifestyle", "sports"],
    icons: [
      { src: "/icons/icon-72.png", sizes: "72x72", type: "image/png" },
      { src: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
      { src: "/icons/icon-128.png", sizes: "128x128", type: "image/png" },
      { src: "/icons/icon-144.png", sizes: "144x144", type: "image/png" },
      { src: "/icons/icon-152.png", sizes: "152x152", type: "image/png" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-384.png", sizes: "384x384", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      {
        name: "Počasí",
        short_name: "Počasí",
        description: "Aktuální počasí na Lipně",
        url: "/pocasi?source=pwa-shortcut",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
      {
        name: "Mapa",
        short_name: "Mapa",
        description: "Mapa areálu a služeb",
        url: "/mapa?source=pwa-shortcut",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
      {
        name: "Kalendář",
        short_name: "Kalendář",
        description: "Akce a program v resortu",
        url: "/kalendar?source=pwa-shortcut",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
    ],
  };
}
