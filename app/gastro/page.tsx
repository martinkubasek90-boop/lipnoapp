import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoGastroDetails } from "@/lib/lipno-gastro";
import { lipnoMapImage, lipnoMapPoints } from "@/lib/lipno-map";
import { getLipnoOpenState } from "@/lib/lipno-schedule";

export default function LipnoGastroPage() {
  const gastroPoints = lipnoMapPoints.filter((point) => ["stodola", "povidlon", "kramec", "molo", "beach-cafe", "modrin"].includes(point.id));

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 54%, #007a4d 100%)", boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white" style={{ textShadow: "0 4px 14px rgba(0,0,0,0.24)" }}>Gastro na Lipně</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]" style={{ textShadow: "0 10px 28px rgba(0,0,0,0.30)" }}>
              Restaurace, kavárny a podniky v areálu
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.24)" }}>
              Stejný přehledový styl jako půjčovny. Fotka, otevřeno nebo zavřeno, otevírací doba, detail a přímé zavolání.
            </p>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="space-y-4">
            {lipnoGastroDetails.map((item) => {
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
                    <div className="absolute left-4 top-4">
                      <span
                        className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                        style={
                          openState.open === true
                            ? { background: "rgba(220,252,231,0.96)", color: "#15803d" }
                            : { background: "rgba(254,226,226,0.96)", color: "#b91c1c" }
                        }
                      >
                        {openState.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: "rgba(234,88,12,0.10)", color: "#c2410c" }}>
                          Gastro
                        </span>
                        <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                        <p className="mt-1 text-sm font-semibold" style={{ color: "#c2410c" }}>{item.location}</p>
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
        </section>

        <section className="px-4 pt-8 pb-4">
          <div
            className="overflow-hidden rounded-[1.9rem] bg-white"
            style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
          >
            <div className="p-5">
              <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>Kde restaurace najdeš</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Gastro body jsou soustředěné v centrální zóně, u jezera a u horní části areálu u výstupu lanovky.
              </p>
            </div>

            <div className="relative aspect-[1.35/1] w-full overflow-hidden">
              <Image src={lipnoMapImage.src} alt={lipnoMapImage.alt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,30,96,0.10))]" />
              {gastroPoints.map((point) => (
                <div
                  key={point.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,30,96,0.22)]">
                    <div className="absolute inset-0 rounded-full border-4 border-white/40 animate-ping" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black" style={{ background: "#c2410c", color: "#fff" }}>
                      {point.code}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {gastroPoints.map((point) => (
                <Link
                  key={point.id}
                  href={`/mapa?point=${point.id}`}
                  className="rounded-[1.4rem] p-4 block"
                  style={{ background: "rgba(234,88,12,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em]" style={{ background: "rgba(234,88,12,0.10)", color: "#c2410c" }}>
                      {point.code}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: lipnoBrand.muted }}>
                      Gastro
                    </span>
                  </div>
                  <h3 className="mt-3 font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{point.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
