"use client";

import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { useSeason } from "@/components/lipno/SeasonProvider";
import { lipnoGastroDetails } from "@/lib/lipno-gastro";
import {
  lipnoBrand,
  lipnoConditions,
  lipnoExperiences,
  lipnoFoxPrompts,
  lipnoInfoCenter,
  lipnoRentals,
  lipnoSeasonCopy,
  lipnoSeasonHero,
} from "@/lib/lipno-data";

export default function LipnoHomePage() {
  const { season } = useSeason();
  const seasonCopy = lipnoSeasonCopy[season];
  const seasonHero = lipnoSeasonHero[season];
  const featuredExperiences = lipnoExperiences.filter((item) => item.seasons.includes(season)).slice(0, 3);
  const featuredRentals = lipnoRentals.filter((item) => !item.seasons || item.seasons.includes(season)).slice(0, 3);
  const isWinter = season === "zima";
  const heroVideoUrl = "https://www.lipno.info/files/lipno/uploads/files/video/leto/172121452141-171-lipno-leto-2024.mp4";
  const homeTiles = [
    { id: "tickets", title: "Vstupenky", icon: "confirmation_number", href: "/lipnocard", description: "Lipno.card, výhody a vstupy." },
    { id: "rentals", title: "Půjčovny", icon: "pedal_bike", href: "/pujcovny", description: "Kola, lodě i další vybavení." },
    { id: "hours", title: "Otevírací doby", icon: "schedule", href: "https://www.lipno.info/provoz.html", description: "Rychlý provoz areálu a služeb." },
    { id: "map", title: "Mapy", icon: "map", href: "/mapa", description: "Interaktivní orientace v resortu." },
    { id: "weather", title: "Počasí", icon: isWinter ? "ac_unit" : "wb_sunny", href: "/pocasi", description: "Předpověď, voda a webkamery." },
    { id: "gastro", title: "Gastro", icon: "restaurant", href: "/gastro", description: "Restaurace, kavárny a podniky." },
  ];
  const hourlyForecast = isWinter
    ? [
        { time: "14:00", temp: "-2°", icon: "ac_unit" },
        { time: "15:00", temp: "-3°", icon: "cloud" },
        { time: "16:00", temp: "-3°", icon: "weather_mix" },
        { time: "17:00", temp: "-4°", icon: "cloudy_snowing" },
        { time: "18:00", temp: "-5°", icon: "nights_stay" },
        { time: "19:00", temp: "-5°", icon: "nights_stay" },
      ]
    : [
        { time: "14:00", temp: "27°", icon: "wb_sunny" },
        { time: "15:00", temp: "28°", icon: "wb_sunny" },
        { time: "16:00", temp: "26°", icon: "partly_cloudy_day" },
        { time: "17:00", temp: "24°", icon: "cloud" },
        { time: "18:00", temp: "23°", icon: "rainy" },
        { time: "19:00", temp: "21°", icon: "wb_twilight" },
      ];
  const gastroCards = lipnoGastroDetails.slice(0, 4);

  function getOpenState(openingHours: string[]) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const dailyHours = openingHours.find((item) => /Denně\s+\d{1,2}:\d{2}[–-]\d{1,2}:\d{2}/.test(item));

    if (!dailyHours) {
      return { label: "Ověřit provoz", open: null as boolean | null };
    }

    const match = dailyHours.match(/(\d{1,2}:\d{2})[–-](\d{1,2}:\d{2})/);
    if (!match) {
      return { label: "Ověřit provoz", open: null as boolean | null };
    }

    const toMinutes = (value: string) => {
      const [hours, minutes] = value.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const openMinutes = toMinutes(match[1]);
    const closeMinutes = toMinutes(match[2]);
    const isOpen = currentMinutes >= openMinutes && currentMinutes <= closeMinutes;

    return { label: isOpen ? "Otevřeno" : "Zavřeno", open: isOpen };
  }

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] min-h-[20rem] p-5 md:min-h-[21rem] md:p-6"
            style={{
              background: seasonHero.heroBackground,
              boxShadow: "0 18px 40px rgba(12,74,110,0.18)",
            }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={heroVideoUrl} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0"
              style={{
                background: isWinter
                  ? "linear-gradient(180deg, rgba(2,18,45,0.28) 0%, rgba(2,18,45,0.50) 28%, rgba(2,18,45,0.78) 62%, rgba(5,21,54,0.92) 100%)"
                  : "linear-gradient(180deg, rgba(0,30,96,0.22) 0%, rgba(0,30,96,0.42) 30%, rgba(6,24,58,0.72) 64%, rgba(5,21,54,0.90) 100%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-32 opacity-50" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.14), transparent)" }} />
            <div className="absolute right-[-2rem] top-[-2rem] h-40 w-40 rounded-full blur-2xl" style={{ background: seasonHero.heroGlowSecondary }} />
            <div className="absolute left-[-3rem] bottom-[-4rem] h-52 w-52 rounded-full blur-3xl" style={{ background: seasonHero.heroGlow }} />
            {isWinter ? (
              <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(130deg, transparent 0%, rgba(255,255,255,0.10) 42%, transparent 58%)" }} />
            ) : (
              <div className="absolute inset-x-0 bottom-0 h-28 opacity-30" style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12))" }} />
            )}
            <div className="relative z-10 flex min-h-[16rem] flex-col justify-end md:min-h-[17rem]">
              <div className="max-w-[28rem]">
                <div
                  className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)" }}
                >
                  Čtvrtek, 26. března 2026
                </div>
                <h1
                  className="mt-4 font-headline text-[2.7rem] font-extrabold leading-[0.9] tracking-tight text-white md:text-[3.5rem]"
                  style={{ textShadow: "0 10px 28px rgba(0,0,0,0.24)" }}
                >
                  {seasonCopy.heroTitle.split("\n").map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h1>
                <p
                  className="mt-3 max-w-[24rem] text-[15px] leading-relaxed md:text-base"
                  style={{ color: "rgba(255,255,255,0.88)", textShadow: "0 6px 18px rgba(0,0,0,0.18)" }}
                >
                  {seasonCopy.heroText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Domů</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Hlavní vstupy do aplikace a nejdůležitější informace na jednom místě.</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {homeTiles.map((item) => {
              const external = item.href.startsWith("http");
              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.10), rgba(0,150,57,0.08))" }}>
                    <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-bold leading-tight" style={{ color: lipnoBrand.ink }}>{item.title}</span>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.description}</p>
                  </div>
                </>
              );
              return external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.7rem] border p-4 transition-all active:scale-95"
                  style={{ background: "#fff", borderColor: "rgba(12,74,110,0.08)" }}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-[1.7rem] border p-4 transition-all active:scale-95"
                  style={{ background: "#fff", borderColor: "rgba(12,74,110,0.08)" }}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="px-4 pt-8">
          <div
            className="rounded-[2rem] p-5"
            style={{ background: "linear-gradient(180deg, rgba(0,30,96,0.96), rgba(0,54,120,0.92) 58%, rgba(0,150,57,0.82) 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.16)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/72">Počasí</p>
                <h2 className="mt-2 font-headline text-2xl font-extrabold text-white">
                  {isWinter ? "Teplota a sníh na dalších 6 hodin" : "Teplota a voda na dalších 6 hodin"}
                </h2>
              </div>
              <Link href="/pocasi" className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                Detail
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-white/82">
              <span>{lipnoConditions.weather}</span>
              <span>·</span>
              <span>{isWinter ? lipnoConditions.snow : lipnoConditions.lake}</span>
              <span>·</span>
              <span>{lipnoConditions.wind}</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {hourlyForecast.map((item) => (
                <div
                  key={item.time}
                  className="rounded-[1.2rem] px-2 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <p className="text-xs font-bold text-white/72">{item.time}</p>
                  <span
                    className="material-symbols-outlined mt-2 text-[2rem]"
                    style={{
                      color:
                        item.icon === "wb_sunny"
                          ? "#fbbf24"
                          : item.icon === "rainy"
                            ? "#60a5fa"
                            : item.icon === "cloudy_snowing" || item.icon === "ac_unit"
                              ? "#93c5fd"
                              : "#ffffff",
                    }}
                  >
                    {item.icon}
                  </span>
                  <p className="mt-2 text-xl font-black text-white">{item.temp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
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
                const openState = getOpenState(item.openingHours);
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
                          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                          aria-label={`Zavolat ${item.title}`}
                        >
                          <span className="material-symbols-outlined">call</span>
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
          {!isWinter && (
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
          )}
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
                <h2 className="mt-3 font-headline text-3xl font-extrabold" style={{ color: lipnoBrand.primary }}>Kontaktujte nás</h2>
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
