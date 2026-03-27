"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { useSeason } from "@/components/lipno/SeasonProvider";
import {
  lipnoAttractions,
  type LipnoAttractionCategory,
  type LipnoAttractionDetail,
} from "@/lib/lipno-attractions";
import { lipnoCalendarEvents } from "@/lib/lipno-calendar";
import { lipnoBrand } from "@/lib/lipno-data";

type Category = LipnoAttractionCategory | "vse";

const filters: { value: Category; label: string }[] = [
  { value: "vse", label: "Vše" },
  { value: "rodiny", label: "Rodiny" },
  { value: "sport", label: "Sport" },
  { value: "wellness", label: "Relax" },
  { value: "lanovky", label: "Lanovky" },
];

const categoryMeta: Record<LipnoAttractionCategory, { label: string; bg: string; color: string }> = {
  rodiny: { label: "Rodiny", bg: "rgba(220,252,231,0.96)", color: "#15803d" },
  sport: { label: "Sport", bg: "rgba(219,234,254,0.96)", color: "#1d4ed8" },
  wellness: { label: "Relax", bg: "rgba(254,243,199,0.96)", color: "#b45309" },
  lanovky: { label: "Lanovky", bg: "rgba(224,231,255,0.96)", color: lipnoBrand.primary },
};

const mapPointBySlug: Record<string, string> = {
  "stezka-korunami-stromu": "stezka",
  "kralovstvi-lesa": "kralovstvi",
  "aquaworld-lipno": "aquaworld",
  "lanove-drahy": "lanovka-express",
};

