export type LipnoOpenState = {
  label: string;
  open: boolean | null;
};

function normalizeText(value: string) {
  return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function parseDateToken(value: string) {
  const match = value.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{2,4})/);
  if (!match) return null;

  const day = Number(match[1]);
  const month = Number(match[2]) - 1;
  const yearValue = Number(match[3]);
  const year = yearValue < 100 ? 2000 + yearValue : yearValue;
  return new Date(year, month, day);
}

function extractDateRange(value: string) {
  const match = value.match(/(\d{1,2}\.\s*\d{1,2}\.\s*\d{2,4})\s*(?:až|[-–])\s*(\d{1,2}\.\s*\d{1,2}\.\s*\d{2,4})/i);
  if (!match) return null;

  const start = parseDateToken(match[1]);
  const end = parseDateToken(match[2]);
  if (!start || !end) return null;

  end.setHours(23, 59, 59, 999);
  return { start, end };
}

function extractTimeRange(value: string) {
  const match = value.match(/(\d{1,2})[:.](\d{2})\s*[–-]\s*(\d{1,2})[:.](\d{2})/);
  if (!match) return null;

  const start = Number(match[1]) * 60 + Number(match[2]);
  const end = Number(match[3]) * 60 + Number(match[4]);
  return { start, end };
}

function expandDayRule(rule: string) {
  const normalized = normalizeText(rule).toUpperCase();
  const dayMap: Record<string, number> = {
    PO: 1,
    ÚT: 2,
    UT: 2,
    ST: 3,
    ČT: 4,
    CT: 4,
    PÁ: 5,
    PA: 5,
    SO: 6,
    NE: 0,
  };

  if (normalized.includes("DENNĚ")) {
    return [0, 1, 2, 3, 4, 5, 6];
  }

  const plusParts = normalized.split("+").map((item) => item.trim()).filter(Boolean);
  if (plusParts.length > 1) {
    return plusParts.flatMap((item) => dayMap[item] ?? []);
  }

  const rangeMatch = normalized.match(/(PO|ÚT|UT|ST|ČT|CT|PÁ|PA|SO|NE)\s*[-–]\s*(PO|ÚT|UT|ST|ČT|CT|PÁ|PA|SO|NE)/);
  if (rangeMatch) {
    const start = dayMap[rangeMatch[1]];
    const end = dayMap[rangeMatch[2]];
    if (start === undefined || end === undefined) return [];

    const ordered = [1, 2, 3, 4, 5, 6, 0];
    const startIndex = ordered.indexOf(start);
    const endIndex = ordered.indexOf(end);
    if (startIndex === -1 || endIndex === -1) return [];

    if (startIndex <= endIndex) {
      return ordered.slice(startIndex, endIndex + 1);
    }

    return [...ordered.slice(startIndex), ...ordered.slice(0, endIndex + 1)];
  }

  return normalized
    .split(/[,\s]+/)
    .map((item) => dayMap[item])
    .filter((item): item is number => item !== undefined);
}

function extractDayRule(value: string) {
  const normalized = normalizeText(value);
  const match = normalized.match(/(?:^|:)\s*(denně|zavřeno|PO\s*[-–]\s*PÁ|SO\s*[-–]\s*NE|SO\s*\+\s*NE|ST\s*\+\s*PÁ|NE\s*[-–]\s*ČT|NE\s*[-–]\s*CT|PÁ\s*[-–]\s*SO|PA\s*[-–]\s*SO)\b/i);
  return match ? match[1] : null;
}

export function getLipnoOpenState(openingHours: string[], now = new Date()): LipnoOpenState {
  const normalizedRows = openingHours.map(normalizeText);
  const datedRows = normalizedRows.filter((item) => extractDateRange(item));
  const activeRow = datedRows.find((item) => {
    const range = extractDateRange(item);
    return range ? now >= range.start && now <= range.end : false;
  });

  if (datedRows.length > 0 && !activeRow) {
    return { label: "Zavřeno", open: false };
  }

  const fallbackRow = normalizedRows.find((item) => extractTimeRange(item) || /\bzavřeno\b/i.test(item));
  const row = activeRow ?? fallbackRow;

  if (!row) {
    return { label: "Zavřeno", open: false };
  }

  if (/zavřeno/i.test(row)) {
    return { label: "Zavřeno", open: false };
  }

  const dayRule = extractDayRule(row);
  if (dayRule && !dayRule.toLowerCase().includes("denně")) {
    const validDays = expandDayRule(dayRule);
    if (validDays.length > 0 && !validDays.includes(now.getDay())) {
      return { label: "Zavřeno", open: false };
    }
  }

  const timeRange = extractTimeRange(row);
  if (!timeRange) {
    return { label: "Zavřeno", open: false };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isOpen = currentMinutes >= timeRange.start && currentMinutes <= timeRange.end;
  return { label: isOpen ? "Otevřeno" : "Zavřeno", open: isOpen };
}
