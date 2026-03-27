"use client";

import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { useSeason } from "@/components/lipno/SeasonProvider";
import { lipnoAttractions } from "@/lib/lipno-attractions";
import { lipnoRentalDetails } from "@/lib/lipno-catalog";
import { lipnoCalendarEvents } from "@/lib/lipno-calendar";
import { lipnoGastroDetails } from "@/lib/lipno-gastro";
import { lipnoBrand } from "@/lib/lipno-data";
import { getLipnoOpenState } from "@/lib/lipno-schedule";

export default function LipnoExperiencesPage() {
  const { season } = useSeason();
  const isWinter = season === "zima";

  const calendarCards = lipnoCalendarEvents.slice(0, 4);
  const activityCards = lipnoAttractions
    .filter((item) => (isWinter ? item.slug !== "kralovstvi-lesa" && item.slug !== "bikepark-lipno" : true))
    .slice(0, 4);
  const rentalCards = lipnoRentalDetails.slice(0, 6);
  const gastroCards = lipnoGastroDetails.slice(0, 4);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
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
              Zážitky na Lipně
            </p>
            <h1 className="mt-3 max-w-lg font-headline text-3xl font-extrabold tracking-tight md:text-[2.7rem]" style={{ color: lipnoBrand.primary }}>
              Všechny hlavní zážitky a služby v jednom přehledu
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Tady nechávám jen čtyři silné bloky, které už fungují na homepage: kalendář, aktivity, půjčovny a gastro.
            </p>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Kalendář</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Aktuální akce převzaté z oficiálního kalendáře Lipno.info.</p>
            </div>
            <Link href="/kalendar" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
          </div>
          <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
            <div className="flex gap-4">
              {calendarCards.map((item) => (
                <article
                  key={item.slug}
                  className="w-[18.5rem] shrink-0 overflow-hidden rounded-[1.9rem] bg-white"
                  style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                >
                  <div className="relative h-44 w-full">
                    <Image src={item.image} alt={item.imageAlt} fill className="object-cover" unoptimized />
                    <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(180deg, transparent, rgba(5,21,54,0.72))" }} />
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
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                        {item.dateLabel}
                      </span>
                      {item.timeLabel ? (
                        <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.secondarySoft, color: lipnoBrand.secondary }}>
                          {item.timeLabel}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
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

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Aktivity</h2>
              <p className="text-xs mt-0.5" style={{ color: lipnoBrand.muted }}>Největší zážitky resortu s rychlým detailem a kontaktem.</p>
            </div>
            <Link href="/zazitky" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
          </div>
          <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
            <div className="flex gap-4">
              {activityCards.map((item) => {
                const openState = getLipnoOpenState(item.openingHours);
                return (
                  <article
                    key={item.slug}
                    className="w-[18.5rem] shrink-0 overflow-hidden rounded-[1.9rem] bg-white"
                    style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                  >
                    <div className="relative h-44 w-full">
                      <Image src={item.heroImage} alt={item.imageAlt} fill className="object-cover" unoptimized />
                      <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(180deg, transparent, rgba(5,21,54,0.72))" }} />
                      <div className="absolute left-4 top-4">
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                          style={
                            openState.open === true
                              ? { background: "rgba(220,252,231,0.96)", color: "#15803d" }
                              : openState.open === false
                                ? { background: "rgba(254,226,226,0.96)", color: "#b91c1c" }
                                : { background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }
                          }
                        >
                          {openState.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                      <div className="mt-4 flex items-center gap-3">
                        <Link
                          href={`/zazitky/${item.slug}`}
                          className="inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold"
                          style={{ background: lipnoBrand.primary, color: "#fff" }}
                        >
                          Detail
                        </Link>
                        <a
                          href={`tel:${item.phone.replace(/\s+/g, "")}`}
                          className="inline-flex min-w-[6.25rem] items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                          style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                          aria-label={`Zavolat ${item.title}`}
                        >
                          <span className="material-symbols-outlined">call</span>
                          Zavolat
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Půjčovny</h2>
              <p className="text-xs mt-0.5" style={{ color: lipnoBrand.muted }}>Rychlý výběr vybavení s detailem a přímým zavoláním.</p>
            </div>
            <Link href="/pujcovny" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
          </div>
          <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
            <div className="flex gap-4">
              {rentalCards.map((item) => {
                const openState = getLipnoOpenState(item.openingHours);
                return (
                  <article
                    key={item.slug}
                    className="w-[18.5rem] shrink-0 overflow-hidden rounded-[1.9rem] bg-white"
                    style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                  >
                    <div className="relative h-44 w-full">
                      <Image src={item.heroImage} alt={item.imageAlt} fill className="object-cover" unoptimized />
                      <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(180deg, transparent, rgba(5,21,54,0.72))" }} />
                      <div className="absolute left-4 top-4">
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                          style={
                            openState.open === true
                              ? { background: "rgba(220,252,231,0.96)", color: "#15803d" }
                              : openState.open === false
                                ? { background: "rgba(254,226,226,0.96)", color: "#b91c1c" }
                                : { background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }
                          }
                        >
                          {openState.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                      <div className="mt-4 flex items-center gap-3">
                        <Link
                          href={`/pujcovny/${item.slug}`}
                          className="inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold"
                          style={{ background: lipnoBrand.primary, color: "#fff" }}
                        >
                          Detail
                        </Link>
                        <a
                          href={`tel:${item.phone.replace(/\s+/g, "")}`}
                          className="inline-flex min-w-[6.25rem] items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                          style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                          aria-label={`Zavolat ${item.title}`}
                        >
                          <span className="material-symbols-outlined">call</span>
                          Zavolat
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Gastro</h2>
              <p className="text-xs mt-0.5" style={{ color: lipnoBrand.muted }}>Výběr podniků s rychlým detailem a okamžitým zavoláním.</p>
            </div>
            <Link href="/gastro" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
          </div>
          <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
            <div className="flex gap-4">
              {gastroCards.map((item) => {
                const openState = getLipnoOpenState(item.openingHours);
                return (
                  <article
                    key={item.slug}
                    className="w-[18.5rem] shrink-0 overflow-hidden rounded-[1.9rem] bg-white"
                    style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                  >
                    <div className="relative h-44 w-full">
                      <Image src={item.heroImage} alt={item.imageAlt} fill className="object-cover" unoptimized />
                      <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(180deg, transparent, rgba(5,21,54,0.72))" }} />
                      <div className="absolute left-4 top-4">
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                          style={
                            openState.open === true
                              ? { background: "rgba(220,252,231,0.96)", color: "#15803d" }
                              : openState.open === false
                                ? { background: "rgba(254,226,226,0.96)", color: "#b91c1c" }
                                : { background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }
                          }
                        >
                          {openState.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                      <div className="mt-4 flex items-center gap-3">
                        <Link
                          href={`/gastro/${item.slug}`}
                          className="inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold"
                          style={{ background: lipnoBrand.primary, color: "#fff" }}
                        >
                          Detail
                        </Link>
                        <a
                          href={`tel:${item.phone.replace(/\s+/g, "")}`}
                          className="inline-flex min-w-[6.25rem] items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                          style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                          aria-label={`Zavolat ${item.title}`}
                        >
                          <span className="material-symbols-outlined">call</span>
                          Zavolat
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-4">
          <Link
            href="/mapa"
            className="block overflow-hidden rounded-[2rem]"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
          >
            <div className="relative min-h-[13rem] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,18,58,0.10),rgba(0,18,58,0.34),rgba(0,18,58,0.52))]" />
              <div className="relative z-10 max-w-[24rem]">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/84" style={{ textShadow: "0 4px 14px rgba(0,0,0,0.28)" }}>
                  Orientace v areálu
                </p>
                <h2 className="mt-3 font-headline text-3xl font-extrabold leading-tight text-white" style={{ textShadow: "0 10px 28px rgba(0,0,0,0.36)" }}>
                  Kde jednotlivá místa najdeš v mapě
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/94" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.28)" }}>
                  Otevři interaktivní mapu a přepínej mezi atrakcemi, gastrem, službami a dopravou podle konkrétní lokality.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-black shadow-lg" style={{ background: "#ffffff", color: lipnoBrand.primary, boxShadow: "0 14px 30px rgba(0,0,0,0.16)" }}>
                  Otevřít mapu
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
