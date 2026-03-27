import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand, lipnoInfoCenter } from "@/lib/lipno-data";
import { lipnoCardPage, lipnoRentalCategories, lipnoRentalDetails } from "@/lib/lipno-catalog";

export default function LipnoRentalsPage() {
  const featured = lipnoRentalDetails.slice(0, 4);
  const special = lipnoRentalDetails.slice(4, 7);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div className="grid gap-4 md:grid-cols-[1.4fr_0.9fr]">
            <div
              className="relative overflow-hidden rounded-[2rem] p-6"
              style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 64%, #009639 100%)", boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
            >
              <div className="absolute right-[-2rem] top-[-2rem] h-40 w-40 rounded-full blur-3xl" style={{ background: "rgba(255,255,255,0.10)" }} />
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/70">Oficiální půjčovny</p>
                <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.7rem]">
                  Půjčovny na Lipně
                </h1>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/78">
                  Kola, voda, koloběžky i praktický servis v jednom přehledu. Rychle vyberete vhodné místo podle typu dne.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {lipnoRentalCategories.slice(1).map((item) => {
                    const count = lipnoRentalDetails.filter((rental) => rental.category === item.value).length;
                    return (
                      <div key={item.value} className="rounded-[1.3rem] p-3" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.10)" }}>
                        <p className="text-[11px] font-semibold text-white/72">{item.label}</p>
                        <p className="mt-2 font-headline text-2xl font-black text-white">{count}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] p-5" style={{ background: lipnoBrand.secondarySoft, boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Rezervace</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>Online výběr bez čekání</h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                  Vytipujte si půjčovnu ještě před cestou a otevřete si detail s kontaktem a praktickými informacemi.
                </p>
              </div>
              <div className="rounded-[2rem] p-5" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Hotline</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>{lipnoInfoCenter.phone}</h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                  Infocentrum pomůže s orientací v areálu i s kontakty na provozovny.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Top půjčovny teď</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Nejdůležitější letní vstupy pro homepage a rychlý výběr na místě.</p>
            </div>
            <a href="https://www.lipno.info/pujcovny.html" target="_blank" rel="noreferrer" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>
              Zdroj →
            </a>
          </div>
          <div className="mt-4 grid gap-3">
            {featured.map((item, index) => (
              <Link
                key={item.slug}
                href={`/pujcovny/${item.slug}`}
                className="block rounded-[1.8rem] p-5"
                style={{
                  background: index === 0 ? "linear-gradient(135deg, rgba(0,150,57,0.16), rgba(255,255,255,0.98))" : "#fff",
                  boxShadow: "0 12px 24px rgba(12,74,110,0.06)",
                  border: "1px solid rgba(12,74,110,0.06)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-headline text-xl font-extrabold leading-tight" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.location}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.summary}</p>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>arrow_outward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="rounded-[2rem] p-5" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Vodní radovánky a speciálky</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Další výběr podle typu dne</h2>
              </div>
              <Link href="/mapa" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Mapa</Link>
            </div>
            <div className="mt-4 grid gap-3">
              {special.map((item) => (
                <Link
                  key={item.slug}
                  href={`/pujcovny/${item.slug}`}
                  className="block rounded-[1.5rem] p-4"
                  style={{ background: "rgba(0,30,96,0.03)" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.location}</p>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>chevron_right</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <Link
            href="/lipnocard"
            className="block rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Moje Lipno</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">{lipnoCardPage.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/82">
              Výhody, slevy a rychlý přístup k oficiálním benefitům na jednom místě.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
              Otevřít Moje Lipno
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </Link>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
