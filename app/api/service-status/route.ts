import { NextRequest, NextResponse } from "next/server";
import { buildLipnoServiceModules, getLipnoLiveStatus } from "@/lib/lipno-live";
import type { LipnoSeason } from "@/lib/lipno-data";

export async function GET(req: NextRequest) {
  const seasonParam = req.nextUrl.searchParams.get("season");
  const season: LipnoSeason = seasonParam === "zima" ? "zima" : "leto";
  const live = await getLipnoLiveStatus();
  const modules = buildLipnoServiceModules(season, live);

  return NextResponse.json({
    live,
    modules,
  });
}
