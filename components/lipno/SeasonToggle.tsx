"use client";

import { lipnoBrand, lipnoSeasonCopy, type LipnoSeason } from "@/lib/lipno-data";
import { useSeason } from "@/components/lipno/SeasonProvider";

export default function SeasonToggle({ compact = false }: { compact?: boolean }) {
  const { season, setSeason } = useSeason();

  return (
    <div
      className="inline-flex rounded-full p-1"
      style={{ background: compact ? "rgba(0,30,96,0.08)" : "rgba(255,255,255,0.14)" }}
    >
      {(["leto", "zima"] as const).map((item) => (
        <button
          key={item}
          onClick={() => setSeason(item as LipnoSeason)}
          className="rounded-full px-3 py-1.5 text-xs font-bold transition-all"
          style={season === item ? {
            background: "#fff",
            color: lipnoBrand.primary,
            boxShadow: compact ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
          } : {
            color: compact ? lipnoBrand.muted : "rgba(255,255,255,0.76)",
          }}
        >
          {lipnoSeasonCopy[item].label}
        </button>
      ))}
    </div>
  );
}
