export type LipnoExperience = {
  id: number;
  title: string;
  category: "rodiny" | "sport" | "voda" | "adrenalin" | "wellness";
  summary: string;
  season: string;
  seasons: LipnoSeason[];
  duration: string;
  highlight: string;
  href: string;
};

export type LipnoEvent = {
  id: number;
  title: string;
  dateLabel: string;
  category: "rodiny" | "sport" | "festival" | "vecer";
  summary: string;
  seasons: LipnoSeason[];
  href: string;
};

export type LipnoServiceLink = {
  id: number;
  title: string;
  text: string;
  icon: string;
  href: string;
  badge?: string;
  seasons?: LipnoSeason[];
};

export type LipnoQuickAction = {
  id: number;
  title: string;
  icon: string;
  href: string;
  seasons?: LipnoSeason[];
};

export type LipnoRental = {
  id: number;
  title: string;
  area: string;
  contact: string;
  summary: string;
  href: string;
  seasons?: LipnoSeason[];
};

export type LipnoSeason = "leto" | "zima";

export type LipnoPlannerTip = {
  id: number;
  title: string;
  text: string;
};

export type LipnoSeasonHero = {
  heroBackground: string;
  heroGlow: string;
  heroGlowSecondary: string;
  panelBackground: string;
  panelBorder: string;
  statThreeLabel: string;
  statThreeValue: string;
  quickLabel: string;
  quickSubtitle: string;
  spotlightLabel: string;
  spotlightTitle: string;
  spotlightText: string;
  spotlightHref: string;
  spotlightCta: string;
  plannerLabel: string;
};

export const lipnoBrand = {
  primary: "#001E60",
  primarySoft: "#e8eefc",
  secondary: "#009639",
  secondarySoft: "#e2f6ea",
  accent: "#009639",
  accentSoft: "#e2f6ea",
  sand: "#ffffff",
  surface: "#ffffff",
  ink: "#001E60",
  muted: "#4f6178",
  link: "#009639",
  logoUrl: "/branding/lipno-logo.svg",
  logoHref: "https://www.lipno.info/",
  logoAlt: "Lipno.info - zážitky a ubytování pro rodiny s dětmi",
};

export const lipnoQuickActions: LipnoQuickAction[] = [
  { id: 1, title: "Vstupenky", icon: "confirmation_number", href: "https://www.lipnocard.cz/", seasons: ["leto", "zima"] },
  { id: 2, title: "Webkamery", icon: "videocam", href: "https://www.lipno.info/webkamery-na-lipne.html", seasons: ["leto", "zima"] },
  { id: 3, title: "Otevírací doby", icon: "schedule", href: "https://www.lipno.info/oteviraci-a-provozni-doby.html", seasons: ["leto", "zima"] },
  { id: 4, title: "Infocentrum", icon: "info", href: "https://www.lipno.info/infocentrum.html", seasons: ["leto", "zima"] },
  { id: 5, title: "Servis", icon: "downhill_skiing", href: "/servis", seasons: ["leto", "zima"] },
  { id: 6, title: "Plánovat", icon: "event", href: "/planovat", seasons: ["leto", "zima"] },
  { id: 7, title: "U jezera", icon: "beach_access", href: "/zazitky", seasons: ["leto"] },
  { id: 8, title: "Lanovky", icon: "downhill_skiing", href: "/servis", seasons: ["zima"] },
];

