import Link from "next/link";
import { lipnoBrand } from "@/lib/lipno-data";

export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-12">
      <div className="rounded-[1.5rem] border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(0,30,96,0.08)" }}>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: lipnoBrand.primarySoft }}>
          <span className="material-symbols-outlined text-3xl" style={{ color: lipnoBrand.primary }}>
            cloud_off
          </span>
        </div>
        <h1 className="mt-6 font-headline text-3xl font-extrabold leading-tight" style={{ color: lipnoBrand.ink }}>
          Jste offline
        </h1>
        <p className="mt-3 text-base leading-relaxed" style={{ color: lipnoBrand.muted }}>
          Některé části aplikace potřebují internet. Zkuste znovu načíst stránku, až budete připojeni.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold"
          style={{ background: lipnoBrand.primary, color: "#fff" }}
        >
          Zpět domů
        </Link>
      </div>
    </main>
  );
}
