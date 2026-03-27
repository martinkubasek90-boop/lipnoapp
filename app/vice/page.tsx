import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";

const sections = [
  {
    title: "Počasí",
    text: "Aktuální přehled, hodinová předpověď a rychlý vstup do počasí pro den v resortu.",
    href: "/pocasi",
    icon: "wb_sunny",
    kind: "internal" as const,
  },
  {
    title: "Plánovat pobyt",
    text: "Kalendář akcí, tipy na den a jednoduché plánování pobytu podle sezóny.",
    href: "/planovat",
    icon: "event",
    kind: "internal" as const,
  },
  {
    title: "Servis v areálu",
    text: "Webkamery, provozní doby, infocentrum a provoz resortu na jednom místě.",
    href: "/servis",
    icon: "concierge",
    kind: "internal" as const,
  },
  {
    title: "Fox AI průvodce",
    text: "Rychlé doporučení pro rodiny, déšť, jídlo i plán dne podle situace.",
    href: "/ai",
    icon: "pets",
    kind: "internal" as const,
  },
  {
    title: "Půjčovny",
    text: "Kola, voda, koloběžky a další oficiální půjčovny v přehledné podobě.",
    href: "/pujcovny",
    icon: "pedal_bike",
    kind: "internal" as const,
  },
  {
    title: "Gastro",
    text: "Restaurace, kavárny a gastro podniky s vlastními detailovými stránkami.",
    href: "/gastro",
    icon: "restaurant",
    kind: "internal" as const,
  },
  {
    title: "Kalendář Lipna",
    text: "Oficiální program a akce přímo na webu Lipno.info.",
    href: "https://www.lipno.info/kalendar.html",
    icon: "calendar_month",
    kind: "external" as const,
  },
];

export default function LipnoMorePage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div className="rounded-[2rem] p-6" style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.10) 0%, rgba(0,150,57,0.08) 100%)" }}>
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Další sekce</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight" style={{ color: lipnoBrand.primary }}>
              Více z Lipna
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Rozcestník pro služby, plánování, AI průvodce a další obsah, který se už nevejde do hlavního tab baru.
            </p>
          </div>
        </section>

        <section className="px-4 pt-6 pb-4">
          <div className="grid gap-3">
            {sections.map((item) =>
              item.kind === "internal" ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-[1.8rem] p-5"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.text}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>{item.icon}</span>
                  </div>
                </Link>
              ) : (
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
                      <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.text}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>open_in_new</span>
                  </div>
                </a>
              ),
            )}
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
