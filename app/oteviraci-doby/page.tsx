import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoOpeningHoursSections } from "@/lib/lipno-opening-hours";
import { getLipnoOpenState } from "@/lib/lipno-schedule";

export default function LipnoOpeningHoursPage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.10) 0%, rgba(0,150,57,0.08) 100%)" }}
          >
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight" style={{ color: lipnoBrand.primary }}>
              Otevírací doby
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Přehled je poskládaný podle oficiální stránky Lipno.info pro letní provoz 2026. Každý blok ukazuje aktuální stav a celý rozpis období.
            </p>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {lipnoOpeningHoursSections.slice(0, 4).map((section) => {
              const state = getLipnoOpenState(section.periods.map((item) => `${item.dateLabel}: ${item.days} ${item.time}`));
              return (
                <div
                  key={section.id}
                  className="rounded-[1.5rem] p-4"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
                >
                  <span className="material-symbols-outlined text-2xl" style={{ color: lipnoBrand.primary }}>{section.icon}</span>
                  <p className="mt-3 text-sm font-bold leading-tight" style={{ color: lipnoBrand.ink }}>{section.title}</p>
                  <p className="mt-2 text-xs font-semibold" style={{ color: state.open ? "#15803d" : state.open === false ? "#b91c1c" : lipnoBrand.muted }}>
                    {state.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="space-y-4">
            {lipnoOpeningHoursSections.map((section) => {
              const state = getLipnoOpenState(section.periods.map((item) => `${item.dateLabel}: ${item.days} ${item.time}`));
              return (
                <article
                  key={section.id}
                  className="rounded-[1.9rem] bg-white p-5"
                  style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl" style={{ color: lipnoBrand.primary }}>{section.icon}</span>
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                          style={
                            state.open === true
                              ? { background: "rgba(220,252,231,0.96)", color: "#15803d" }
                              : state.open === false
                                ? { background: "rgba(254,226,226,0.96)", color: "#b91c1c" }
                                : { background: lipnoBrand.primarySoft, color: lipnoBrand.primary }
                          }
                        >
                          {state.label}
                        </span>
                      </div>
                      <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>{section.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{section.summary}</p>
                    </div>
                  </div>

                  <details className="mt-5 rounded-[1.4rem] p-4" style={{ background: "rgba(0,30,96,0.03)" }}>
                    <summary className="cursor-pointer list-none text-sm font-bold" style={{ color: lipnoBrand.primary }}>
                      Zobrazit celé otevírací doby
                    </summary>
                    <div className="mt-4 space-y-3">
                      {section.periods.map((period) => (
                        <div
                          key={`${section.id}-${period.dateLabel}-${period.days}`}
                          className="rounded-[1.4rem] p-4"
                          style={{ background: "#fff" }}
                        >
                          <div className="grid gap-2 md:grid-cols-[1.1fr_0.7fr_1fr] md:items-start">
                            <div>
                              <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Období</p>
                              <p className="mt-1 text-sm font-bold" style={{ color: lipnoBrand.ink }}>{period.dateLabel}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Dny</p>
                              <p className="mt-1 text-sm font-bold" style={{ color: lipnoBrand.ink }}>{period.days}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Čas</p>
                              <p className="mt-1 text-sm font-bold" style={{ color: lipnoBrand.ink }}>{period.time}</p>
                              {period.note ? <p className="mt-1 text-xs leading-relaxed" style={{ color: lipnoBrand.muted }}>{period.note}</p> : null}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <Link
            href="/mapa"
            className="rounded-[2rem] p-6 block"
            style={{ background: "#fff", boxShadow: "0 14px 30px rgba(12,74,110,0.08)", border: "1px solid rgba(12,74,110,0.08)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Další krok</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>Přejít na mapu areálu</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Navazující orientace v areálu se službami, gastrem a detaily míst.</p>
          </Link>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