export const lipnoServiceLinks: LipnoServiceLink[] = [
  {
    id: 1,
    title: "Vstupenky a Lipno.card",
    text: "Rychlý vstup do online prodeje skipasů, atrakcí a výhod.",
    icon: "confirmation_number",
    href: "https://www.lipnocard.cz/",
    badge: "Oficiální prodej",
    seasons: ["leto", "zima"],
  },
  {
    id: 2,
    title: "Webkamery na Lipně",
    text: "Jezero, Stezka korunami stromů, Království lesa i restaurace U Yettiho.",
    icon: "videocam",
    href: "https://www.lipno.info/webkamery-na-lipne.html",
    seasons: ["leto", "zima"],
  },
  {
    id: 3,
    title: "Otevírací a provozní doby",
    text: "Stezka, Království lesa, lanové dráhy a infocentrum na jednom místě.",
    icon: "schedule",
    href: "https://www.lipno.info/oteviraci-a-provozni-doby.html",
    seasons: ["leto", "zima"],
  },
  {
    id: 4,
    title: "Infocentrum Lipno",
    text: "Kontakt, mapa, parkování P1, směnárna a pomoc s plánováním pobytu.",
    icon: "travel_explore",
    href: "https://www.lipno.info/infocentrum.html",
    seasons: ["leto", "zima"],
  },
  {
    id: 5,
    title: "Kalendář akcí",
    text: "Denní program, festivaly, animace i rodinné akce v areálu.",
    icon: "event_available",
    href: "https://www.lipno.info/kalendar.html",
    seasons: ["leto", "zima"],
  },
  {
    id: 6,
    title: "Kontakty",
    text: "Klientské informační centrum a tým Lipno Servis.",
    icon: "call",
    href: "https://www.lipno.info/kontakty.html",
    seasons: ["leto", "zima"],
  },
];

export const lipnoExperiences: LipnoExperience[] = [
  {
    id: 1,
    title: "Stezka korunami stromů",
    category: "rodiny",
    summary: "Celoroční ikonický zážitek s výhledy nad jezerem a večerní světelnou trasou.",
    season: "Celoročně",
    seasons: ["leto", "zima"],
    duration: "2–3 hod",
    highlight: "Přístup bez bariér",
    href: "https://www.lipno.info/zazitky/stezka-korunami-stromu-lipno.html",
  },
  {
    id: 2,
    title: "Skiareál Lipno",
    category: "sport",
    summary: "Rodinné sjezdovky, moderní lanovky a večerní lyžování.",
    season: "Zima",
    seasons: ["zima"],
    duration: "Půlden až celý den",
    highlight: "Denní lyžování 8:30–16:00",
    href: "https://www.lipno.info/zazitky/skiareal-lipno.html",
  },
  {
    id: 3,
    title: "Království lesa",
    category: "rodiny",
    summary: "Velký lesní park pro děti s celodenním programem a volným pohybem.",
    season: "Jaro až podzim",
    seasons: ["leto"],
    duration: "3+ hod",
    highlight: "Rodinná top atrakce",
    href: "https://www.lipno.info/oteviraci-a-provozni-doby.html",
  },
  {
    id: 4,
    title: "Aquaworld Lipno",
    category: "wellness",
    summary: "Vodní relax a vnitřní zázemí jako jistota i při horším počasí.",
    season: "Celoročně",
    seasons: ["leto", "zima"],
    duration: "1–2 hod",
    highlight: "Za každého počasí",
    href: "https://www.lipno.info/lipno.html",
  },
  {
    id: 5,
    title: "Lanový park",
    category: "adrenalin",
    summary: "Lehce adrenalinový program nad centrálním parkovištěm s kladkou nad vodou.",
    season: "Jaro až podzim",
    seasons: ["leto"],
    duration: "1 hod+",
    highlight: "Vhodné pro skupiny",
    href: "https://www.lipno.info/zazitky/lanovy-park.html",
  },
  {
    id: 6,
    title: "Vodní plavidla",
    category: "voda",
    summary: "Paddleboardy, šlapadla, veslice a kajaky přímo u jezera.",
    season: "Léto",
    seasons: ["leto"],
    duration: "1–3 hod",
    highlight: "Beach aréna a Modřín",
    href: "https://www.lipno.info/pujcovny/vodni-plavidla.html",
  },
];

