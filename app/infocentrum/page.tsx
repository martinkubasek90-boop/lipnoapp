import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import {
  lipnoInfocentrumBanners,
  lipnoInfocentrumHours,
  lipnoInfocentrumOffer,
  lipnoInfocentrumPage,
} from "@/lib/lipno-infocentrum";

export default function LipnoInfoCenterPage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] min-h-[21rem] p-6"
            style={{ boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <Image src={lipnoInfocentrumPage.heroImage} alt={lipnoInfocentrumPage.heroAlt} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,30,96,0.22),rgba(5,21,54,0.54),rgba(5,21,54,0.88))]" />
            <div className="relative z-10 flex min-h-[17rem] flex-col justify-end">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/84" style={{ textShadow: "0 4px 14px rgba(0,0,0,0.32)" }}>Infocentrum</p>
              <h1 className="mt-3 max-w-lg font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]" style={{ textShadow: "0 10px 28px rgba(0,0,0,0.40)" }}>
                Praktické zázemí pro celý pobyt na Lipně
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/94" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.32)" }}>
                {lipnoInfocentrumPage.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {lipnoInfocentrumBanners.map((item) =>
              item.external ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.7rem] p-5"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}
                >
                  <span className="material-symbols-outlined text-3xl" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                  <h2 className="mt-3 font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.description}</p>
                </a>
              ) : item.href.startsWith("#") ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-[1.7rem] p-5"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}
                >
                  <span className="material-symbols-outlined text-3xl" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                  <h2 className="mt-3 font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.description}</p>
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-[1.7rem] p-5"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}
                >
                  <span className="material-symbols-outlined text-3xl" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                  <h2 className="mt-3 font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.description}</p>
                </Link>
              ),
            )}
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.9rem] bg-white p-5" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
              <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>Otevírací doba</h2>
              <div className="mt-4 space-y-3">
                {lipnoInfocentrumHours.map((row) => (
                  <div key={row.range} className="rounded-[1.4rem] p-4" style={{ background: "rgba(0,30,96,0.03)" }}>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-bold" style={{ color: lipnoBrand.ink }}>{row.range}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.12em]" style={{ color: lipnoBrand.muted }}>{row.days}</p>
                      </div>
                      <p className="text-sm font-black" style={{ color: lipnoBrand.primary }}>{row.hours}</p>
                    </div>
                    {row.note ? <p className="mt-2 text-xs leading-relaxed" style={{ color: lipnoBrand.muted }}>{row.note}</p> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.9rem] bg-white p-5" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Kontakt</p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{lipnoInfocentrumPage.address}</p>
                <a href={`tel:${lipnoInfocentrumPage.phone.replace(/\s+/g, "")}`} className="mt-4 flex items-center gap-3 text-sm font-bold" style={{ color: lipnoBrand.primary }}>
                  <span className="material-symbols-outlined">call</span>
                  {lipnoInfocentrumPage.phone}
                </a>
                <a href={`mailto:${lipnoInfocentrumPage.email}`} className="mt-3 flex items-center gap-3 text-sm font-semibold" style={{ color: lipnoBrand.primary }}>
                  <span className="material-symbols-outlined">mail</span>
                  {lipnoInfocentrumPage.email}
                </a>
              </div>

              <div id="smenarna" className="rounded-[1.9rem] bg-white p-5" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Směnárna</p>
                <h3 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{lipnoInfocentrumPage.exchangeRate}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                  Infocentrum směňuje každý den dle provozní doby, pouze EUR na české koruny.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.9rem] bg-white p-5" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
              <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>Naše nabídka</h2>
              <ul className="mt-4 space-y-3">
                {lipnoInfocentrumOffer.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                    <span style={{ color: lipnoBrand.secondary }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.9rem] bg-white p-5" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
              <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{lipnoInfocentrumPage.parkingTitle}</h2>
              <ul className="mt-4 space-y-3">
                {lipnoInfocentrumPage.parkingItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                    <span style={{ color: lipnoBrand.secondary }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="overflow-hidden rounded-[1.9rem] bg-white" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
            <div className="p-5">
              <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>Kde nás najdete</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Mapa přímo z oficiální stránky infocentra Lipno.info.
              </p>
            </div>
            <iframe
              src={lipnoInfocentrumPage.mapEmbedUrl}
              title="Mapa Infocentra Lipno"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
