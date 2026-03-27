"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fallbackWeather, type LipnoWeatherSnapshot } from "@/lib/windy";
import { lipnoBrand } from "@/lib/lipno-data";

function getIconColor(icon: string) {
  if (icon === "wb_sunny") {
    return "#fbbf24";
  }

  if (icon === "rainy") {
    return "#60a5fa";
  }

  if (icon === "cloudy_snowing" || icon === "ac_unit") {
    return "#93c5fd";
  }

  return "#ffffff";
}

export default function HomeWeatherPanel() {
  const [weather, setWeather] = useState<LipnoWeatherSnapshot>(fallbackWeather);

  useEffect(() => {
    let active = true;

    fetch("/api/weather")
      .then((response) => (response.ok ? response.json() : null))
      .then((snapshot: LipnoWeatherSnapshot | null) => {
        if (active && snapshot) {
          setWeather(snapshot);
        }
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="px-4 pt-8">
      <div
        className="rounded-[2rem] p-5 text-center"
        style={{ background: "linear-gradient(180deg, rgba(0,30,96,0.96), rgba(0,54,120,0.92) 58%, rgba(0,150,57,0.82) 100%)", boxShadow: "0 16px 34px rgba(12,74,110,0.16)" }}
      >
        <h2 className="font-headline text-2xl font-extrabold text-white">Aktuální předpověď</h2>
        <p className="mt-2 text-sm text-white">{weather.summary}</p>
        <div className="mt-5 -mx-1 overflow-x-auto pb-1 hide-scrollbar">
          <div className="flex min-w-max gap-3 px-1">
            {weather.hourlyForecast.map((item) => (
              <div
                key={item.time}
                className="w-[6.6rem] shrink-0 rounded-[1.2rem] px-2 py-4 text-center"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <p className="text-xs font-bold text-white">{item.time}</p>
                <span className="material-symbols-outlined mt-2 text-[2rem]" style={{ color: getIconColor(item.icon) }}>
                  {item.icon}
                </span>
                <p className="mt-2 text-xl font-black text-white">{item.temp}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <Link
            href="/pocasi"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold"
            style={{ background: "rgba(255,255,255,0.94)", color: lipnoBrand.primary }}
          >
            Detailní předpověď
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
