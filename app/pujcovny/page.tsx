import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand, lipnoInfoCenter } from "@/lib/lipno-data";
import { lipnoCardPage, lipnoRentalDetails } from "@/lib/lipno-catalog";
import { getLipnoOpenState } from "@/lib/lipno-schedule";

export default function LipnoRentalsPage() {
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
              src="/uploads/rentals-hero.jpg"
              alt="Půjčovna kol Lipno"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,66,0.28),rgba(3,14,38,0.56),rgba(3,14,38,0.88))]" />
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
            <div className="relative z-10 flex min-h-[16rem] flex-col justify-end">
              <p
                className="inline-flex w-fit rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/84"
                style={{ background: "rgba(0,20,52,0.42)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.16)", textShadow: "0 4px 12px rgba(0,0,0,0.32)" }}
              >
                Půjčovny v areálu
              </p>
              <h1
                className="mt-3 max-w-lg font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]"
                style={{ textShadow: "0 12px 32px rgba(0,0,0,0.44)" }}
              >
                Půjčovny a servis na Lipně
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/96" style={{ textShadow: "0 8px 24px rgba(0,0,0,0.38)" }}>
                Kola, voda, koloběžky i servis v jednom přehledu. Každá karta drží fotku, provoz, detail a přímé zavolání.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Přehled půjčoven</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Aktuální stav beru z interních hodin a oficiálních detailů na Lipno.info.</p>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            {lipnoRentalDetails.map((item) => {
              const openState = getLipnoOpenState(item.openingHours);
              return (
                <article
                  key={item.slug}
                  className="overflow-hidden rounded-[1.9rem] bg-white"
                  style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                >
                  <div className="relative h-52 w-full">
                    <Image src={item.heroImage} alt={item.imageAlt} fill className="object-cover" unoptimized />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(5,21,54,0.74))]" />
                    <div className="absolute left-4 top-4">
                      <span
                        className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
                        style={
                          openState.open === true
                            ? { background: "rgba(220,252,231,0.96)", color: "#15803d" }
                            : openState.open === false
                              ? { background: "rgba(254,226,226,0.96)", color: "#b91c1c" }
                              : { background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }
                        }
                      >
                        {openState.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}>
                          {item.category}
                        </span>
                        <h3 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                        <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.location}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                    <div className="mt-4 rounded-[1.4rem] p-4" style={{ background: "rgba(0,30,96,0.03)" }}>
                      <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Otevírací doba</p>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                        {item.openingHours.slice(0, 2).map((hour) => (
                          <li key={hour} className="flex gap-2">
                            <span style={{ color: lipnoBrand.secondary }}>•</span>
                            <span>{hour}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        href={`/pujcovny/${item.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold"
                        style={{ background: lipnoBrand.primary, color: "#fff" }}
                      >
                        Detail
                      </Link>
                      <a
                        href={`tel:${item.phone.replace(/\s+/g, "")}`}
                        className="inline-flex min-w-[6.25rem] items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                        style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
                        aria-label={`Zavolat ${item.title}`}
                      >
                        <span className="material-symbols-outlined">call</span>
                        Zavolat
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={lipnoCardPage.accountUrl}
              className="rounded-[2rem] p-6 block"
              style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Vstupenky v appce</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">Koupit nebo přiřadit Lipno.card</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/82">
                Nejprve otevři interní účet v aplikaci a odtud pokračuj do oficiálního nákupu nebo párování karty.
              </p>
            </Link>
            <a
              href={`tel:${lipnoInfoCenter.phone.replace(/\s+/g, "")}`}
              className="rounded-[2rem] p-6 block"
              style={{ background: "#fff", boxShadow: "0 14px 30px rgba(12,74,110,0.08)", border: "1px solid rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Hotline</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>{lipnoInfoCenter.phone}</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Infocentrum pomůže s orientací v areálu, kontakty i provozem jednotlivých provozoven.
              </p>
            </a>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
