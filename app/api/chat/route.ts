import { NextRequest, NextResponse } from "next/server";
import {
  lipnoEvents,
  lipnoExperiences,
  lipnoFoxPersona,
  lipnoInfoCenter,
  lipnoRentals,
  lipnoServiceLinks,
  lipnoSeasonCopy,
  type LipnoSeason,
} from "@/lib/lipno-data";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function pickExperienceTitles(season: LipnoSeason) {
  return lipnoExperiences
    .filter((item) => item.seasons.includes(season))
    .slice(0, 3)
    .map((item) => item.title);
}

function answerLipno(query: string, season: LipnoSeason): string {
  const q = normalize(query);
  const seasonLabel = lipnoSeasonCopy[season].label.toLowerCase();

  if (!q.trim()) {
    return `${lipnoFoxPersona.name} pomůže s Lipnem: vstupenky, otevírací doby, webkamery, infocentrum, půjčovny i tipy na ${seasonLabel} zážitky.`;
  }

  if (/(prachatice|brno|praha|ceske budejovice)/.test(q) && !q.includes("lipno")) {
    return `${lipnoFoxPersona.name} pomůže hlavně s informacemi o Lipně. Zeptejte se prosím na vstupenky, provoz, zážitky, půjčovny nebo infocentrum.`;
  }

  if (/(vstupenk|skipas|lipno.card|lipnocard|koupit)/.test(q)) {
    const tickets = lipnoServiceLinks.find((item) => item.title.includes("Vstupenky"));
    return [
      `${lipnoFoxPersona.name}: vstupenky a výhody pro areál koupíte přes oficiální Lipno.card.`,
      `Odkaz: ${tickets?.href ?? "https://www.lipnocard.cz/"}`,
    ].join("\n");
  }

  if (/(webkamer|kamera|pocasi|snih)/.test(q)) {
    return [
      `${lipnoFoxPersona.name}: aktuální obraz z areálu i počasí najdete na oficiální stránce webkamer.`,
      "Na stránce je výhled na jezero, Stezku korunami stromů i Království lesa.",
      "Odkaz: https://www.lipno.info/webkamery-na-lipne.html",
    ].join("\n");
  }

  if (/(oteviraci|provozni doba|lanovk|stezka|kralovstvi lesa|pokladn)/.test(q)) {
    return [
      `${lipnoFoxPersona.name}: otevírací a provozní doby jsou na jedné oficiální stránce Lipna.`,
      "Najdete tam Stezku korunami stromů, Království lesa, lanové dráhy i infocentrum.",
      "Odkaz: https://www.lipno.info/oteviraci-a-provozni-doby.html",
    ].join("\n");
  }

  if (/(infocentr|kontakt|parkov|smenarna)/.test(q)) {
    return [
      `${lipnoInfoCenter.title}: ${lipnoInfoCenter.address}`,
      `Telefon: ${lipnoInfoCenter.phone}`,
      `E-mail: ${lipnoInfoCenter.email}`,
      lipnoInfoCenter.parking,
      "Odkaz: https://www.lipno.info/infocentrum.html",
    ].join("\n");
  }

  if (/(pujcovn|kajak|sup|paddle|slapadl|kolo|vybaven)/.test(q)) {
    const rental = lipnoRentals.find((item) => !item.seasons || item.seasons.includes(season)) ?? lipnoRentals[0];
    return [
      `${lipnoFoxPersona.name} doporučuje půjčovnu: ${rental.title} (${rental.area}).`,
      rental.summary,
      `Kontakt: ${rental.contact}`,
      `Odkaz: ${rental.href}`,
    ].join("\n");
  }

  if (/(deti|rodin|itinerar|plan|planek|program).*?(dest|prsi|zima|snih|4 hod|pulden|polden|odpoledne)/.test(q) || /(mame|mám).*(deti|děti)/.test(q)) {
    const picks = pickExperienceTitles(season);
    if (season === "zima") {
      return [
        `${lipnoFoxPersona.name}: pro zimní rodinný půlden bych šel takto:`,
        "1. Ráno začněte na skiareálu nebo na Stezce, podle energie dětí.",
        "2. Po dvou hodinách dejte teplý oběd v centrálním areálu.",
        "3. Odpoledne zkraťte program na jednu jistotu: Aquaworld nebo rodinnou animaci.",
        `Když chcete, navážu konkrétním plánem pro věk dětí. Dobré zimní jistoty: ${picks.join(", ")}.`,
      ].join("\n");
    }

    return [
      `${lipnoFoxPersona.name}: pro letní rodinný půlden bych šel takto:`,
      "1. Dopoledne dejte hlavní atrakci dřív, než přijde větší provoz.",
      "2. Na poledne naplánujte oběd v centru areálu.",
      "3. Odpoledne přepněte na jezero, půjčovnu nebo indoor jistotu podle počasí.",
      `Dobré letní jistoty: ${picks.join(", ")}.`,
    ].join("\n");
  }

  if (/(deti|rodin|co delat|zazitk|atrakc)/.test(q)) {
    const picks = lipnoExperiences.filter((item) => item.seasons.includes(season)).slice(0, 3);
    return [
      `${lipnoFoxPersona.name} doporučuje tyto ${seasonLabel} top zážitky:`,
      ...picks.map((item) => `- ${item.title}: ${item.summary}`),
    ].join("\n");
  }

  if (/(kalendar|akce|program|festival)/.test(q)) {
    return [
      `${lipnoFoxPersona.name}: v kalendáři Lipna teď běží hlavně tyto akce:`,
      ...lipnoEvents.filter((item) => item.seasons.includes(season)).slice(0, 3).map((item) => `- ${item.title} (${item.dateLabel})`),
      "Odkaz: https://www.lipno.info/kalendar.html",
    ].join("\n");
  }

  return `${lipnoFoxPersona.name} pomůže s Lipnem: vstupenky, provoz, webkamery, zážitky, kalendář, půjčovny a infocentrum. Zkuste dotaz trochu upřesnit, ideálně s počasím nebo věkem dětí.`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages, season } = await req.json() as {
      messages: { role: "user" | "assistant"; content: string }[];
      season?: LipnoSeason;
    };

    const question = [...messages].reverse().find((item) => item.role === "user")?.content ?? "";
    const activeSeason: LipnoSeason = season === "zima" ? "zima" : "leto";

    return NextResponse.json({
      reply: answerLipno(question, activeSeason),
      mode: "fallback",
    });
  } catch {
    return NextResponse.json({
      reply: answerLipno("", "leto"),
      mode: "fallback",
    });
  }
}
