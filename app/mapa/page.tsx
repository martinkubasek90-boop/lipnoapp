"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoMapImage, lipnoMapPoints, type LipnoMapPointCategory } from "@/lib/lipno-map";

const categoryMeta: Record<LipnoMapPointCategory | "vse", { label: string; bg: string; color: string }> = {
  vse: { label: "Vše", bg: "#ffffff", color: lipnoBrand.ink },
  zazitky: { label: "Zážitky", bg: "rgba(0,150,57,0.12)", color: lipnoBrand.secondary },
  gastro: { label: "Gastro", bg: "rgba(234,88,12,0.12)", color: "#c2410c" },
  sluzby: { label: "Služby", bg: "rgba(0,30,96,0.10)", color: lipnoBrand.primary },
  doprava: { label: "Doprava", bg: "rgba(59,130,246,0.12)", color: "#1d4ed8" },
};

export default function LipnoMapPage() {
  const [activeCategory, setActiveCategory] = useState<LipnoMapPointCategory | "vse">("vse");
  const [activeId, setActiveId] = useState<string>(lipnoMapPoints[0]?.id ?? "");

  const visiblePoints = useMemo(
    () => lipnoMapPoints.filter((item) => activeCategory === "vse" || item.category === activeCategory),
    [activeCategory],
  );

  const activePoint = visiblePoints.find((item) => item.id === activeId) ?? visiblePoints[0] ?? lipnoMapPoints[0];

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.10) 0%, rgba(0,150,57,0.08) 100%)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Rodinný areál Lipno</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight" style={{ color: lipnoBrand.primary }}>
              Interaktivní mapa areálu
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Klikni na bod v mapě nebo vyber místo ze seznamu. Detail se okamžitě propíše vpravo dole včetně kontaktu, provozu a odkazu na podrobnost.
            </p>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {Object.entries(categoryMeta).map(([key, value]) => {
              const active = activeCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key as LipnoMapPointCategory | "vse")}
                  className="shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-all"
                  style={active
                    ? { background: lipnoBrand.primary, color: "#fff" }
                    : { background: value.bg, color: value.color }}
                >
                  {value.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="px-4 pt-4">
          <div className="overflow-hidden rounded-[2rem] bg-white" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 16px 34px rgba(12,74,110,0.10)" }}>
            <div
              className="relative w-full bg-slate-100"
              style={{ aspectRatio: `${lipnoMapImage.width} / ${lipnoMapImage.height}` }}
            >
              <Image
                src={lipnoMapImage.src}
                alt={lipnoMapImage.alt}
                fill
                className="object-contain"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001E60]/10 via-transparent to-transparent" />
              {visiblePoints.map((point) => {
                const meta = categoryMeta[point.category];
                const active = activePoint?.id === point.id;
                return (
                  <button
                    key={point.id}
                    type="button"
                    onClick={() => setActiveId(point.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 px-2.5 py-1 text-[11px] font-black shadow-lg transition-transform"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      background: active ? lipnoBrand.primary : "#fff",
                      color: active ? "#fff" : meta.color,
                      borderColor: active ? "rgba(255,255,255,0.85)" : meta.color,
                      transform: `translate(-50%, -50%) scale(${active ? 1.08 : 1})`,
                    }}
                    aria-label={point.title}
                  >
                    {point.code}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-4 p-4 md:grid-cols-[1.15fr_0.95fr] md:p-5">
              {activePoint ? (
                <div className="rounded-[1.6rem] p-5" style={{ background: "#f8fbff", border: "1px solid rgba(12,74,110,0.08)" }}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em]" style={{ background: categoryMeta[activePoint.category].bg, color: categoryMeta[activePoint.category].color }}>
                        {activePoint.code} · {categoryMeta[activePoint.category].label}
                      </span>
                      <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>{activePoint.title}</h2>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{activePoint.summary}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] p-4" style={{ background: "#fff" }}>
                      <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Lokalita</p>
                      <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.ink }}>{activePoint.location}</p>
                    </div>
                    <div className="rounded-[1.2rem] p-4" style={{ background: "#fff" }}>
                      <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Kontakt</p>
                      <div className="mt-2 space-y-1 text-sm font-bold">
                        {activePoint.phone ? <p style={{ color: lipnoBrand.primary }}>{activePoint.phone}</p> : <p style={{ color: lipnoBrand.muted }}>Přes infocentrum / oficiální detail</p>}
                        {activePoint.email ? <p className="break-all" style={{ color: lipnoBrand.primary }}>{activePoint.email}</p> : null}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.2rem] p-4" style={{ background: "#fff" }}>
                    <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Otevírací doba</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                      {activePoint.openingHours.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span style={{ color: lipnoBrand.secondary }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activePoint.href ? (
                    activePoint.href.startsWith("http") ? (
                      <a
                        href={activePoint.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                        style={{ background: lipnoBrand.primary, color: "#fff" }}
                      >
                        {activePoint.hrefLabel ?? "Otevřít detail"}
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                      </a>
                    ) : (
                      <Link
                        href={activePoint.href}
                        className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                        style={{ background: lipnoBrand.primary, color: "#fff" }}
                      >
                        {activePoint.hrefLabel ?? "Otevřít detail"}
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>
                    )
                  ) : null}
                </div>
              ) : null}

              <div>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>Místa v mapě</h2>
                  <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>{visiblePoints.length} bodů</p>
                </div>
                <div className="mt-4 max-h-[24rem] space-y-2 overflow-auto pr-1">
                  {visiblePoints.map((point) => {
                    const active = activePoint?.id === point.id;
                    const meta = categoryMeta[point.category];
                    return (
                      <button
                        key={point.id}
                        type="button"
                        onClick={() => setActiveId(point.id)}
                        className="block w-full rounded-[1.3rem] p-4 text-left transition-all"
                        style={active
                          ? { background: lipnoBrand.primarySoft, border: "1px solid rgba(0,30,96,0.16)" }
                          : { background: "rgba(0,30,96,0.03)", border: "1px solid transparent" }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em]" style={{ background: meta.bg, color: meta.color }}>
                                {point.code}
                              </span>
                              <span className="text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: lipnoBrand.muted }}>
                                {meta.label}
                              </span>
                            </div>
                            <h3 className="mt-2 font-headline text-base font-extrabold" style={{ color: lipnoBrand.ink }}>{point.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{point.summary}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.lipno.info/lipno.html#rodinny-areal-lipno"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Zdroj mapy</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Oficiální mapa areálu</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Původní rozcestník Rodinného areálu Lipno na Lipno.info.</p>
            </a>
            <Link
              href="/gastro"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: lipnoBrand.secondarySoft, border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Nové gastro</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Restaurace a kavárny</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Samostatný přehled gastro podniků a jejich detailových stránek.</p>
            </Link>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
