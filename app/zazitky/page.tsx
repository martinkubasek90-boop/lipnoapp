"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { useSeason } from "@/components/lipno/SeasonProvider";
import { lipnoBrand, lipnoExperiences, lipnoRentals, type LipnoExperience } from "@/lib/lipno-data";

type Category = LipnoExperience["category"] | "vše";

const filters: { value: Category; label: string }[] = [
  { value: "vše", label: "Vše" },
  { value: "rodiny", label: "Rodiny" },
  { value: "sport", label: "Sport" },
  { value: "voda", label: "Voda" },
  { value: "adrenalin", label: "Adrenalin" },
  { value: "wellness", label: "Relax" },
];

export default function LipnoExperiencesPage() {
  const { season } = useSeason();
  const [active, setActive] = useState<Category>("vše");
  const isWinter = season === "zima";
  const seasonIntro = isWinter
    ? "Zimní provoz, rodinné sjezdovky, indoor jistoty a kratší přesuny v jednom režimu."
    : "Jezero, rodinné top atrakce, voda i lehký adrenalin v jednom letním přehledu.";
  const seasonHighlight = isWinter
    ? {
        label: "Zimní režim",
        title: "Skiareál, lanovky a večerní program bez chaosu",
        text: "Začni skiareálem, po obědě přepni na Fox tipy, indoor zázemí nebo večerní program v areálu.",
        href: "/servis",
        cta: "Otevřít zimní servis",
      }
    : {
        label: "Letní režim",
        title: "Stezka, půjčovny a voda bez zbytečného čekání",
        text: "Poskládej den kolem hlavních atrakcí, jezera a půjčoven tak, aby rodina nečekala ve špičce.",
        href: "https://www.lipno.info/pujcovny.html",
        cta: "Otevřít půjčovny",
      };

  const items = useMemo(
    () => lipnoExperiences.filter((item) => item.seasons.includes(season) && (active === "vše" || item.category === active)),
    [active, season],
  );
  const seasonalItems = lipnoExperiences.filter((item) => item.seasons.includes(season));
  const seasonalRentals = lipnoRentals.filter((item) => !item.seasons || item.seasons.includes(season)).slice(0, 2);
  const allSeasonCount = seasonalItems.filter((item) => item.seasons.length === 2).length;
  const familyCount = seasonalItems.filter((item) => item.category === "rodiny").length;

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-5 md:p-6"
            style={{
              background: isWinter
                ? "linear-gradient(135deg, rgba(0,30,96,0.10) 0%, rgba(43,128,221,0.10) 100%)"
                : "linear-gradient(135deg, rgba(0,30,96,0.08) 0%, rgba(0,150,57,0.08) 100%)",
            }}
          >
            <h1 className="font-headline text-3xl font-extrabold tracking-tight md:text-[2.7rem]" style={{ color: lipnoBrand.primary }}>
              Zážitky na Lipně
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              {seasonIntro}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-[1.4rem] p-4" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Celkem tipů</p>
                <p className="mt-2 font-headline text-2xl font-black" style={{ color: lipnoBrand.primary }}>{seasonalItems.length}</p>
              </div>
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.secondarySoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.secondary }}>Celoročně</p>
                <p className="mt-2 font-headline text-2xl font-black" style={{ color: lipnoBrand.secondary }}>{allSeasonCount}</p>
              </div>
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.accentSoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.accent }}>Rodiny</p>
                <p className="mt-2 font-headline text-2xl font-black" style={{ color: lipnoBrand.accent }}>{familyCount}</p>
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

        <section className="px-4 pt-4">
          {seasonHighlight.href.startsWith("http") ? (
            <a
              href={seasonHighlight.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-[2rem] p-5"
              style={{
                background: isWinter
                  ? "linear-gradient(135deg, #001a46 0%, #0b2f6f 62%, #2d85dd 100%)"
                  : "linear-gradient(135deg, #002a73 0%, #0a5ea3 62%, #00a85a 100%)",
                boxShadow: "0 16px 34px rgba(12,74,110,0.16)",
              }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/72">{seasonHighlight.label}</p>
              <h2 className="mt-3 max-w-sm font-headline text-2xl font-extrabold leading-tight text-white">{seasonHighlight.title}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/82">{seasonHighlight.text}</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
                {seasonHighlight.cta}
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </a>
          ) : (
            <Link
              href={seasonHighlight.href}
              className="block rounded-[2rem] p-5"
              style={{
                background: isWinter
                  ? "linear-gradient(135deg, #001a46 0%, #0b2f6f 62%, #2d85dd 100%)"
                  : "linear-gradient(135deg, #002a73 0%, #0a5ea3 62%, #00a85a 100%)",
                boxShadow: "0 16px 34px rgba(12,74,110,0.16)",
              }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/72">{seasonHighlight.label}</p>
              <h2 className="mt-3 max-w-sm font-headline text-2xl font-extrabold leading-tight text-white">{seasonHighlight.title}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/82">{seasonHighlight.text}</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
                {seasonHighlight.cta}
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </Link>
          )}
        </section>

        {isWinter ? null : (
          <section className="px-4 pt-4">
            <div className="rounded-[2rem] p-5" style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Letní půjčovny</p>
                  <h2 className="mt-2 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Nejlepší start u jezera</h2>
                </div>
                <a href="https://www.lipno.info/pujcovny.html" target="_blank" rel="noreferrer" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</a>
              </div>
              <div className="mt-4 space-y-3">
                {seasonalRentals.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-[1.4rem] p-4"
                    style={{ background: lipnoBrand.secondarySoft }}
                  >
                    <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.area}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.summary}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 pt-4 space-y-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] p-5 block"
              style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                      {item.season}
                    </span>
                    <span className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>
                      {item.duration}
                    </span>
                  </div>
                  <h2 className="mt-3 font-headline text-lg font-extrabold leading-snug" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.summary}</p>
                </div>
                <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>arrow_outward</span>
              </div>
              <p className="mt-3 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.highlight}</p>
            </a>
          ))}
        </section>

        <section className="px-4 pt-8 pb-4">
          <Link
            href="/servis"
            className="block rounded-[2rem] p-5"
            style={{
              background: isWinter ? "#eef4ff" : "#fff",
              boxShadow: "0 14px 30px rgba(12,74,110,0.08)",
              border: "1px solid rgba(12,74,110,0.08)",
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-headline text-3xl font-extrabold" style={{ color: lipnoBrand.primary }}>Servis a vstupenky</h2>
              <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>arrow_forward</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              {isWinter
                ? "Lanovky, webkamery, otevírací doby a rychlý vstup do skipasů a zimního servisu."
                : "Půjčovny, otevírací doby, webkamery a letní servis přímo z oficiálního webu Lipna."}
            </p>
          </Link>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
