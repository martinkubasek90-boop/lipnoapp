const WINDY_POINT_FORECAST_URL = "https://api.windy.com/api/point-forecast/v2";
const LIPNO_TIMEZONE = "Europe/Prague";

const LIPNO_LAT = 48.6396;
const LIPNO_LON = 14.2294;

const monthlyAverageWaterTemp = [5, 5, 7, 10, 13, 19, 20, 19, 18, 13, 9, 4];

type WindyResponse = {
  ts: number[];
  units?: Record<string, string | null>;
  "temp-surface"?: Array<number | null>;
  "wind_u-surface"?: Array<number | null>;
  "wind_v-surface"?: Array<number | null>;
  "gust-surface"?: Array<number | null>;
  "past3hprecip-surface"?: Array<number | null>;
  "ptype-surface"?: Array<number | null>;
  "lclouds-surface"?: Array<number | null>;
  "mclouds-surface"?: Array<number | null>;
  "hclouds-surface"?: Array<number | null>;
};

export type LipnoWeatherPoint = {
  time: string;
  temp: string;
  icon: string;
  active?: boolean;
};

export type LipnoWeatherDay = {
  day: string;
  icon: string;
  rain: string;
  low: string;
  high: string;
};

export type LipnoWeatherSnapshot = {
  locationLabel: string;
  summary: string;
  currentTemp: string;
  highTemp: string;
  lowTemp: string;
  windLabel: string;
  waterTempLabel: string;
  webcamCountLabel: string;
  currentIcon: string;
  hourlyForecast: LipnoWeatherPoint[];
  weeklyForecast: LipnoWeatherDay[];
  source: "windy" | "fallback";
  updatedAt: string;
};

export const fallbackWeather: LipnoWeatherSnapshot = {

  locationLabel: "Lipno nad Vltavou",
  summary: "Lipno nad Vltavou · jasno a dobré podmínky pro den u jezera.",
  currentTemp: "24°",
  highTemp: "26°",
  lowTemp: "14°",
  windLabel: "12 km/h",
  waterTempLabel: "7 °C",
  webcamCountLabel: "5",
  currentIcon: "wb_sunny",
  hourlyForecast: [
    { time: "Teď", temp: "24°", icon: "wb_sunny", active: true },
    { time: "14:00", temp: "25°", icon: "wb_sunny" },
    { time: "15:00", temp: "26°", icon: "partly_cloudy_day" },
    { time: "16:00", temp: "24°", icon: "cloud" },
    { time: "17:00", temp: "22°", icon: "rainy" },
    { time: "18:00", temp: "21°", icon: "cloud" },
  ],
  weeklyForecast: [
    { day: "Dnes", icon: "wb_sunny", rain: "0 %", low: "14°", high: "24°" },
    { day: "So", icon: "partly_cloudy_day", rain: "10 %", low: "15°", high: "26°" },
    { day: "Ne", icon: "rainy", rain: "60 %", low: "12°", high: "19°" },
    { day: "Po", icon: "cloud", rain: "20 %", low: "13°", high: "21°" },
    { day: "Út", icon: "wb_sunny", rain: "0 %", low: "14°", high: "25°" },
  ],
  source: "fallback",
  updatedAt: "statická data",
};

function celsius(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return null;
  }

  if (value > 150) {
    return value - 273.15;
  }

  return value;
}

function kmhFromWind(u: number | null | undefined, v: number | null | undefined) {
  if (typeof u !== "number" || typeof v !== "number") {
    return null;
  }

  const ms = Math.sqrt((u ** 2) + (v ** 2));
  return Math.round(ms * 3.6);
}

function formatTemp(value: number | null | undefined) {
  const temp = celsius(value);
  if (temp === null) {
    return "—";
  }

  return `${Math.round(temp)}°`;
}

function getMonthlyWaterTempLabel(date: Date) {
  const average = monthlyAverageWaterTemp[date.getMonth()] ?? 7;
  return `${average} °C`;
}

function precipMetersToMillimeters(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return 0;
  }

  return value * 1000;
}

function formatPrecipLabel(totalPrecipMm: number) {
  if (totalPrecipMm < 0.2) {
    return "0 mm";
  }

  if (totalPrecipMm < 1) {
    return `${totalPrecipMm.toFixed(1)} mm`;
  }

  return `${Math.round(totalPrecipMm)} mm`;
}

function getCloudCover(data: WindyResponse, index: number) {
  const low = data["lclouds-surface"]?.[index] ?? 0;
  const mid = data["mclouds-surface"]?.[index] ?? 0;
  const high = data["hclouds-surface"]?.[index] ?? 0;

  return Math.max(low ?? 0, mid ?? 0, high ?? 0);
}

function getWeatherIcon(data: WindyResponse, index: number) {
  const precip = precipMetersToMillimeters(data["past3hprecip-surface"]?.[index]);
  const ptype = data["ptype-surface"]?.[index] ?? 0;
  const cloudCover = getCloudCover(data, index);
  const temp = celsius(data["temp-surface"]?.[index]);

  if (ptype === 5 || (precip > 0.3 && typeof temp === "number" && temp <= 1)) {
    return "cloudy_snowing";
  }

  if (ptype === 7 || precip >= 4) {
    return "rainy";
  }

  if (precip >= 1) {
    return "rainy";
  }

  if (precip > 0.15 && cloudCover >= 35) {
    return "rainy";
  }

  if (cloudCover >= 85) {
    return "cloud";
  }

  if (cloudCover >= 45) {
    return "partly_cloudy_day";
  }

  return "wb_sunny";
}

