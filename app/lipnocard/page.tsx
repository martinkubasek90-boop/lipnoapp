import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoCardBenefits, lipnoCardPage } from "@/lib/lipno-catalog";

const profileStats = [
  { label: "Věrnostní body", value: "1 240 b.", tone: "rgba(255,255,255,0.12)" },
  { label: "Status", value: "Premium", tone: "rgba(255,255,255,0.16)" },
];

const miniCards = [
  { name: "Jana Nováková", points: "450 bodů" },
  { name: "Tomáš Novák", points: "120 bodů" },
];

export default function LipnoCardLandingPage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] p-6 text-white"
            style={{ boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <Image src="https://www.lipno.info/templates/lipno/images/layout/lipnocard-leto.jpg" alt="Lipno.card" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,66,0.22),rgba(3,14,38,0.54),rgba(3,14,38,0.88))]" />
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/84" style={{ textShadow: "0 4px 14px rgba(0,0,0,0.32)" }}>Lipno.card</p>
              <h1 className="mt-3 font-headline text-3xl font-extrabold md:text-[2.8rem]" style={{ textShadow: "0 10px 28px rgba(0,0,0,0.40)" }}>{lipnoCardPage.title}</h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/94" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.32)" }}>{lipnoCardPage.summary}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={lipnoCardPage.shopUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                  style={{ background: "rgba(255,255,255,0.96)", color: lipnoBrand.primary }}
                >
                  Koupit online
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
                <Link
                  href="#nakup"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                  style={{ background: "rgba(255,255,255,0.14)", color: "#fff", border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  Jak ji přidat do účtu
                  <span className="material-symbols-outlined text-base">arrow_downward</span>
                </Link>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {profileStats.map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] p-4" style={{ background: item.tone, border: "1px solid rgba(255,255,255,0.10)" }}>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">{item.label}</p>
                    <p className="mt-2 text-lg font-black">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.4rem] p-4" style={{ background: "#fff", boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Registrace</p>
              <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>Zdarma</p>
            </div>
            <div className="rounded-[1.4rem] p-4" style={{ background: "#fff", boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Záloha</p>
              <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{lipnoCardPage.deposit}</p>
            </div>
            <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.secondarySoft, boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <p className="text-xs font-semibold" style={{ color: lipnoBrand.secondary }}>Použití</p>
              <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.secondary }}>Léto i zima</p>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="rounded-[2rem] p-5" style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Rodinné karty</h2>
                <p className="mt-1 text-sm" style={{ color: lipnoBrand.muted }}>Další profily a sdílené výhody v rámci rodiny.</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {miniCards.map((item) => (
                <div key={item.name} className="rounded-[1.5rem] p-4" style={{ background: "rgba(0,30,96,0.03)" }}>
                  <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.points}</p>
                  <button className="mt-4 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.14em]" style={{ background: "#fff", color: lipnoBrand.primary }}>
                    Zobrazit QR
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div
            id="nakup"
            className="rounded-[2rem] p-5"
            style={{ background: "#fff", boxShadow: "0 12px 24px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Účet a nákup</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Lipno.card přímo z aplikace</h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] p-4" style={{ background: "rgba(0,30,96,0.03)" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>V aplikaci</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.ink }}>
                  Nejprve si otevři Moje Lipno a připrav si vlastní účet. Odtud se vracíš ke své kartě, benefitům i historii.
                </p>
              </div>
              <div className="rounded-[1.5rem] p-4" style={{ background: lipnoBrand.secondarySoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.secondary }}>Oficiální nákup</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.ink }}>
                  Samotný nákup a párování karty pokračuje v oficiálním systému Lipno.card. Tohle je hlavní vstup z appky.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={lipnoCardPage.shopUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                style={{ background: lipnoBrand.primary, color: "#fff" }}
              >
                Koupit nebo přiřadit kartu
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
              <a
                href={lipnoCardPage.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
              >
                Podmínky a informace
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
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
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Aktivní výhody</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Příklady benefitů dostupných přes oficiální Lipno.card.</p>
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
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
