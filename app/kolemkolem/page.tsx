import Image from "next/image";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { kolemkolemPage } from "@/lib/kolemkolem-data";

export default function KolemKolemPage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] min-h-[21rem] p-6"
            style={{ boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <Image src={kolemkolemPage.heroImage} alt={kolemkolemPage.heroAlt} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,66,0.40),rgba(3,14,38,0.86))]" />
            <div className="relative z-10 flex min-h-[17rem] flex-col justify-end">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Cyklo platforma</p>
              <h1 className="mt-3 max-w-lg font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]">
                {kolemkolemPage.title}
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/84">{kolemkolemPage.intro}</p>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="rounded-[1.9rem] bg-white p-5" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
            <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>Proč otevřít KolemKolem</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{kolemkolemPage.text}</p>
            <ul className="mt-4 space-y-3">
              {kolemkolemPage.features.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                  <span style={{ color: lipnoBrand.secondary }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {kolemkolemPage.links.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] bg-white p-5 block"
                style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
              >
                <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                <p className="mt-3 text-sm font-bold" style={{ color: lipnoBrand.primary }}>Otevřít</p>
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="space-y-4">
            {kolemkolemPage.routes.map((route) => (
              <a
                key={route.title}
                href={route.href}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-[1.9rem] bg-white block"
                style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
              >
                <div className="relative h-52 w-full">
                  <Image src={route.image} alt={route.title} fill className="object-cover" unoptimized />
                </div>
                <div className="p-5">
                  <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{route.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{route.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
