import { NextResponse } from "next/server";
import { getLipnoWeatherSnapshot } from "@/lib/windy";

export async function GET() {
  const snapshot = await getLipnoWeatherSnapshot();
  return NextResponse.json(snapshot);
}

