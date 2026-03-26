"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { useSeason } from "@/components/lipno/SeasonProvider";
import { lipnoAttractions } from "@/lib/lipno-attractions";
import { lipnoBrand, lipnoEvents, lipnoPlannerTips, lipnoSeasonCopy, type LipnoEvent } from "@/lib/lipno-data";

type Category = LipnoEvent["category"] | "vše";

const filters: { value: Category; label: string }[] = [
  { value: "vše", label: "Vše" },
  { value: "rodiny", label: "Rodiny" },
  { value: "sport", label: "Sport" },
  { value: "festival", label: "Festivaly" },
  { value: "vecer", label: "Večer" },
];

export default function LipnoPlannerPage() {
  const { season } = useSeason();
  const [active, setActive] = useState<Category>("vše");
  const items = useMemo(
    () => lipnoEvents.filter((item) => item.seasons.includes(season) && (active === "vše" || item.category === active)),
    [active, season],
  );
  const tipText = season === "leto" ? "Jezero a rodinné aktivity" : "Lanovky a zimní program";
  const featuredAttractions = (season === "leto"
    ? lipnoAttractions.filter((item) => item.slug !== "aquaworld-lipno").slice(0, 3)
    : lipnoAttractions.filter((item) => ["stezka-korunami-stromu", "aquaworld-lipno"].includes(item.slug))).slice(0, 3);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div className="rounded-[2rem] p-5 md:p-6" style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.09) 0%, rgba(0,150,57,0.09) 100%)" }}>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight md:text-[2.6rem]" style={{ color: lipnoBrand.primary }}>
              Plánovat pobyt
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Kalendář akcí, doporučení na dnešek a jednoduché tipy, jak poskládat {lipnoSeasonCopy[season].label.toLowerCase()} den v resortu bez zbytečných prostojů.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-[1.4rem] p-4" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Akce dnes</p>
                <p className="mt-2 font-headline text-2xl font-black" style={{ color: lipnoBrand.primary }}>{Math.min(items.length, 3)}</p>
              </div>
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.secondarySoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.secondary }}>Tip na den</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.secondary }}>{tipText}</p>
              </div>
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.primarySoft }}>
                <p className="text-xs font-semibold leading-tight" style={{ color: lipnoBrand.primary }}>Uložit si</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>vlastní plán</p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex gap-2.5 overflow-x-auto hide-scrollbar px-4 pb-2 pt-5">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className="flex-shrink-0 px-5 py-2.5 rounded-full font-semibold text-sm transition-all active:scale-95"
              style={active === filter.value ? {
                background: `linear-gradient(135deg, ${lipnoBrand.primary}, ${lipnoBrand.secondary})`,
                color: "#fff",
              } : {
                background: "#fff",
                color: lipnoBrand.ink,
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <section className="px-4 pt-4 space-y-3">
          {items.map((event) => (
            <a
              key={event.id}
              href={event.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] p-5 block"
              style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                    {event.dateLabel}
                  </span>
                  <h2 className="mt-3 font-headline text-lg font-extrabold leading-snug" style={{ color: lipnoBrand.ink }}>{event.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{event.summary}</p>
                </div>
                <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>arrow_outward</span>
              </div>
            </a>
          ))}
        </section>

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Hlavní atrakce</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                {season === "leto" ? "Stezka, Království lesa a lanovky jako základ letního dne." : "Stezka a Aquaworld jako jistota i mimo hlavní program."}
              </p>
            </div>
            <Link href="/zazitky" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
          </div>
          <div className="mt-4 space-y-3">
            {featuredAttractions.map((item) => (
              <Link
                key={item.slug}
                href={`/zazitky/${item.slug}`}
                className="rounded-[1.8rem] p-5 block"
                style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-headline text-lg font-extrabold leading-snug" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="rounded-[2rem] p-5" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
            <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Tipper na dnešek</h2>
            <div className="mt-4 space-y-3">
              {lipnoPlannerTips[season].map((tip) => (
                <div key={tip.id} className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.primarySoft }}>
                  <p className="text-sm font-black" style={{ color: lipnoBrand.primary }}>{tip.title}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
