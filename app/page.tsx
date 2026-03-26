"use client";

import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { useSeason } from "@/components/lipno/SeasonProvider";
import {
  lipnoBrand,
  lipnoConditions,
  lipnoEvents,
  lipnoExperiences,
  lipnoFoxPrompts,
  lipnoInfoCenter,
  lipnoQuickActions,
  lipnoRentals,
  lipnoSeasonCopy,
  lipnoSeasonHero,
  lipnoServiceLinks,
} from "@/lib/lipno-data";
import { lipnoCardPage } from "@/lib/lipno-catalog";

export default function LipnoHomePage() {
  const { season } = useSeason();
  const seasonCopy = lipnoSeasonCopy[season];
  const seasonHero = lipnoSeasonHero[season];
  const featuredExperiences = lipnoExperiences.filter((item) => item.seasons.includes(season)).slice(0, 3);
  const featuredServices = lipnoServiceLinks.filter((item) => !item.seasons || item.seasons.includes(season)).slice(0, 4);
  const featuredRentals = lipnoRentals.filter((item) => !item.seasons || item.seasons.includes(season)).slice(0, 3);
  const [featuredEvent] = lipnoEvents.filter((item) => item.seasons.includes(season));
  const seasonQuickActions = lipnoQuickActions.filter((item) => !item.seasons || item.seasons.includes(season)).slice(0, 6);
  const isWinter = season === "zima";

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] min-h-[25rem] p-5 md:p-6"
            style={{
              background: seasonHero.heroBackground,
              boxShadow: "0 18px 40px rgba(12,74,110,0.18)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-32 opacity-70" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18), transparent)" }} />
            <div className="absolute right-[-2rem] top-[-2rem] h-40 w-40 rounded-full blur-2xl" style={{ background: seasonHero.heroGlowSecondary }} />
            <div className="absolute left-[-3rem] bottom-[-4rem] h-52 w-52 rounded-full blur-3xl" style={{ background: seasonHero.heroGlow }} />
            {isWinter ? (
              <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(130deg, transparent 0%, rgba(255,255,255,0.10) 42%, transparent 58%)" }} />
            ) : (
              <div className="absolute inset-x-0 bottom-0 h-28 opacity-30" style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12))" }} />
            )}
            <div className="relative z-10 flex min-h-[22rem] flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-white/80">Čtvrtek, 26. března 2026</p>
                <h1 className="mt-5 font-headline text-[2.9rem] font-extrabold leading-[0.92] tracking-tight text-white md:text-[3.4rem]">
                  {seasonCopy.heroTitle.split("\n").map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-white/78">
                  {seasonCopy.heroText}
                </p>
              </div>

              <div
                className="rounded-[1.7rem] px-4 py-3 backdrop-blur-md"
                style={{ background: seasonHero.panelBackground, border: seasonHero.panelBorder }}
              >
                <div className="grid grid-cols-2 gap-3 text-white sm:grid-cols-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/66">{seasonCopy.weatherLabel}</p>
                    <p className="mt-1 font-headline text-xl font-black">{lipnoConditions.weather}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/66">{seasonCopy.conditionsLabel}</p>
                    <p className="mt-1 font-headline text-xl font-black">{season === "zima" ? lipnoConditions.snow : "19 °C voda"}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/66">{isWinter ? "Lanovky" : "Program"}</p>
                    <p className="mt-1 font-headline text-xl font-black">{isWinter ? lipnoConditions.lifts : "Denní animace"}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/66">{seasonHero.statThreeLabel}</p>
                    <p className="mt-1 text-sm font-semibold">{seasonHero.statThreeValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Rychlý přístup</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>{seasonHero.quickLabel} · {seasonHero.quickSubtitle}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {seasonQuickActions.map((item) => {
              const external = item.href.startsWith("http");
              const content = (
                <>
                  <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                  <span className="text-xs font-semibold text-center leading-tight" style={{ color: lipnoBrand.ink }}>{item.title}</span>
                </>
              );
              return external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2.5 rounded-3xl border p-4 transition-all active:scale-95"
                  style={{ background: "#fff", borderColor: "rgba(12,74,110,0.08)" }}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex flex-col items-center gap-2.5 rounded-3xl border p-4 transition-all active:scale-95"
                  style={{ background: "#fff", borderColor: "rgba(12,74,110,0.08)" }}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/planovat"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: isWinter ? "#e9f2ff" : lipnoBrand.primarySoft, boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
            >
              <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>edit_calendar</span>
              <h2 className="mt-4 font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>Plánovat den</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {isWinter ? "Kalendář zimního programu, provozu a rychlý plán dne na sněhu." : "Kalendář akcí, doporučení na dnes a jednoduchý plán pobytu."}
              </p>
            </Link>
            <Link
              href="/ai"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: lipnoBrand.secondarySoft, boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
            >
              <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.secondary }}>pets</span>
              <h2 className="mt-4 font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>Fox AI průvodce</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Pomůže s dětmi, počasím, obědem i plánem dne podle sezóny.
              </p>
            </Link>
          </div>
        </section>

        {isWinter ? null : (
          <section className="px-4 pt-8">
            <Link
              href="/pujcovny"
              className="block rounded-[2rem] p-5"
              style={{ background: "#fff", boxShadow: "0 14px 30px rgba(12,74,110,0.08)", border: "1px solid rgba(12,74,110,0.08)" }}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Půjčovny a ceníky</p>
                  <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Oficiální půjčovny v appce</h2>
                </div>
                <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>arrow_forward</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Vodní plavidla, kola, bikepark, koloběžky i cykloservis s interními landingy, kontakty a cenovými highlighty.
              </p>
            </Link>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Top půjčovny</h2>
                <p className="text-xs mt-0.5" style={{ color: lipnoBrand.muted }}>Vodní plavidla, kola a letní vybavení z oficiální nabídky Lipna.</p>
              </div>
              <Link href="/pujcovny" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
            </div>
            <div className="mt-4 space-y-3">
              {featuredRentals.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block rounded-[1.8rem] p-5"
                  style={{
                    background: index === 0 ? "linear-gradient(135deg, rgba(0,150,57,0.13), rgba(255,255,255,0.96))" : "#fff",
                    boxShadow: "0 12px 24px rgba(12,74,110,0.06)",
                    border: "1px solid rgba(12,74,110,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>
                        Půjčovna
                      </span>
                      <h3 className="mt-3 font-headline text-xl font-extrabold leading-tight" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.area}</p>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.summary}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: lipnoBrand.accent }}>arrow_outward</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold" style={{ color: lipnoBrand.primary }}>{item.contact}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="px-4 pt-8">
          <Link
            href={seasonHero.spotlightHref}
            className="block rounded-[2rem] p-6"
            style={{ background: isWinter ? "linear-gradient(135deg, #001a46 0%, #0b2f6f 64%, #2d85dd 100%)" : "linear-gradient(135deg, #002a73 0%, #0a5ea3 64%, #00a85a 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/72">{seasonHero.spotlightLabel}</p>
            <h2 className="mt-3 max-w-sm font-headline text-2xl font-extrabold leading-tight text-white">{seasonHero.spotlightTitle}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/82">{seasonHero.spotlightText}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
              {seasonHero.spotlightCta}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </Link>
        </section>

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Top zážitky</h2>
              <p className="text-xs mt-0.5" style={{ color: lipnoBrand.muted }}>{seasonCopy.featureOne} · {seasonCopy.featureTwo}</p>
            </div>
            <Link href="/zazitky" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
          </div>
          <div className="mt-4 space-y-3">
            {featuredExperiences.map((item, index) => (
              item.href.startsWith("http") ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[1.8rem] p-5"
                  style={{
                    background: index === 0 ? (isWinter ? "linear-gradient(135deg, rgba(43,128,221,0.16), rgba(255,255,255,0.96))" : "linear-gradient(135deg, rgba(0,150,57,0.13), rgba(255,255,255,0.96))") : "#fff",
                    boxShadow: "0 12px 24px rgba(12,74,110,0.06)",
                    border: "1px solid rgba(12,74,110,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: "rgba(255,255,255,0.72)", color: lipnoBrand.secondary }}>
                        {item.season}
                      </span>
                      <h3 className="mt-3 font-headline text-xl font-extrabold leading-tight" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.summary}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: lipnoBrand.accent }}>arrow_outward</span>
                  </div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>{item.duration}</span>
                    <span className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>{item.highlight}</span>
                  </div>
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block rounded-[1.8rem] p-5"
                  style={{
                    background: index === 0 ? (isWinter ? "linear-gradient(135deg, rgba(43,128,221,0.16), rgba(255,255,255,0.96))" : "linear-gradient(135deg, rgba(0,150,57,0.13), rgba(255,255,255,0.96))") : "#fff",
                    boxShadow: "0 12px 24px rgba(12,74,110,0.06)",
                    border: "1px solid rgba(12,74,110,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: "rgba(255,255,255,0.72)", color: lipnoBrand.secondary }}>
                        {item.season}
                      </span>
                      <h3 className="mt-3 font-headline text-xl font-extrabold leading-tight" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.summary}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: lipnoBrand.accent }}>arrow_forward</span>
                  </div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>{item.duration}</span>
                    <span className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>{item.highlight}</span>
                  </div>
                </Link>
              )
            ))}
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Servis dnes</h2>
            <Link href="/servis" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Otevřít →</Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {featuredServices.map((item) =>
              item.href.startsWith("http") ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.6rem] p-4 block"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="material-symbols-outlined text-[1.6rem]" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                    {item.badge && (
                      <span className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em]" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-headline text-base font-extrabold leading-snug" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.text}</p>
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-[1.6rem] p-4 block"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="material-symbols-outlined text-[1.6rem]" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                    {item.badge && (
                      <span className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em]" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-headline text-base font-extrabold leading-snug" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.text}</p>
                </Link>
              ),
            )}
          </div>
        </section>

        <section className="px-4 pt-8">
          <Link
            href="/lipnocard"
            className="block rounded-[2rem] p-6"
            style={{ background: "#fff", boxShadow: "0 14px 30px rgba(12,74,110,0.08)", border: "1px solid rgba(12,74,110,0.08)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Lipno.card</p>
                <h2 className="mt-3 font-headline text-3xl font-extrabold" style={{ color: lipnoBrand.primary }}>Výhody a vstupenky</h2>
              </div>
              <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>arrow_forward</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              {lipnoCardPage.deposit} Registrace je zdarma a karta pak drží slevy i vstup do oficiálního shopu.
            </p>
          </Link>
        </section>

        <section className="px-4 pt-8">
          <div
            className="rounded-[2rem] p-6"
            style={{ background: isWinter ? "linear-gradient(135deg, #001a46 0%, #0b2f6f 68%, #2d85dd 100%)" : "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">{seasonHero.plannerLabel}</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">{featuredEvent.title}</h2>
            <p className="mt-2 text-sm text-white/82">{featuredEvent.summary}</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}>{featuredEvent.dateLabel}</span>
              <Link href="/planovat" className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
                Otevřít plán
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="rounded-[2rem] p-5" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>AI průvodce</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Fox doporučuje</h2>
              </div>
              <span className="material-symbols-outlined text-3xl" style={{ color: lipnoBrand.accent }}>pets</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {lipnoFoxPrompts[season].slice(0, 4).map((prompt) => (
                <Link
                  key={prompt}
                  href="/ai"
                  className="rounded-full px-3 py-2 text-xs font-semibold"
                  style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                >
                  {prompt}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <a
            href="https://www.lipno.info/infocentrum.html"
            target="_blank"
            rel="noreferrer"
            className="block rounded-[2rem] p-5"
            style={{ background: "#fff", boxShadow: "0 14px 30px rgba(12,74,110,0.08)", border: "1px solid rgba(12,74,110,0.08)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Infocentrum</p>
                <h2 className="mt-3 font-headline text-3xl font-extrabold" style={{ color: lipnoBrand.primary }}>Kontakt a servis</h2>
              </div>
              <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>arrow_forward</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              {lipnoInfoCenter.phone} · {lipnoInfoCenter.email} · {lipnoInfoCenter.address}
            </p>
          </a>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