export const lipnoEvents: LipnoEvent[] = [
  {
    id: 1,
    title: "Magická Stezka korunami stromů",
    dateLabel: "až do 28. 2.",
    category: "rodiny",
    summary: "Večerní světelná trasa plná barev, zvířat a atmosféry nad lesem.",
    seasons: ["zima"],
    href: "https://www.lipno.info/kalendar.html",
  },
  {
    id: 2,
    title: "Zimní animace s lišákem Foxem",
    dateLabel: "30. 1. 2026",
    category: "rodiny",
    summary: "Program pro děti i rodiče přímo v rodinném areálu Lipno.",
    seasons: ["zima"],
    href: "https://www.lipno.info/kalendar.html",
  },
  {
    id: 3,
    title: "Kramolínský obřák",
    dateLabel: "14. 2. 2026",
    category: "sport",
    summary: "Otevřený závod pro malé i větší lyžaře v rodinném skiareálu.",
    seasons: ["zima"],
    href: "https://www.lipno.info/kalendar.html",
  },
  {
    id: 4,
    title: "KolemKolem Fest 2026",
    dateLabel: "léto 2026",
    category: "festival",
    summary: "Hudba, jezero, letní program a víkendový ruch v areálu.",
    seasons: ["leto"],
    href: "https://www.lipno.info/kalendar.html",
  },
  {
    id: 5,
    title: "Rodinné léto v Království lesa",
    dateLabel: "červenec a srpen",
    category: "rodiny",
    summary: "Denní program, animace a lehký family itinerář pro celý areál.",
    seasons: ["leto"],
    href: "https://www.lipno.info/kalendar.html",
  },
  {
    id: 6,
    title: "Večerní koncert u jezera",
    dateLabel: "soboty v létě",
    category: "vecer",
    summary: "Hudba, gastro a delší večer přímo v resortu u vody.",
    seasons: ["leto"],
    href: "https://www.lipno.info/kalendar.html",
  },
];

export const lipnoRentals: LipnoRental[] = [
  {
    id: 1,
    title: "Vodní plavidla",
    area: "Beach aréna a pláž pod bazénem",
    contact: "+420 731 410 813",
    summary: "Šlapadla, kajaky, veslice a paddleboardy s poslední výpůjčkou 60 minut před koncem provozu.",
    href: "https://www.lipno.info/pujcovny/vodni-plavidla.html",
    seasons: ["leto"],
  },
  {
    id: 2,
    title: "Bikepark a sport shop",
    area: "Centrální areál",
    contact: "dle provozní doby",
    summary: "Servisní zázemí, vybavení a sezónní půjčení pro aktivní den v areálu.",
    href: "https://www.lipno.info/oteviraci-a-provozni-doby.html",
    seasons: ["leto"],
  },
  {
    id: 3,
    title: "Zimní vybavení",
    area: "Skiareál Lipno",
    contact: "pokladny a infocentrum",
    summary: "Skipasy, výbava a návazný servis pro denní i večerní lyžování.",
    href: "https://www.lipno.info/oteviraci-a-provozni-doby-zima.html",
    seasons: ["zima"],
  },
];

export const lipnoInfoCenter = {
  title: "Infocentrum Lipno",
  phone: "+420 731 410 800",
  email: "infocentrum@lipno.info",
  address: "Lipno nad Vltavou 307, 382 78 Lipno nad Vltavou",
  hours: "Denně 8:00–16:00 / 16:30–19:30",
  parking: "Parkoviště P1: první 3 hodiny zdarma, potom 15 Kč za každou započatou hodinu.",
};

export const lipnoConditions = {
  weather: "-4 °C",
  snow: "85 cm",
  lifts: "4 lanovky",
  status: "Denní lyžování 8:30–16:00",
};

export const lipnoAiPrompts = [
  "Kde koupím vstupenky na Lipno?",
  "Jaká je otevírací doba Stezky?",
  "Kde najdu webkamery a počasí?",
  "Jak kontaktuji infocentrum?",
  "Co dělat s dětmi na Lipně?",
];

export const lipnoFoxPrompts: Record<LipnoSeason, string[]> = {
  leto: [
    "Co dělat s pětiletým dítětem při dešti?",
    "Kam na oběd bez rezervace?",
    "Co je dnes otevřené?",
    "Jak naplánovat půlden u jezera?",
    "Kde koupím vstupenky a slevy?",
  ],
  zima: [
    "Kam s dětmi po lyžování?",
    "Jaký je dnes stav lanovek?",
    "Co dělat večer na Lipně?",
    "Jak naplánovat zimní půlden?",
    "Kde koupím skipasy a slevy?",
  ],
};

