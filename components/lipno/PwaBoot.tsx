"use client";

import { useEffect } from "react";

export default function PwaBoot() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const register = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js");
      } catch {
        // The app must remain usable even when service workers are blocked.
      }
    };

    window.addEventListener("load", register);

    return () => {
      window.removeEventListener("load", register);
    };
  }, []);

  return null;
}
