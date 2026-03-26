"use client";

import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import SeasonToggle from "@/components/lipno/SeasonToggle";
import { useSeason } from "@/components/lipno/SeasonProvider";
import { lipnoBrand, lipnoInfoCenter, lipnoRentals, lipnoServiceLinks, lipnoSeasonCopy, lipnoServiceModules } from "@/lib/lipno-data";

export default function LipnoServicePage() {
  const { season } = useSeason();
  const serviceItems = lipnoServiceLinks.filter((item) => !item.seasons || item.seasons.includes(season));
  const rentals = lipnoRentals.filter((item) => !item.seasons || item.seasons.includes(season));
  const serviceModules = lipnoServiceModules[season];
  const isWinter = season === "zima";
  const seasonalService = isWinter
    ? {
        summary: "Skipasy, lanovky, webkamery a zázemí pro zimní návštěvu bez překvapení.",
        statusLabel: "Dnes v areálu",
        statusValue: "Lanovky a sníh",
        supportLabel: "Jistota",
        supportValue: "Infocentrum + skipasy",
        spotlightTitle: "Zimní servis v jednom místě",
        spotlightText: "Zkontroluj provoz lanovek, kup skipasy a měj po ruce kontakty i webkamery ještě před příjezdem.",
        spotlightCta: "Otevřít webkamery",
        spotlightHref: "https://www.lipno.info/webkamery-na-lipne.html",
        rentalsTitle: "Zimní půjčovny a zázemí",
      }
    : {
        summary: "Vstupenky, webkamery, otevírací doby, infocentrum, parkování i provozní jistoty v létě na jednom místě.",
        statusLabel: "Dnes v areálu",
        statusValue: "Jezero a provoz",
        supportLabel: "Jistota",
        supportValue: "Infocentrum + parkování",
        spotlightTitle: "Letní servis bez zdržení",
        spotlightText: "Měj po ruce provoz areálu, webkamery, půjčovny a přímý vstup do vstupenek i letních atrakcí.",
        spotlightCta: "Otevřít otevírací doby",
        spotlightHref: "https://www.lipno.info/oteviraci-a-provozni-doby.html",
        rentalsTitle: "Letní půjčovny a zázemí",
      };

  return (
    <>
      <LipnoTopBar />
      <main className="pt-20 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div className="rounded-[2rem] p-5 md:p-6" style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.08) 0%, rgba(0,150,57,0.08) 100%)" }}>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight md:text-[2.6rem]" style={{ color: lipnoBrand.primary }}>
              Servis na Lipně
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              {seasonalService.summary}
            </p>
            <div className="mt-4">
              <SeasonToggle compact />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-[1.4rem] p-4" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>{seasonalService.statusLabel}</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{seasonalService.statusValue}</p>
              </div>
              <div className="rounded-[1.4rem] p-4" style={{ background: isWinter ? "#e9f2ff" : lipnoBrand.secondarySoft }}>
                <p className="text-xs font-semibold" style={{ color: isWinter ? lipnoBrand.primary : lipnoBrand.secondary }}>{seasonalService.supportLabel}</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: isWinter ? lipnoBrand.primary : lipnoBrand.secondary }}>{seasonalService.supportValue}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-5">
          <div className="grid gap-3 md:grid-cols-3">
            {serviceModules.map((module) => (
              <a
                key={module.id}
                href={module.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] p-5 block"
                style={{
                  background: isWinter ? "#eef4ff" : lipnoBrand.secondarySoft,
                  boxShadow: "0 10px 22px rgba(12,74,110,0.06)",
                  border: "1px solid rgba(12,74,110,0.06)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>{module.icon}</span>
                  <span className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em]" style={{ background: "#fff", color: lipnoBrand.primary }}>
                    Live
                  </span>
                </div>
                <h2 className="mt-4 font-headline text-base font-extrabold leading-snug" style={{ color: lipnoBrand.ink }}>
                  {module.title}
                </h2>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{module.value}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{module.detail}</p>
                <p className="mt-4 text-sm font-bold" style={{ color: lipnoBrand.secondary }}>{module.cta} →</p>
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 pt-5">
          <a
            href={seasonalService.spotlightHref}
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
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/72">{lipnoSeasonCopy[season].label} servis</p>
            <h2 className="mt-3 max-w-sm font-headline text-2xl font-extrabold leading-tight text-white">{seasonalService.spotlightTitle}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/82">{seasonalService.spotlightText}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
              {seasonalService.spotlightCta}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </a>
        </section>

        <section className="px-4 pt-5">
          <div className="grid grid-cols-2 gap-3">
            {serviceItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] p-5 block"
                style={{ background: "#fff", boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                  {item.badge && (
                    <span className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em]" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <h2 className="mt-4 font-headline text-base font-extrabold leading-snug" style={{ color: lipnoBrand.ink }}>
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                  {item.text}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>{seasonalService.rentalsTitle}</h2>
            <Link href="/zazitky" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Zážitky</Link>
          </div>
          <div className="space-y-3">
            {rentals.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] p-5 block"
                style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
              >
                <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.area}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.summary}</p>
                <p className="mt-3 text-sm font-semibold" style={{ color: lipnoBrand.primary }}>{item.contact}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <a
            href="https://www.lipno.info/infocentrum.html"
            target="_blank"
            rel="noreferrer"
            className="block rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Infocentrum</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">{lipnoInfoCenter.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/82">{lipnoInfoCenter.address}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/82">{lipnoInfoCenter.phone} · {lipnoInfoCenter.email}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/82">{lipnoInfoCenter.parking}</p>
          </a>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
