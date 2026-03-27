import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { getLipnoGastroBySlug, lipnoGastroDetails } from "@/lib/lipno-gastro";

type GastroDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lipnoGastroDetails.map((item) => ({ slug: item.slug }));
}

export default async function GastroDetailPage({ params }: GastroDetailPageProps) {
  const { slug } = await params;
  const gastro = getLipnoGastroBySlug(slug);

  if (!gastro) {
    notFound();
  }

  const related = lipnoGastroDetails.filter((item) => item.slug !== gastro.slug).slice(0, 3);

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div className="overflow-hidden rounded-[2rem]" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 16px 34px rgba(12,74,110,0.10)" }}>
            <div className="relative aspect-[16/10] w-full">
              <Image src={gastro.heroImage} alt={gastro.imageAlt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001E60]/78 via-[#001E60]/24 to-transparent" />
              <div className="absolute left-4 top-4">
                <Link
                  href="/gastro"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-white"
                  style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)" }}
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Zpět na gastro
                </Link>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Gastro podnik</p>
                <h1 className="mt-3 max-w-xl font-headline text-3xl font-extrabold tracking-tight text-white md:text-[2.8rem]">{gastro.title}</h1>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/82">{gastro.tagline ?? gastro.teaser}</p>
              </div>
            </div>

            <div className="grid gap-3 p-5 md:grid-cols-3 md:p-6">
              <div className="rounded-[1.4rem] p-4" style={{ background: lipnoBrand.primarySoft }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Místo</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{gastro.location}</p>
              </div>
              <a href={`tel:${gastro.phone.replace(/\s+/g, "")}`} className="rounded-[1.4rem] p-4 block" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>Telefon</p>
                <p className="mt-2 text-sm font-bold leading-tight" style={{ color: lipnoBrand.primary }}>{gastro.phone}</p>
              </a>
              <a href={`mailto:${gastro.email}`} className="rounded-[1.4rem] p-4 block" style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)" }}>
                <p className="text-xs font-semibold" style={{ color: lipnoBrand.muted }}>E-mail</p>
                <p className="mt-2 text-sm font-bold leading-tight break-all" style={{ color: lipnoBrand.primary }}>{gastro.email}</p>
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[1.8rem] p-5" style={{ background: "#fff", boxShadow: "0 10px 22px rgba(12,74,110,0.06)", border: "1px solid rgba(12,74,110,0.06)" }}>
              <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>Proč sem jít</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                {gastro.highlights.map((item) => (
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
                {gastro.openingHours.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: lipnoBrand.secondary }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {gastro.note ? <p className="mt-4 text-xs leading-relaxed" style={{ color: lipnoBrand.muted }}>{gastro.note}</p> : null}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {gastro.websiteUrl ? (
              <a
                href={gastro.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] p-5 block"
                style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 68%, #ea580c 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.18)" }}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/74">Web podniku</p>
                <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight text-white">Oficiální web a rezervace</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/82">Přímý vstup na web podniku nebo jeho provozovatele.</p>
              </a>
            ) : null}
            <a
              href={gastro.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Zdroj</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight" style={{ color: lipnoBrand.primary }}>Oficiální detail na Lipno.info</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Originální detail podniku se sezónními aktualizacemi.</p>
            </a>
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Další podniky</h2>
            <Link href="/gastro" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>Vše →</Link>
          </div>
          <div className="mt-4 space-y-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/gastro/${item.slug}`}
                className="rounded-[1.6rem] p-4 block"
                style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.06)", boxShadow: "0 10px 22px rgba(12,74,110,0.06)" }}
              >
                <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