function AttractionCard({ item }: { item: LipnoAttractionDetail }) {
  const category = categoryMeta[item.category];
  const pointId = mapPointBySlug[item.slug];

  return (
    <article
      className="overflow-hidden rounded-[1.9rem] bg-white"
      style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
    >
      <div className="relative h-52 w-full">
        <Image src={item.heroImage} alt={item.imageAlt} fill className="object-cover" unoptimized />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(5,21,54,0.76))]" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span
            className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
            style={{ background: category.bg, color: category.color }}
          >
            {category.label}
          </span>
          <span
            className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
            style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}
          >
            {item.openingHours[0]}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>
          {item.title}
        </h3>
        <p className="mt-2 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>
          {item.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
          {item.teaser}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={`/zazitky/${item.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold"
            style={{ background: lipnoBrand.primary, color: "#fff" }}
          >
            Detail atrakce
          </Link>
          {pointId ? (
            <Link
              href={`/mapa?point=${pointId}`}
              className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold"
              style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
            >
              Mapa
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function LipnoExperiencesPage() {
  const { season } = useSeason();
  const [active, setActive] = useState<Category>("vse");
  const isWinter = season === "zima";

  const heroText = isWinter
    ? {
        label: "Zimní katalog",
        title: "Zážitky na Lipně bez kopie homepage",
        text: "Tahle stránka je teď postavená jako samostatný katalog. Rychle najdeš rodinné jistoty, indoor varianty i hlavní atrakce, které dávají smysl v zimním režimu.",
      }
    : {
        label: "Letní katalog",
        title: "Co dnes na Lipně?",
        text: "Místo další homepage tu máš čistý přehled zážitků. Rodiny, sport, voda i indoor jistoty v jednom katalogu s rychlým detailem a mapou.",
      };

  const visibleAttractions = useMemo(
    () => lipnoAttractions.filter((item) => active === "vse" || item.category === active),
    [active],
  );

  const featuredAttractions = useMemo(() => {
    const featuredSlugs = isWinter
      ? ["stezka-korunami-stromu", "aquaworld-lipno", "lanove-drahy"]
      : ["stezka-korunami-stromu", "kralovstvi-lesa", "aquaworld-lipno"];

    return featuredSlugs
      .map((slug) => lipnoAttractions.find((item) => item.slug === slug))
      .filter((item): item is LipnoAttractionDetail => Boolean(item))
      .filter((item) => active === "vse" || item.category === active);
  }, [active, isWinter]);

  const familyAttractions = visibleAttractions.filter((item) => item.category === "rodiny");
  const sportAttractions = visibleAttractions.filter((item) => item.category === "sport" || item.category === "lanovky");
  const relaxAttractions = visibleAttractions.filter((item) => item.category === "wellness");
  const calendarPreview = lipnoCalendarEvents.slice(0, 3);

  return (
    <>
      <LipnoTopBar />
      <main className="max-w-2xl mx-auto pt-24 pb-4" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-6"
            style={{
              background: isWinter
                ? "linear-gradient(135deg, #eef4ff 0%, #ffffff 62%, #f1f7ff 100%)"
                : "linear-gradient(135deg, rgba(0,30,96,0.08) 0%, rgba(0,150,57,0.08) 100%)",
              boxShadow: "0 14px 30px rgba(12,74,110,0.08)",
            }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: isWinter ? "#1d4ed8" : lipnoBrand.secondary }}>
              {heroText.label}
            </p>
            <h1 className="mt-3 max-w-lg font-headline text-3xl font-extrabold tracking-tight md:text-[2.7rem]" style={{ color: lipnoBrand.primary }}>
              {heroText.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              {heroText.text}
            </p>
          </div>
        </section>

        <section className="px-4 pt-5">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {filters.map((filter) => {
              const selected = active === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActive(filter.value)}
                  className="shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all active:scale-95"
                  style={selected
                    ? { background: lipnoBrand.primary, color: "#fff" }
                    : { background: "#fff", color: lipnoBrand.ink, border: "1px solid rgba(12,74,110,0.08)" }}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </section>

        {featuredAttractions.length > 0 ? (
          <section className="px-4 pt-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>
                  Dnes doporučujeme
                </h2>
                <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                  Nejsilnější start dne bez přepínání mezi dalšími sekcemi aplikace.
                </p>
              </div>
            </div>
            <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
              <div className="flex gap-4">
                {featuredAttractions.map((item) => (
                  <div key={item.slug} className="w-[18.5rem] shrink-0">
                    <AttractionCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {!isWinter ? (
          <section className="px-4 pt-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>
                  Co se děje na Lipně
                </h2>
                <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                  Aktuální akce a program, které dávají smysl přimíchat do dne v areálu.
                </p>
              </div>
              <Link href="/kalendar" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>
                Kalendář →
              </Link>
            </div>
            <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
              <div className="flex gap-4">
                {calendarPreview.map((item) => (
                  <article
                    key={item.slug}
                    className="w-[18.5rem] shrink-0 overflow-hidden rounded-[1.9rem] bg-white"
                    style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                  >
                    <div className="relative h-44 w-full">
                      <Image src={item.image} alt={item.imageAlt} fill className="object-cover" unoptimized />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(5,21,54,0.74))]" />
                      {item.endLabel ? (
                        <div className="absolute left-4 top-4">
                          <span
                            className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                            style={{ background: "rgba(254,240,138,0.96)", color: "#854d0e" }}
                          >
                            {item.endLabel}
                          </span>
                        </div>
                      ) : null}
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                          style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                        >
                          {item.dateLabel}
                        </span>
                        {item.timeLabel ? (
                          <span
                            className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                            style={{ background: lipnoBrand.secondarySoft, color: lipnoBrand.secondary }}
                          >
                            {item.timeLabel}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-3 font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                        {item.teaser}
                      </p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                        style={{ background: lipnoBrand.primary, color: "#fff" }}
                      >
                        Detail akce
                        <span className="material-symbols-outlined">open_in_new</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {active === "vse" ? (
          <>
            {familyAttractions.length > 0 ? (
              <section className="px-4 pt-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>
                      Pro rodiny
                    </h2>
                    <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                      Hlavní rodinné atrakce, které dávají smysl jako půlden nebo celý den.
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {familyAttractions.map((item) => (
                    <AttractionCard key={item.slug} item={item} />
                  ))}
                </div>
              </section>
            ) : null}

            {sportAttractions.length > 0 ? (
              <section className="px-4 pt-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>
                      Aktivně a sport
                    </h2>
                    <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                      Lanovky, bikepark a další body, kolem kterých se staví aktivní den v resortu.
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {sportAttractions.map((item) => (
                    <AttractionCard key={item.slug} item={item} />
                  ))}
                </div>
              </section>
            ) : null}

            {relaxAttractions.length > 0 ? (
              <section className="px-4 pt-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>
                      Když chceš jistotu
                    </h2>
                    <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                      Indoor nebo pohodovější varianta, která funguje i při slabším počasí.
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {relaxAttractions.map((item) => (
                    <AttractionCard key={item.slug} item={item} />
                  ))}
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <section className="px-4 pt-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>
                  Výběr podle filtru
                </h2>
                <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                  Jen relevantní zážitky pro vybraný typ programu.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              {visibleAttractions.map((item) => (
                <AttractionCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        )}

        <section className="px-4 pt-8 pb-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/mapa"
              className="block rounded-[2rem] p-6"
              style={{ background: "#fff", boxShadow: "0 14px 30px rgba(12,74,110,0.08)", border: "1px solid rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>
                Orientace v areálu
              </p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>
                Otevřít mapu
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Přepni si body v mapě a podívej se, kde přesně atrakce leží v rámci resortu.
              </p>
            </Link>
            <Link
              href="/kalendar"
              className="block rounded-[2rem] p-6"
              style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">
                Program resortu
              </p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">
                Otevřít kalendář akcí
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/82">
                Když chceš do dne přidat akci, show nebo festival, pokračuj rovnou do kalendáře.
              </p>
            </Link>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
