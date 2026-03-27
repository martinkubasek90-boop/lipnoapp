import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand, lipnoInfoCenter } from "@/lib/lipno-data";

const mapModules = [
  {
    title: "Interaktivní mapa areálu",
    text: "Oficiální mapa Lipna s orientací po atrakcích, parkování i službách.",
    href: "https://www.lipno.info/mapa-lipna.html",
    icon: "map",
    badge: "Oficiální",
  },
  {
    title: "Parkování P1",
    text: "První 3 hodiny zdarma, potom 15 Kč za každou započatou hodinu.",
    href: "https://www.lipno.info/infocentrum.html",
    icon: "local_parking",
    badge: "Doprava",
  },
  {
    title: "Infocentrum",
    text: `${lipnoInfoCenter.address}`,
    href: "https://www.lipno.info/infocentrum.html",
    icon: "info",
    badge: "Kontakt",
  },
];

const zoneCards = [
  {
    title: "Centrální Lipno",
    text: "Marina, pláž, půjčovny, restaurace a hlavní nástupní body pro rodiny.",
    tone: "rgba(0,150,57,0.12)",
  },
  {
    title: "Kramolín",
    text: "Lanovky, Stezka korunami stromů, koloběžky a bikepark v jednom směru.",
    tone: "rgba(0,30,96,0.09)",
  },
  {
    title: "Jezero a pláže",
    text: "Vodní sporty, paddleboardy, šlapadla a letní zázemí u vody.",
    tone: "rgba(43,128,221,0.10)",
  },
];

export default function LipnoMapPage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="rounded-[2rem] p-6"
            style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.10) 0%, rgba(0,150,57,0.08) 100%)" }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Orientace v areálu</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight" style={{ color: lipnoBrand.primary }}>
              Mapa Lipna
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Rychlý rozcestník pro parkování, hlavní zóny resortu a oficiální interaktivní mapu.
            </p>
            <a
              href="https://www.lipno.info/mapa-lipna.html"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
              style={{ background: lipnoBrand.primary, color: "#fff" }}
            >
              Otevřít oficiální mapu
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid gap-3">
            {mapModules.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[1.8rem] p-5"
                style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                      {item.badge}
                    </span>
                    <h2 className="mt-3 font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.text}</p>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="rounded-[2rem] p-5" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Klíčové zóny</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Kde co najdete</h2>
              </div>
              <Link href="/zazitky" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Aktivity</Link>
            </div>
            <div className="mt-4 grid gap-3">
              {zoneCards.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] p-4" style={{ background: item.tone }}>
                  <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
