import Link from "next/link";
import LipnoTopBar from "@/components/lipno/LipnoTopBar";
import LipnoBottomNav from "@/components/lipno/LipnoBottomNav";
import { lipnoBrand } from "@/lib/lipno-data";
import { getLipnoWeatherSnapshot } from "@/lib/windy";

const webcams = [
  {
    title: "Jezerní",
    type: "video" as const,
    poster: "https://exports.holidayinfo.cz/loc_cams_lastimage.php?dc=c5f9fb8c52d57ce4&camid=2176",
    src: "https://exports.holidayinfo.cz/loc_cams_expvideo_lastvideofile.php?account=lipnoservis:dCekB2egUE9KE&camid=2176&ext=mp4&size=1280x720",
    href: "https://www.lipno.info/webkamery-na-lipne/15-jezerni.html",
  },
  {
    title: "Restaurant U Yettiho",
    type: "video" as const,
    poster: "https://exports.holidayinfo.cz/loc_cams_lastimage.php?dc=c5f9fb8c52d57ce4&camid=2115",
    src: "https://exports.holidayinfo.cz/loc_cams_expvideo_lastvideofile.php?account=lipnoservis:dCekB2egUE9KE&camid=2115&ext=mp4&size=1280x720",
    href: "https://www.lipno.info/webkamery-na-lipne/14-restaurant-u-yettiho.html",
  },
  {
    title: "Stezka korunami stromů",
    type: "video" as const,
    poster: "https://exports.holidayinfo.cz/loc_cams_lastimage.php?dc=c5f9fb8c52d57ce4&camid=2100",
    src: "https://exports.holidayinfo.cz/loc_cams_expvideo_lastvideofile.php?account=lipnoservis:dCekB2egUE9KE&camid=2100&ext=mp4&size=1280x720",
    href: "https://www.lipno.info/webkamery-na-lipne/5-stezka-korunami-stromu.html",
  },
  {
    title: "Království lesa",
    type: "iframe" as const,
    src: "https://g0.ipcamlive.com/player/player.php?alias=5afd345fa07a3",
    href: "https://www.lipno.info/webkamery-na-lipne/13-kralovstvi-lesa.html",
  },
];

