import Image from "next/image";
import Link from "next/link";
import { lipnoBrand } from "@/lib/lipno-data";
import { getLipnoMapPointById, lipnoMapImage } from "@/lib/lipno-map";

type LocationMapCardProps = {
  pointId: string;
  title?: string;
  subtitle?: string;
};

export default function LocationMapCard({ pointId, title = "Kde nás najdete", subtitle }: LocationMapCardProps) {
  const point = getLipnoMapPointById(pointId);

  if (!point) {
    return null;
  }

  return (
    <section className="px-4 pt-8">
      <div
        className="overflow-hidden rounded-[1.9rem] bg-white"
        style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
      >
        <div className="p-5">
          <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.ink }}>{title}</h2>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
            {subtitle ?? point.location}
          </p>
        </div>

        <div className="relative aspect-[1.35/1] w-full overflow-hidden">
          <Image src={lipnoMapImage.src} alt={lipnoMapImage.alt} fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,30,96,0.12))]" />
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,30,96,0.22)]">
              <div className="absolute inset-0 rounded-full border-4 border-white/40 animate-ping" />
              <div className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black" style={{ background: lipnoBrand.primary, color: "#fff" }}>
                {point.code}
              </div>
            </div>
          </div>
          <div className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: "rgba(255,255,255,0.92)", color: lipnoBrand.primary }}>
            {point.title}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <div>
            <p className="text-sm font-bold" style={{ color: lipnoBrand.ink }}>{point.title}</p>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>{point.location}</p>
          </div>
          <Link
            href={`/mapa?point=${point.id}`}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
            style={{ background: lipnoBrand.primarySoft, color: lipnoBrand.primary }}
          >
            Otevřít mapu
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