export const lipnoSeasonCopy: Record<LipnoSeason, {
  label: string;
  heroTitle: string;
  heroText: string;
  weatherLabel: string;
  conditionsLabel: string;
  featureOne: string;
  featureTwo: string;
}> = {
  leto: {
    label: "Léto",
    heroTitle: "Dnes na\nLipně",
    heroText: "Jezero, rodinné zážitky, webkamery a servis pro celý den v resortu.",
    weatherLabel: "Počasí",
    conditionsLabel: "Voda",
    featureOne: "Stezka + Království lesa",
    featureTwo: "Beach + vodní sporty",
  },
  zima: {
    label: "Zima",
    heroTitle: "Dnes na\nLipně",
    heroText: "Sníh, lanovky, skipasy a rodinný program přepnutý do zimního režimu.",
    weatherLabel: "Počasí",
    conditionsLabel: "Sníh",
    featureOne: "Skiareál + Fox park",
    featureTwo: "Večerní lyžování",
  },
};

export const lipnoSeasonHero: Record<LipnoSeason, LipnoSeasonHero> = {
  leto: {
    heroBackground: "linear-gradient(160deg, #002f7a 0%, #0a5ea3 38%, #00a85a 100%)",
    heroGlow: "rgba(0, 150, 57, 0.22)",
    heroGlowSecondary: "rgba(255, 255, 255, 0.16)",
    panelBackground: "rgba(255,255,255,0.16)",
    panelBorder: "1px solid rgba(255,255,255,0.16)",
    statThreeLabel: "Sezóna",
    statThreeValue: "Jezero + pláž",
    quickLabel: "Léto právě teď",
    quickSubtitle: "Voda, rodiny a lehké plánování dne.",
    spotlightLabel: "Letní highlight",
    spotlightTitle: "Jezero, Stezka a rodinný den",
    spotlightText: "Spoj dopolední atrakce, odpoledne u vody a večer v kalendáři akcí bez zbytečných přesunů.",
    spotlightHref: "/planovat",
    spotlightCta: "Naplánovat léto",
    plannerLabel: "Letní plán",
  },
  zima: {
    heroBackground: "linear-gradient(160deg, #00163f 0%, #0b2f6f 48%, #1f7fd6 100%)",
    heroGlow: "rgba(166, 215, 255, 0.18)",
    heroGlowSecondary: "rgba(255, 255, 255, 0.12)",
    panelBackground: "rgba(255,255,255,0.12)",
    panelBorder: "1px solid rgba(255,255,255,0.14)",
    statThreeLabel: "Sezóna",
    statThreeValue: "Skipasy + lanovky",
    quickLabel: "Zima právě teď",
    quickSubtitle: "Sníh, provoz areálu a rodinný servis.",
    spotlightLabel: "Zimní highlight",
    spotlightTitle: "Lyžování bez zdržení",
    spotlightText: "Měj po ruce stav lanovek, skipasy, večerní program a Fox tipy pro děti po lyžování.",
    spotlightHref: "/servis",
    spotlightCta: "Otevřít zimní servis",
    plannerLabel: "Zimní plán",
  },
};

export const lipnoPlannerTips: Record<LipnoSeason, LipnoPlannerTip[]> = {
  leto: [
    { id: 1, title: "Na co čekat", text: "Stezka korunami stromů a Království lesa jsou hlavní taháky. Jdi tam dopoledne nebo později odpoledne." },
    { id: 2, title: "Sezónní tip", text: "Kombinuj Stezku, jezero a půjčovnu. Největší vedro nech na vodu nebo indoor zázemí." },
    { id: 3, title: "Rodinný plán", text: "Dopoledne atrakce, poledne oběd v centru areálu, odpoledne lehčí program nebo voda." },
  ],
  zima: [
    { id: 4, title: "Na co čekat", text: "Fronty bývají ráno na skipasy a kolem poledne na oběd. Vyplatí se mít nákup i plán dopředu." },
    { id: 5, title: "Sezónní tip", text: "Stav den kolem lanovek, skipasu a večerního programu. Indoor pauzu nech na odpoledne." },
    { id: 6, title: "Rodinný plán", text: "Dopoledne sjezdovka, poledne teplý oběd, odpoledne kratší blok na sněhu a večer program s dětmi." },
  ],
};