function getSummaryFromIcon(icon: string) {
  switch (icon) {
    case "rainy":
      return "proměnlivo a místy přeháňky";
    case "cloudy_snowing":
      return "sněhové přeháňky";
    case "cloud":
      return "oblačno";
    case "partly_cloudy_day":
      return "polojasno";
    default:
      return "jasno a dobré podmínky";
  }
}

function getDayLabel(date: Date, isFirst: boolean) {
  if (isFirst) {
    return "Dnes";
  }

  return new Intl.DateTimeFormat("cs-CZ", { weekday: "short", timeZone: LIPNO_TIMEZONE })
    .format(date)
    .replace(".", "");
}

function getHourLabel(date: Date, isFirst: boolean) {
  if (isFirst) {
    return "Teď";
  }

  return new Intl.DateTimeFormat("cs-CZ", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: LIPNO_TIMEZONE,
  }).format(date);
}

async function fetchWindyPointForecast(): Promise<WindyResponse | null> {
  const key = process.env.WINDY_API_KEY;

  if (!key) {
    return null;
  }

  const response = await fetch(WINDY_POINT_FORECAST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lat: LIPNO_LAT,
      lon: LIPNO_LON,
      model: "iconEu",
      parameters: ["temp", "wind", "windGust", "precip", "ptype", "lclouds", "mclouds", "hclouds"],
      levels: ["surface"],
      key,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Windy request failed with ${response.status}`);
  }

  return response.json() as Promise<WindyResponse>;
}

function buildWeatherSnapshot(data: WindyResponse): LipnoWeatherSnapshot {
  const nowIndex = 0;
  const todayDate = new Date(data.ts[nowIndex] ?? Date.now());
  const updatedAt = new Intl.DateTimeFormat("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: LIPNO_TIMEZONE,
  }).format(todayDate);

  const currentIcon = getWeatherIcon(data, nowIndex);
  const hourlyForecast = (data.ts ?? []).slice(0, 6).map((timestamp, index) => ({
    time: getHourLabel(new Date(timestamp), index === 0),
    temp: formatTemp(data["temp-surface"]?.[index]),
    icon: getWeatherIcon(data, index),
    active: index === 0,
  }));

  const todayValues = (data.ts ?? [])
    .map((timestamp, index) => ({
      date: new Date(timestamp),
      temp: celsius(data["temp-surface"]?.[index]),
      precip: precipMetersToMillimeters(data["past3hprecip-surface"]?.[index]),
      index,
    }))
    .filter(({ date }) => date.toDateString() === todayDate.toDateString());

  const todayHigh = todayValues.length
    ? Math.max(...todayValues.map((item) => item.temp ?? -999))
    : celsius(data["temp-surface"]?.[0]) ?? 24;
  const todayLow = todayValues.length
    ? Math.min(...todayValues.map((item) => item.temp ?? 999))
    : celsius(data["temp-surface"]?.[0]) ?? 14;
  const windKmh = kmhFromWind(data["wind_u-surface"]?.[0], data["wind_v-surface"]?.[0]);

  const dailyBuckets = new Map<string, { date: Date; indices: number[] }>();
  (data.ts ?? []).forEach((timestamp, index) => {
    const date = new Date(timestamp);
    const key = date.toDateString();
    const bucket = dailyBuckets.get(key);
    if (bucket) {
      bucket.indices.push(index);
    } else {
      dailyBuckets.set(key, { date, indices: [index] });
    }
  });

  const weeklyForecast = Array.from(dailyBuckets.values())
    .slice(0, 5)
    .map((bucket, bucketIndex) => {
      const temps = bucket.indices
        .map((index) => celsius(data["temp-surface"]?.[index]))
        .filter((value): value is number => typeof value === "number");
      const precipTotal = bucket.indices.reduce((sum, index) => sum + precipMetersToMillimeters(data["past3hprecip-surface"]?.[index]), 0);
      const midpointIndex = bucket.indices[Math.floor(bucket.indices.length / 2)] ?? bucket.indices[0];

      return {
        day: getDayLabel(bucket.date, bucketIndex === 0),
        icon: getWeatherIcon(data, midpointIndex),
        rain: formatPrecipLabel(precipTotal),
        low: `${Math.round(Math.min(...temps))}°`,
        high: `${Math.round(Math.max(...temps))}°`,
      };
    });

  return {
    locationLabel: "Lipno nad Vltavou",
    summary: `Lipno nad Vltavou · ${getSummaryFromIcon(currentIcon)} pro den u jezera.`,
    currentTemp: formatTemp(data["temp-surface"]?.[0]),
    highTemp: `${Math.round(todayHigh)}°`,
    lowTemp: `${Math.round(todayLow)}°`,
    windLabel: windKmh ? `${windKmh} km/h` : fallbackWeather.windLabel,
    waterTempLabel: getMonthlyWaterTempLabel(todayDate),
    webcamCountLabel: fallbackWeather.webcamCountLabel,
    currentIcon,
    hourlyForecast: hourlyForecast.length ? hourlyForecast : fallbackWeather.hourlyForecast,
    weeklyForecast: weeklyForecast.length ? weeklyForecast : fallbackWeather.weeklyForecast,
    source: "windy",
    updatedAt,
  };
}

export async function getLipnoWeatherSnapshot(): Promise<LipnoWeatherSnapshot> {
  try {
    const data = await fetchWindyPointForecast();
    if (!data?.ts?.length) {
      return {
        ...fallbackWeather,
        waterTempLabel: getMonthlyWaterTempLabel(new Date()),
      };
    }

    return buildWeatherSnapshot(data);
  } catch {
    return {
      ...fallbackWeather,
      waterTempLabel: getMonthlyWaterTempLabel(new Date()),
    };
  }
}