export default async function LipnoWeatherPage() {
  const weather = await getLipnoWeatherSnapshot();

  return (
    <>
      <LipnoTopBar />
      <main className="pt-24 pb-4 max-w-2xl mx-auto" style={{ background: lipnoBrand.sand }}>
        <section className="px-4 pt-5">
          <div
            className="relative overflow-hidden rounded-[2rem] p-6 text-white"
            style={{ background: "linear-gradient(135deg, #001E60 0%, #003083 62%, #009639 100%)", boxShadow: "0 18px 40px rgba(12,74,110,0.18)" }}
          >
            <div className="absolute right-[-2rem] top-[-2rem] h-40 w-40 rounded-full blur-3xl" style={{ background: "rgba(255,223,158,0.28)" }} />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]" style={{ background: "rgba(255,255,255,0.12)" }}>
                    {weather.source === "windy" ? `Windy · ${weather.updatedAt}` : "Aktuálně"}
                  </span>
                  <h1 className="mt-4 font-headline text-3xl font-extrabold tracking-tight">Počasí na Lipně</h1>
                  <p className="mt-2 text-sm text-white/78">{weather.summary}</p>
                </div>
                <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>{weather.currentIcon}</span>
              </div>
              <div className="mt-8 flex items-end gap-3">
                <span className="font-headline text-7xl font-black leading-none">{weather.currentTemp}</span>
                <div className="pb-2 text-sm font-bold text-white/80">
                  <p>↑ {weather.highTemp}</p>
                  <p>↓ {weather.lowTemp}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-[1.5rem] p-4" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Vítr</p>
                  <p className="mt-2 text-lg font-black">{weather.windLabel}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Voda</p>
                  <p className="mt-2 text-lg font-black">{weather.waterTempLabel}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Webkamery</p>
                  <p className="mt-2 text-lg font-black">{weather.webcamCountLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: lipnoBrand.ink }}>Dnešní předpověď</h2>
              <p className="mt-0.5 text-xs" style={{ color: lipnoBrand.muted }}>Hodinový přehled pro aktuální den.</p>
            </div>
            <a href="https://www.lipno.info/webkamery-na-lipne.html" target="_blank" rel="noreferrer" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>
              Kamery →
            </a>
          </div>
          <div className="mt-4 flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {weather.hourlyForecast.map((item) => (
              <div
                key={item.time}
                className="flex w-20 shrink-0 flex-col items-center gap-3 rounded-[1.6rem] px-3 py-4"
                style={item.active
                  ? { background: lipnoBrand.secondary, color: "#fff", boxShadow: "0 14px 28px rgba(0,150,57,0.18)" }
                  : { background: "#fff", color: lipnoBrand.ink, border: "1px solid rgba(12,74,110,0.06)" }}
              >
                <span className="text-xs font-bold">{item.time}</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                <span className="text-lg font-black">{item.temp}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="rounded-[2rem] bg-white p-5" style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}>
            <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Předpověď na 5 dní</h2>
            <div className="mt-4 space-y-3">
              {weather.weeklyForecast.map((item) => (
                <div key={item.day} className="flex items-center justify-between rounded-[1.4rem] px-4 py-3" style={{ background: "rgba(0,30,96,0.03)" }}>
                  <span className="w-12 text-sm font-bold" style={{ color: lipnoBrand.ink }}>{item.day}</span>
                  <div className="flex items-center gap-2 text-sm" style={{ color: lipnoBrand.muted }}>
                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                    <span>{item.rain}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <span style={{ color: lipnoBrand.muted }}>{item.low}</span>
                    <span style={{ color: lipnoBrand.ink }}>{item.high}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-8 pb-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Webkamery</h2>
              <p className="mt-1 text-sm" style={{ color: lipnoBrand.muted }}>Živý pohled z hlavních míst v areálu podle oficiální stránky Lipno.info.</p>
            </div>
            <a href="https://www.lipno.info/webkamery-na-lipne.html" target="_blank" rel="noreferrer" className="text-sm font-bold" style={{ color: lipnoBrand.primary }}>
              Všechny →
            </a>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {webcams.map((camera) => (
              <div
                key={camera.title}
                className="overflow-hidden rounded-[1.8rem] bg-white"
                style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 12px 24px rgba(12,74,110,0.06)" }}
              >
                <div className="relative aspect-video w-full bg-slate-100">
                  {camera.type === "video" ? (
                    <video className="h-full w-full object-cover" preload="none" poster={camera.poster} controls playsInline>
                      <source src={camera.src} type="video/mp4" />
                    </video>
                  ) : (
                    <iframe className="h-full w-full" src={camera.src} title={camera.title} loading="lazy" />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-headline text-lg font-extrabold" style={{ color: lipnoBrand.ink }}>{camera.title}</h3>
                    <a href={camera.href} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: lipnoBrand.primary }}>
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-4 pb-4">
          <div
            className="overflow-hidden rounded-[2rem] bg-white"
            style={{ border: "1px solid rgba(12,74,110,0.08)", boxShadow: "0 14px 30px rgba(12,74,110,0.08)" }}
          >
            <div className="p-5 pb-4">
              <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: lipnoBrand.secondary }}>Radar</p>
              <h2 className="mt-2 font-headline text-2xl font-extrabold" style={{ color: lipnoBrand.primary }}>Windy mapa</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: lipnoBrand.muted }}>
                Vítr a aktuální model nad Lipnem v interaktivním embed pohledu.
              </p>
            </div>
            <div className="aspect-[13/9] w-full border-y" style={{ borderColor: "rgba(12,74,110,0.08)" }}>
              <iframe
                className="h-full w-full"
                width="650"
                height="450"
                src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=%C2%B0C&metricWind=m/s&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=48.599&lon=14.221&detailLat=48.64&detailLon=14.221&detail=true"
                title="Windy Lipno"
                frameBorder="0"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <LipnoBottomNav />
    </>
  );
}
