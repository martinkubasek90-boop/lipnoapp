import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoAttractions } from "@/lib/lipno-attractions";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoCardPage } from "@/lib/lipno-catalog";
import { lipnoMapImage, lipnoMapPoints } from "@/lib/lipno-map";
import { getLipnoOpenState } from "@/lib/lipno-schedule";

const categoryLabels = {
  rodiny: "Rodiny",
  sport: "Sport",
  wellness: "Wellness",
  lanovky: "Lanovky",
} as const;

export default function LipnoActivitiesPage() {
  const activityPoints = lipnoMapPoints.filter((point) =>
    ["stezka", "kralovstvi", "aquaworld", "lanovka-express", "lanovy-park", "bobova-draha", "marina"].includes(point.id),
  );

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] min-h-[20rem] p-6"
            style={{ boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <Image
              src="https://www.lipno.info/files/lipno/images/zazitek/size2-16781731468016-171-jezerni.jpg"
              alt="Aktivity na Lipně"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,66,0.18),rgba(3,14,38,0.50),rgba(3,14,38,0.88))]" />
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
            <div className="relative z-10 flex min-h-[16rem] flex-col justify-end">
              <h1
                className="mt-3 max-w-lg font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]"
                style={{ textShadow: "0 12px 32px rgba(0,0,0,0.44)" }}
              >
                Aktivity na Lipně
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white" style={{ textShadow: "0 8px 24px rgba(0,0,0,0.40)" }}>
                Všechny hlavní aktivity v jednom přehledu. Každá karta drží fotku, provoz, detail a přímé zavolání.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Přehled aktivit</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>
                Kompletní katalog hlavních zážitků v layoutu stejném jako mají půjčovny.
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            {lipnoAttractions.map((item) => {
              const openState = getLipnoOpenState(item.openingHours);
              return (
                <article
                  key={item.slug}
                  className="overflow-hidden rounded-[1.9rem] bg-white"
                  style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                >
                  <div className="relative h-52 w-full">
                    <Image src={item.heroImage} alt={item.imageAlt} fill className="object-cover" unoptimized />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(5,21,54,0.74))]" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
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
                      <span
                        className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                        style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                      >
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                        <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.location}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                    <details className="mt-4 rounded-[1.4rem] p-4" style={{ background: "rgba(0,30,96,0.03)" }}>
                      <summary className="cursor-pointer list-none text-xs font-semibold" style={{ color: lipnoBrand.muted }}>
                        Otevírací doba
                      </summary>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                        {item.openingHours.map((hour) => (
                          <li key={hour} className="flex gap-2">
                            <span style={{ color: lipnoBrand.secondary }}>•</span>
                            <span>{hour}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
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
        </section>

        <section className="px-4 pt-8">
          <div
            className="overflow-hidden rounded-[1.9rem] bg-white"
            style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
          >
            <div className="p-5">
              <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>Kde aktivity najdeš</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Hlavní aktivity jsou rozložené mezi centrální část areálu, horní zónu u Stezky a nástup na lanovku z P1.
              </p>
            </div>

            <div className="relative aspect-[1.35/1] w-full overflow-hidden">
              <Image src={lipnoMapImage.src} alt={lipnoMapImage.alt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,30,96,0.10))]" />
              {activityPoints.map((point) => (
                <div
                  key={point.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,30,96,0.22)]">
                    <div className="absolute inset-0 rounded-full border-4 border-white/40 animate-ping" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black" style={{ background: lipnoBrand.primary, color: "#fff" }}>
                      {point.code}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {activityPoints.map((point) => (
                <Link
                  key={point.id}
                  href={`/mapa?point=${point.id}`}
                  className="rounded-[1.4rem] p-4 block"
                  style={{ background: "rgba(0,30,96,0.03)", border: "1px solid rgba(12,74,110,0.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                      {point.code}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: lipnoBrand.muted }}>
                      Aktivita
                    </span>
                  </div>
                  <h3 className="mt-3 font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{point.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <Link
            href={lipnoCardPage.accountUrl}
            className="block overflow-hidden rounded-[2rem]"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
          >
            <div className="relative min-h-[14rem] p-6 md:min-h-[15rem]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,18,58,0.12),rgba(0,18,58,0.36),rgba(0,18,58,0.54))]" />
              <div className="absolute right-[-1rem] top-[-1rem] h-28 w-28 rounded-full blur-3xl" style={{ background: "rgba(255,255,255,0.16)" }} />
              <div className="relative z-10 flex min-h-[14rem] items-end justify-between gap-4">
                <div className="max-w-[20rem]">
                  <h2 className="font-headline text-3xl font-extrabold leading-tight text-white" style={{ textShadow: "0 10px 28px rgba(0,0,0,0.36)" }}>Výhody, karta a nákup online</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.28)" }}>
                    Jedno místo pro registraci, přidání karty k účtu, slevy v areálu a rychlý vstup do oficiálního nákupu.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-black shadow-lg" style={{ background: "#ffffff", color: lipnoBrand.primary, boxShadow: "0 14px 30px rgba(0,0,0,0.16)" }}>
                    Otevřít Lipno.card
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
                <div className="relative hidden h-56 w-[15.5rem] shrink-0 md:block">
                  <Image src="/uploads/lipnocard-cards-transparent.png" alt="Grafika karet Lipno.card" fill className="object-contain drop-shadow-[0_20px_36px_rgba(0,0,0,0.22)]" unoptimized />
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="px-4 pt-6 pb-4">
          <Link
            href="/kolemkolem"
            className="block overflow-hidden rounded-[2rem]"
            style={{ boxShadow: "0 14px 30px rgba(12,74,110,0.16)" }}
          >
            <div className="relative h-56 w-full">
              <Image src="/uploads/kolemkolem-banner.jpg" alt="KolemKolem" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,16,45,0.12),rgba(0,16,45,0.50),rgba(0,16,45,0.82))]" />
              <div className="absolute inset-x-0 top-0 p-5">
                <h2 className="max-w-sm font-headline text-3xl font-extrabold leading-tight text-white" style={{ textShadow: "0 10px 28px rgba(0,0,0,0.38)" }}>Cyklo trasy a plánování po Lipensku</h2>
                <div className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-black shadow-lg" style={{ background: "#ffffff", color: lipnoBrand.primary, boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                  Otevřít KolemKolem
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
