import Image from "next/image";
import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { lipnoGastroDetails } from "@/lib/lipno-gastro";

export default function LipnoGastroPage() {
  const [featured, ...rest] = lipnoGastroDetails;

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div className="rounded-[2rem] p-6" style={{ background: "linear-gradient(135deg, rgba(0,30,96,0.10) 0%, rgba(234,88,12,0.10) 100%)" }}>
            <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: "#c2410c" }}>Podle oficiálního gastro přehledu</p>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight" style={{ color: lipnoBrand.primary }}>
              Gastro na Lipně
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
              Přehled podniků z oficiální sekce gastro. Každý podnik má vlastní detail s kontaktem, provozem a přímým odkazem na zdroj.
            </p>
          </div>
        </section>

        <section className="px-4 pt-6">
          <Link
            href={`/gastro/${featured.slug}`}
            className="block overflow-hidden rounded-[2rem]"
            style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 16px 34px rgba(12,74,110,0.10)" }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image src={featured.heroImage} alt={featured.imageAlt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001E60]/78 via-[#001E60]/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/72">Doporučený podnik</p>
                <h2 className="mt-3 font-headline text-3xl font-extrabold text-white">{featured.title}</h2>
                <p className="mt-2 max-w-lg text-sm text-white/82">{featured.tagline ?? featured.teaser}</p>
              </div>
            </div>
          </Link>
        </section>

        <section className="px-4 pt-6">
          <div className="grid gap-3">
            {rest.map((item) => (
              <Link
                key={item.slug}
                href={`/gastro/${item.slug}`}
                className="block rounded-[1.8rem] p-5"
                style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-headline text-xl font-extrabold" style={{ color: lipnoBrand.ink }}>{item.title}</h2>
                    <p className="mt-2 text-sm font-semibold" style={{ color: "#c2410c" }}>{item.tagline ?? item.location}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{item.teaser}</p>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: lipnoBrand.primary }}>arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.lipno.info/zazitky.html?gastro=1"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: "#fff", border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Zdroj</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Oficiální gastro přehled</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Původní seznam podniků na Lipno.info.</p>
            </a>
            <Link
              href="/mapa"
              className="rounded-[1.8rem] p-5 block"
              style={{ background: lipnoBrand.primarySoft, border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.primary }}>Mapa</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Zobrazit na mapě</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>Gastro body jsou napojené i do nové interaktivní mapy areálu.</p>
            </Link>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
