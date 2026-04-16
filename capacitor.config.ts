import type { CapacitorConfig } from "@capacitor/cli";

const serverUrl = process.env.CAPACITOR_SERVER_URL || "https://lipnoapp.vercel.app";

const config: CapacitorConfig = {
  appId: "info.lipno.app",
  appName: "Lipno",
  webDir: "public",
  server: {
    url: serverUrl,
    cleartext: false,
  },
  ios: {
    contentInset: "automatic",
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
