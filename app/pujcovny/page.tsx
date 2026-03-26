import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoCardPage, lipnoRentalCategories, lipnoRentalDetails } from "@/lib/lipno-catalog";

export default function LipnoRentalsPage() {
  const featured = lipnoRentalDetails.slice(0, 4);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-5 md:p-6"
            style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.08) 0%, rgba(0,150,57,0.10) 100%)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Oficiální půjčovny</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight md:text-[2.7rem]" style={{ color: lipnoBrand.primary }}>
              Půjčovny na Lipně
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Voda, kola, koloběžky, bikepark i praktický servis. Vzal jsem oficiální obsah z Lipno.info a přeložil ho do přehledných landingů s kontakty, otevírací dobou a cenovými highlighty.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {lipnoRentalCategories.slice(1).map((item) => {
                const count = lipnoRentalDetails.filter((rental) => rental.category === item.value).length;
                return (
                  <div key={item.value} className="rounded-[1.4rem] p-4" style={{ background: "#fff" }}>
                    <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>{item.label}</p>
                    <p className="mt-2 font-headline text-2xl font-black" style={{ color: lipnoBrand.primary }}>{count}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Top půjčovny teď</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Nejrelevantnější letní vstupy pro homepage i reálný pobyt.</p>
            </div>
            <a href="https://www.lipno.info/pujcovny.html" target="_blank" rel="noreferrer" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>
              Zdroj →
            </a>
          </div>
          <div className="mt-4 space-y-3">
            {featured.map((item, index) => (
              <Link
                key={item.slug}
                href={`/pujcovny/${item.slug}`}
                className="block rounded-[1.8rem] p-5"
                style={{
                  background: index === 0 ? "linear-gradient(135deg, rgba(0,150,57,0.14), rgba(255,255,255,0.96))" : "#fff",
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
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Všechny detailní landingy</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Každá půjčovna má vlastní stránku s kontaktem, hodinami a CTA.</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            {lipnoRentalDetails.map((item) => (
              <Link
                key={item.slug}
                href={`/pujcovny/${item.slug}`}
                className="rounded-[1.6rem] p-4 block"
                style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
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
        </section>

        <section className="px-4 pt-8 pb-4">
          <Link
            href="/lipnocard"
            className="block rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Lipno.card</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">{lipnoCardPage.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/82">{lipnoCardPage.summary}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
              Otevřít kartu a výhody
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </Link>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
