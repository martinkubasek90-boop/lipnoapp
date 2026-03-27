import Image from "next/image";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoAccommodationDetails, lipnoAccommodationHero } from "@/lib/lipno-accommodation";

export default function LipnoAccommodationPage() {
  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] min-h-[20rem] p-6"
            style={{ boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <Image
              src={lipnoAccommodationHero.image}
              alt={lipnoAccommodationHero.imageAlt}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,66,0.18),rgba(3,14,38,0.50),rgba(3,14,38,0.88))]" />
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
            <div className="relative z-10 flex min-h-[16rem] flex-col justify-end">
              <h1
                className="mt-3 max-w-lg font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]"
                style={{ textShadow: "0 12px 32px rgba(0,0,0,0.44)" }}
              >
                Ubytování na Lipně
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white" style={{ textShadow: "0 8px 24px rgba(0,0,0,0.40)" }}>
                Přehled hlavních ubytovacích partnerů přímo v resortu. Rychlý výběr, fotka a přímý odchod na oficiální web.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="space-y-4">
            {lipnoAccommodationDetails.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-[1.9rem] bg-white"
                style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
              >
                <div className="relative h-52 w-full">
                  <Image src={item.heroImage} alt={item.imageAlt} fill className="object-cover" unoptimized />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(5,21,54,0.74))]" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                        Ubytování
                      </span>
                      <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                      <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.location}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span style={{ color: lipnoBrand.secondary }}>•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                      style={{ background: lipnoBrand.primary, color: "#fff" }}
                    >
                      {item.cta}
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  </div>
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
