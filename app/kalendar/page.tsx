import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoCalendarEvents, lipnoCalendarSourceUrl } from "@/lib/lipno-calendar";

export default function LipnoCalendarPage() {
  const featured = lipnoCalendarEvents[0];
  const upcoming = lipnoCalendarEvents.slice(1);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #0a5ea3 62%, #009639 100%)", boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Kalendář akcí</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]">
              Co se děje na Lipně
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/84">
              Přehled aktuálních akcí z oficiálního kalendáře Lipno.info. Data níže odpovídají stavu k 27. březnu 2026.
            </p>
            <a
              href={lipnoCalendarSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
              style={{ background: "rgba(255,255,255,0.94)", color: lipnoBrand.primary }}
            >
              Otevřít oficiální kalendář
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </section>

        <section className="px-4 pt-8">
          <article
            className="overflow-hidden rounded-[1.9rem] bg-white"
            style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
          >
            <div className="relative h-64 w-full">
              <Image src={featured.image} alt={featured.imageAlt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,21,54,0.82))]" />
              <div className="absolute left-5 top-5">
                <span className="inline-flex rounded-full bg-white/92 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.primary }}>
                  Nejbližší akce
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-sm font-semibold text-white/84">
                  {featured.dateLabel}
                  {featured.timeLabel ? ` · ${featured.timeLabel}` : ""}
                </p>
                <h2 className="mt-2 font-headline text-3xl font-extrabold leading-tight text-white">{featured.title}</h2>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{featured.teaser}</p>
              <a
                href={featured.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                style={{ background: lipnoBrand.primary, color: "#fff" }}
              >
                Detail akce
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </article>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Další akce</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Oficiální program resortu, festivalů a rodinných akcí.</p>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            {upcoming.map((event) => (
              <article
                key={event.slug}
                className="overflow-hidden rounded-[1.9rem] bg-white"
                style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
              >
                <div className="relative h-52 w-full">
                  <Image src={event.image} alt={event.imageAlt} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,21,54,0.72))]" />
                  {event.endLabel ? (
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: "rgba(254,240,138,0.96)", color: "#854d0e" }}>
                        {event.endLabel}
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                      {event.dateLabel}
                    </span>
                    {event.timeLabel ? (
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.secondarySoft, color: lipnoBrand.secondary }}>
                        {event.timeLabel}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{event.teaser}</p>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                    style={{ background: lipnoBrand.primary, color: "#fff" }}
                  >
                    Detail akce
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
