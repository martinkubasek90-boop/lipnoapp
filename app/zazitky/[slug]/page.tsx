import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { getLipnoAttractionBySlug, lipnoAttractions } from "@/lib/lipno-attractions";
import { lipnoBrand } from "@/lib/lipno-data";

type AttractionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lipnoAttractions.map((item) => ({ slug: item.slug }));
}

export default async function AttractionDetailPage({ params }: AttractionDetailPageProps) {
  const { slug } = await params;
  const attraction = getLipnoAttractionBySlug(slug);

  if (!attraction) {
    notFound();
  }

  const related = lipnoAttractions.filter((item) => item.slug !== attraction.slug && item.category === attraction.category).slice(0, 3);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="overflow-hidden rounded-[2rem]"
            style={{
              background: "#fff",
              border: "1px solid rgba(12,74,110,0.08)",
              boxShadow: "0 16px 34px rgba(12,74,110,0.10)",
            }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image src={attraction.heroImage} alt={attraction.imageAlt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001E60]/78 via-[#001E60]/24 to-transparent" />
              <div className="absolute left-4 top-4">
                <Link
                  href="/zazitky"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-white"
                  style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)" }}
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Zpět na zážitky
                </Link>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Hlavní atrakce</p>
                <h1 className="mt-3 max-w-xl font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]">
                  {attraction.title}
                </h1>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/82">{attraction.teaser}</p>
              </div>
            </div>

            <div className="grid gap-3 p-5 md:grid-cols-3 md:p-6">
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.primarySoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Místo</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{attraction.location}</p>
              </div>
              <a href={`tel:${attraction.phone.replace(/\s+/g, "")}`} className="rounded-[1.4rem] p-4 block" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Telefon</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{attraction.phone}</p>
              </a>
              <a href={`mailto:${attraction.email}`} className="rounded-[1.4rem] p-4 block" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>E-mail</p>
                <p className="mt-2 text-sm font-bold leading-tight break-all" style={{ color: lipnoBrand.primary }}>{attraction.email}</p>
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[1.8rem] p-5" style={{ background: "#fff", boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Proč sem jít</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {attraction.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: lipnoBrand.secondary }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.8rem] p-5" style={{ background: lipnoBrand.secondarySoft, boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Otevírací doby</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {attraction.openingHours.map((item) => (
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
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Jen tam, kde oficiální web uvádí cenu nebo jasný benefit čitelně.</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {attraction.priceHighlights.map((item) => (
              <div
                key={`${item.label}-${item.price}`}
                className="rounded-[1.6rem] p-4"
                style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
              >
                <p className="text-sm font-semibold" style={{ color: lipnoBrand.muted }}>{item.label}</p>
                <p className="mt-2 font-headline text-2xl font-black" style={{ color: lipnoBrand.primary }}>{item.price}</p>
                {item.detail ? <p className="mt-2 text-xs font-semibold" style={{ color: lipnoBrand.secondary }}>{item.detail}</p> : null}
              </div>
            ))}
          </div>
          {attraction.note ? <p className="mt-3 text-xs leading-relaxed" style={{ color: lipnoBrand.muted }}>{attraction.note}</p> : null}
        </section>

        <section className="px-4 pt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {attraction.bookingUrl ? (
              <a
                href={attraction.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] p-5 block"
                style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #009639 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Rezervace</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">Koupit nebo rezervovat online</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/82">Přímý vstup do oficiálního nákupu na Lipno.card nebo e-shopu atrakce.</p>
              </a>
            ) : null}
            {attraction.extraUrl ? (
              attraction.extraUrl.startsWith("/") ? (
                <Link
                  href={attraction.extraUrl}
                  className="rounded-[1.8rem] p-5 block"
                  style={{ background: lipnoBrand.secondarySoft, border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Navazuje</p>
                  <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>{attraction.extraLabel}</h2>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Souvisí s touto atrakcí a dává smysl otevřít ji rovnou z appky.</p>
                </Link>
              ) : (
                <a
                  href={attraction.extraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.8rem] p-5 block"
                  style={{ background: lipnoBrand.secondarySoft, border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Praktická věc</p>
                  <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>{attraction.extraLabel}</h2>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Přímý odkaz na doplňující oficiální podklad.</p>
                </a>
              )
            ) : (
              <Link
                href="/mapa"
                className="rounded-[1.8rem] p-5 block"
                style={{ background: lipnoBrand.primarySoft, border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.primary }}>V areálu</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>Zobrazit v mapě</h2>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Napojení na interaktivní mapu a další body v okolí.</p>
              </Link>
            )}
          </div>
        </section>

        {related.length > 0 ? (
          <section className="px-4 pt-8 pb-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Podobné atrakce</h2>
              <Link href="/zazitky" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
            </div>
            <div className="mt-4 space-y-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/zazitky/${item.slug}`}
                  className="rounded-[1.6rem] p-4 block"
                  style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
                >
                  <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
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
