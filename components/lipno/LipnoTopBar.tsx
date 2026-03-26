"use client";

import Link from "next/link";
import SeasonToggle from "@/components/lipno/SeasonToggle";
import { lipnoBrand } from "@/lib/lipno-data";

export default function LipnoTopBar() {
  return (
    <header
      className="fixed top-0 w-full z-50 glass-header"
      style={{ borderBottom: "1px solid rgba(12,74,110,0.08)" }}
    >
      <div className="max-w-2xl mx-auto flex justify-between items-center px-5 h-[84px] gap-3">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <img
            src={lipnoBrand.logoUrl}
            alt={lipnoBrand.logoAlt}
            className="h-10 w-auto shrink-0"
          />
        </Link>
        <div className="flex items-center gap-3 shrink-0">
          <SeasonToggle compact />
          <a
            href="https://www.lipno.info/infocentrum.html"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors active:scale-90"
            style={{ color: lipnoBrand.primary, background: "rgba(0,150,57,0.08)" }}
          >
            <span className="material-symbols-outlined">info</span>
          </a>
        </div>
      </div>
    </header>
  );
}
