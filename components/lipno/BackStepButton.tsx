"use client";

import { usePathname, useRouter } from "next/navigation";
import { lipnoBrand } from "@/lib/lipno-data";

export default function BackStepButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="fixed bottom-28 left-1/2 z-40 inline-flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-3 text-sm font-black shadow-lg transition-transform active:scale-95"
      style={{ background: "#ffffff", color: lipnoBrand.primary, boxShadow: "0 16px 30px rgba(12,74,110,0.16)" }}
    >
      <span className="material-symbols-outlined text-base">arrow_back</span>
      Zpět
    </button>
  );
}
