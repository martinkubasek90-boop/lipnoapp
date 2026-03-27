import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import LocationMapCard from "@/components/lipno/LocationMapCard";
import { lipnoBrand } from "@/lib/lipno-data";
import { getLipnoRentalBySlug, lipnoRentalDetails } from "@/lib/lipno-catalog";
import { rentalMapPointBySlug } from "@/lib/lipno-location-links";

type RentalDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lipnoRentalDetails.map((item) => ({ slug: item.slug }));
}

export default async function RentalDetailPage({ params }: RentalDetailPageProps) {
  const { slug } = await params;
  const rental = getLipnoRentalBySlug(slug);

  if (!rental) {
    notFound();
  }

  const related = lipnoRentalDetails.filter((item) => item.slug !== rental.slug && item.category === rental.category).slice(0, 3);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="overflow-hidden rounded-[2rem] bg-white"
            style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 16px 34px rgba(12,74,110,0.10)" }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image src={rental.heroImage} alt={rental.imageAlt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00142f]/92 via-[#001e60]/54 to rgba(0,30,96,0.22)" />
              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),transparent)]" />
              <div className="absolute left-4 top-4">
                <Link
                  href="/pujcovny"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-white"
                  style={{ background: "rgba(0,20,52,0.46)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.16)", textShadow: "0 4px 14px rgba(0,0,0,0.34)" }}
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Všechny půjčovny
                </Link>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/86" style={{ textShadow: "0 4px 14px rgba(0,0,0,0.34)" }}>{rental.category}</p>
                <h1 className="mt-3 max-w-xl font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]" style={{ textShadow: "0 10px 28px rgba(0,0,0,0.42)" }}>
                  {rental.title}
                </h1>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/94" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.34)" }}>{rental.teaser}</p>
              </div>
            </div>

            <div className="grid gap-3 p-5 md:grid-cols-3 md:p-6">
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.primarySoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Místo</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{rental.location}</p>
              </div>
              <a href={`tel:${rental.phone.replace(/\s+/g, "")}`} className="rounded-[1.4rem] p-4 block" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Telefon</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{rental.phone}</p>
              </a>
              <a href={`mailto:${rental.email}`} className="rounded-[1.4rem] p-4 block" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>E-mail</p>
                <p className="mt-2 text-sm font-bold leading-tight break-all" style={{ color: lipnoBrand.primary }}>{rental.email}</p>
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[1.8rem] p-5" style={{ background: "#fff", boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Co je na tom silné</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {rental.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: lipnoBrand.secondary }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.8rem] p-5" style={{ background: lipnoBrand.secondarySoft, boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Otevírací doba</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {rental.openingHours.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: lipnoBrand.secondary }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Ceníkové highlighty</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Tam, kde oficiální web uvádí konkrétní ceny, je tahám přímo sem.</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {rental.priceHighlights.length > 0 ? (
              rental.priceHighlights.map((item) => (
                <div
                  key={`${item.label}-${item.price}`}
                  className="rounded-[1.6rem] p-4"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: lipnoBrand.muted }}>{item.label}</p>
                  <p className="mt-2 font-headline text-2xl font-black" style={{ color: lipnoBrand.primary }}>{item.price}</p>
                  {item.detail ? (
                    <p className="mt-2 text-xs font-semibold" style={{ color: lipnoBrand.secondary }}>{item.detail}</p>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="rounded-[1.6rem] p-5 sm:col-span-2" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}>
                <p className="text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                  Tuhle stránku jsem založil jako interní landing, ale přesný ceník si drží oficiální web Lipna. Níže je přímé CTA na originální detail.
                </p>
              </div>
            )}
          </div>
          {rental.note ? (
            <p className="mt-3 text-xs leading-relaxed" style={{ color: lipnoBrand.muted }}>{rental.note}</p>
          ) : null}
        </section>

        <LocationMapCard pointId={rentalMapPointBySlug[rental.slug] ?? "element"} />

        <section className="px-4 pt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {rental.bookingUrl ? (
              <a
                href={rental.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] p-5 block"
                style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white">Rezervace</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">Rezervovat online</h2>
                <p className="mt-3 text-sm leading-relaxed text-white">Přímý vstup do oficiální online rezervace Lipna.</p>
              </a>
            ) : null}
            <Link
              href="/mapa"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: lipnoBrand.primarySoft, border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.primary }}>Orientační bod</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>Otevřít resort mapu</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Přesná poloha půjčovny v mapě areálu včetně dalších služeb a gastro bodů.</p>
            </Link>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="px-4 pt-8 pb-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Podobné půjčovny</h2>
              <Link href="/pujcovny" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
            </div>
            <div className="mt-4 space-y-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/pujcovny/${item.slug}`}
                  className="rounded-[1.6rem] p-4 block"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
                >
                  <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: lipnoBrand.secondary }}>{item.location}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <LipnoBottomNav />
    </>
  );
}
