import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoCardBenefits, lipnoCardPage } from "@/lib/lipno-catalog";

export default function LipnoCardLandingPage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div className="rounded-[2rem] p-5 md:p-6" style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.08) 0%, rgba(0,150,57,0.10) 100%)" }}>
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Věrnostní karta</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight md:text-[2.7rem]" style={{ color: lipnoBrand.primary }}>
              {lipnoCardPage.title}
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              {lipnoCardPage.summary}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.4rem] p-4" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Registrace</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>Zdarma</p>
              </div>
              <div className="rounded-[1.4rem] p-4" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Záloha</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{lipnoCardPage.deposit}</p>
              </div>
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.secondarySoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.secondary }}>Použití</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.secondary }}>Léto i zima</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[1.8rem] p-5" style={{ background: "#fff", boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Jak to funguje</h2>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {lipnoCardPage.steps.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-black" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[1.8rem] p-5" style={{ background: lipnoBrand.secondarySoft, boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Proč ji řešit</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {lipnoCardPage.reasons.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: lipnoBrand.secondary }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Výhody z oficiální stránky</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Konkrétní příklady benefitů, které Lipno.info ukazuje přímo na kartě.</p>
            </div>
            <a href="https://www.lipno.info/zazitky.html?lipnocard=1" target="_blank" rel="noreferrer" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>
              Vše →
            </a>
          </div>
          <div className="mt-4 space-y-3">
            {lipnoCardBenefits.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[1.8rem] p-5"
                style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.accentSoft, color: lipnoBrand.accent }}>
                      S Lipno.card {item.discount}
                    </span>
                    <h3 className="mt-3 font-headline text-xl font-extrabold leading-tight" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.text}</p>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>arrow_outward</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={lipnoCardPage.shopUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] p-6 block"
              style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Online nákup</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">Přejít na Lipno.card shop</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/82">Registrace, přiřazení karty a nákup online na oficiálním webu.</p>
            </a>
            <a
              href={lipnoCardPage.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] p-6 block"
              style={{ background: "#fff", boxShadow: "0 14px 30px rgba(12,74,110,0.08)", border: "1px solid rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Zdroj</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>Otevřít oficiální stránku</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Původní přehled benefitů, vracení karty a podmínek na Lipno.info.</p>
            </a>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
