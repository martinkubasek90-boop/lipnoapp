"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { LipnoSeason } from "@/lib/lipno-data";

type SeasonContextValue = {
  season: LipnoSeason;
  setSeason: (season: LipnoSeason) => void;
};

const STORAGE_KEY = "lipno-season";

const SeasonContext = createContext<SeasonContextValue | null>(null);

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [season, setSeason] = useState<LipnoSeason>("leto");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "leto" || stored === "zima") {
      setSeason(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, season);
  }, [season]);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
}

export function useSeason() {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error("useSeason must be used within SeasonProvider");
  }

  return context;
}
