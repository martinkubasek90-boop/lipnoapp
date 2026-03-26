import "server-only";

import { lipnoServiceModules, type LipnoSeason, type LipnoServiceModule } from "@/lib/lipno-data";

type DateRange = {
  from: Date;
  to: Date;
  schedule: string;
};

export type LipnoLiveStatus = {
  updatedAt: string;
  weather: string;
  wind: string;
  webcams: string;
  trailHours: string;
  liftHours: string;
  infoHours: string;
};

const SOURCES = {
  webcams: "https://www.lipno.info/webkamery-na-lipne.html",
  summerHours: "https://www.lipno.info/oteviraci-a-provozni-doby.html",
  winterHours: "https://www.lipno.info/oteviraci-a-provozni-doby-zima.html",
  info: "https://www.lipno.info/infocentrum.html",
};

function normalizeText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/(h1|h2|h3|p|li|div|section|br)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function parseDateToken(token: string) {
  const match = token.match(/(\d{1,2})\.(\d{1,2})\.(\d{2,4})/);
  if (!match) return null;
  const day = Number(match[1]);
  const month = Number(match[2]) - 1;
  const rawYear = Number(match[3]);
  const year = rawYear < 100 ? 2000 + rawYear : rawYear;
  return new Date(year, month, day);
}

function parseRanges(sectionText: string) {
  const lines = sectionText.split("\n").map((line) => line.trim()).filter(Boolean);
  const ranges: DateRange[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = line.match(/(\d{1,2}\.\d{1,2}\.\d{2,4})\s*-\s*(\d{1,2}\.\d{1,2}\.\d{2,4})(.*)/);
    if (!match) continue;

    const from = parseDateToken(match[1]);
    const to = parseDateToken(match[2]);
    if (!from || !to) continue;

    const scheduleLines = [match[3].trim()].filter(Boolean);

    for (let inner = index + 1; inner < lines.length; inner += 1) {
      const nextLine = lines[inner];
      if (/^\d{1,2}\.\d{1,2}\.\d{2,4}\s*-\s*\d{1,2}\.\d{1,2}\.\d{2,4}/.test(nextLine)) break;
      if (/^(##|LANOVÁ DRÁHA|Stezka korunami stromů Lipno|Království lesa|Infocentrum)$/i.test(nextLine)) break;
      scheduleLines.push(nextLine);
    }

    ranges.push({
      from,
      to,
      schedule: scheduleLines.join(" ").replace(/\s+/g, " ").trim(),
    });
  }

  return ranges;
}

function pickRange(ranges: DateRange[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return ranges.find((range) => today >= range.from && today <= range.to) ?? ranges[0];
}

function extractSection(text: string, startHeading: string, endHeadings: string[]) {
  const start = text.indexOf(startHeading);
  if (start === -1) return "";
  const tail = text.slice(start);
  const endCandidates = endHeadings
    .map((heading) => tail.indexOf(heading))
    .filter((index) => index > 0);
  const end = endCandidates.length ? Math.min(...endCandidates) : tail.length;
  return tail.slice(0, end);
}

async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 LipnoApp/1.0" },
    next: { revalidate: 900 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  const html = await res.text();
  return normalizeText(html);
}

export async function getLipnoLiveStatus(): Promise<LipnoLiveStatus> {
  try {
    const [webcamText, summerText, winterText, infoText] = await Promise.all([
      fetchText(SOURCES.webcams),
      fetchText(SOURCES.summerHours),
      fetchText(SOURCES.winterHours),
      fetchText(SOURCES.info),
    ]);

    const weatherMatch = webcamText.match(/([+-]?\d+\s*°C)\s*Rychlost větru:\s*([0-9]+\s*km\/h)/i);
    const webcamsCount = (webcamText.match(/Zážitky na Lipně|Jezerní|Restaurant U Yettiho|Stezka korunami stromů|Království lesa|Kemp Modřín/g) || []).length;

    const trailSection = extractSection(summerText, "Stezka korunami stromů Lipno", ["Království lesa", "Lanové dráhy"]);
    const liftSection = extractSection(winterText, "Lanové dráhy", ["Skiareál", "Půjčovny", "Infocentrum"]);
    const infoSection = extractSection(infoText, "Otevírací doba", ["Kontakty", "Tipy na cyklovýlety"]);

    const trailRange = pickRange(parseRanges(trailSection));
    const liftRange = pickRange(parseRanges(liftSection));
    const infoRange = pickRange(parseRanges(infoSection));

    return {
      updatedAt: new Date().toISOString(),
      weather: weatherMatch?.[1] ?? "5 °C",
      wind: weatherMatch?.[2] ?? "3 km/h",
      webcams: `${webcamsCount || 6} kamer online`,
      trailHours: trailRange?.schedule || "10:00–18:00",
      liftHours: liftRange?.schedule || "9:45–18:15",
      infoHours: infoRange?.schedule || "9:30–17:00",
    };
  } catch {
    return {
      updatedAt: new Date().toISOString(),
      weather: "5 °C",
      wind: "3 km/h",
      webcams: "6 kamer online",
      trailHours: "10:00–18:00",
      liftHours: "9:45–18:15",
      infoHours: "9:30–17:00",
    };
  }
}

export function buildLipnoServiceModules(season: LipnoSeason, live: LipnoLiveStatus): LipnoServiceModule[] {
  const fallback = lipnoServiceModules[season];

  if (season === "zima") {
    return [
      { ...fallback[0], value: `${live.weather} · ${live.wind}` },
      { ...fallback[1], value: `${live.liftHours}` },
      { ...fallback[2], value: "Lipno.card online" },
    ];
  }

  return [
    { ...fallback[0], value: `${live.weather} · ${live.wind}` },
    { ...fallback[1], value: `${live.webcams}` },
    { ...fallback[2], value: live.infoHours },
  ];
}
