import { NextResponse } from "next/server";
import { getLipnoWeatherSnapshot } from "@/lib/windy";

export const revalidate = 600;

export async function GET() {
  const snapshot = await getLipnoWeatherSnapshot();
  return NextResponse.json(snapshot, {
    headers: {
      "Cache-Control": "public, max-age=600, s-maxage=600, stale-while-revalidate=120",
    },
  });
}
