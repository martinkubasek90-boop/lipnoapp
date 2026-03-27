export type LipnoHoursPeriod = {
  dateLabel: string;
  days: string;
  time: string;
  note?: string;
  start: string;
  end: string;
};

export type LipnoHoursSection = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  periods: LipnoHoursPeriod[];
};

export const lipnoOpeningHoursSections: LipnoHoursSection[] = [
  {
    id: "stezka",
    title: "Stezka korunami stromů",
    icon: "forest",
    summary: "Ikonická atrakce s celoročním provozem a prodlouženými letními čtvrtky.",
    periods: [
      { dateLabel: "1.3.26 – 29.3.26", days: "denně", time: "10:00 – 17:00", start: "2026-03-01", end: "2026-03-29" },
      { dateLabel: "30.3.26 – 31.5.26", days: "denně", time: "10:00 – 18:00", start: "2026-03-30", end: "2026-05-31" },
      { dateLabel: "1.6.26 – 28.9.26", days: "denně", time: "10:00 – 19:00", note: "červenec a srpen každý čtvrtek 19:00 – 21:30", start: "2026-06-01", end: "2026-09-28" },
      { dateLabel: "29.9.26 – 1.11.26", days: "denně", time: "10:00 – 17:00", start: "2026-09-29", end: "2026-11-01" },
      { dateLabel: "2.11.26 – 27.11.26", days: "denně", time: "10:00 – 16:00", start: "2026-11-02", end: "2026-11-27" },
      { dateLabel: "28.11.26 – 31.12.26", days: "denně", time: "10:00 – 16:00 / 17:00 – 20:00", start: "2026-11-28", end: "2026-12-31" },
    ],
  },
  {
    id: "kralovstvi",
    title: "Království lesa",
    icon: "park",
    summary: "Rodinná herní zóna s hlavní sezónou od jara do podzimu.",
    periods: [
      { dateLabel: "17.4.26 – 31.5.26", days: "denně", time: "10:00 – 18:00", start: "2026-04-17", end: "2026-05-31" },
      { dateLabel: "1.6.26 – 28.9.26", days: "denně", time: "10:00 – 19:00", start: "2026-06-01", end: "2026-09-28" },
      { dateLabel: "29.9.26 – 1.11.26", days: "denně", time: "10:00 – 17:00", start: "2026-09-29", end: "2026-11-01" },
    ],
  },
  {
    id: "lipno-express",
    title: "Lanová dráha Lipno Express",
    icon: "tram",
    summary: "Hlavní dopravní páteř areálu s intervalovým provozem mimo špičku.",
    periods: [
      { dateLabel: "17.4.26 – 31.5.26", days: "PO – PÁ", time: "9:45 / 10:30 / 11:30 / 12:30 / 13:30 / 14:30 / 15:30 / 16:30 / 17:30 / 18:15", start: "2026-04-17", end: "2026-05-31" },
      { dateLabel: "17.4.26 – 31.5.26", days: "SO – NE", time: "9:45 – 18:15", start: "2026-04-17", end: "2026-05-31" },
      { dateLabel: "1.6.26 – 26.6.26", days: "PO – PÁ", time: "9:45 / 10:30 / 11:30 / 12:30 / 13:30 / 14:30 / 15:30 / 16:30 / 17:30 / 18:30 / 19:15", start: "2026-06-01", end: "2026-06-26" },
      { dateLabel: "1.6.26 – 26.6.26", days: "SO – NE", time: "9:45 – 19:15", start: "2026-06-01", end: "2026-06-26" },
      { dateLabel: "27.6.26 – 30.8.26", days: "denně", time: "9:45 – 19:15", note: "každý čtvrtek 9:45 – 22:00", start: "2026-06-27", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 28.9.26", days: "PO – PÁ", time: "9:45 / 10:30 / 11:30 / 12:30 / 13:30 / 14:30 / 15:30 / 16:30 / 17:30 / 18:30 / 19:15", start: "2026-08-31", end: "2026-09-28" },
      { dateLabel: "31.8.26 – 28.9.26", days: "SO – NE", time: "9:45 – 19:15", start: "2026-08-31", end: "2026-09-28" },
      { dateLabel: "29.9.26 – 1.11.26", days: "PO – PÁ", time: "9:45 / 10:30 / 11:30 / 12:30 / 13:30 / 14:30 / 15:30 / 16:30 / 17:15", start: "2026-09-29", end: "2026-11-01" },
      { dateLabel: "29.9.26 – 1.11.26", days: "SO – NE", time: "9:45 – 17:15", start: "2026-09-29", end: "2026-11-01" },
    ],
  },
  {
    id: "strecha",
    title: "Lanová dráha Střecha",
    icon: "cable",
    summary: "Doplňková lanová dráha s víkendovým jarem a hlavní letní sezónou.",
    periods: [
      { dateLabel: "1.5.26 – 28.6.26", days: "SO – NE", time: "10:00 – 17:00", start: "2026-05-01", end: "2026-06-28" },
      { dateLabel: "29.6.26 – 30.8.26", days: "denně", time: "10:00 – 18:00", start: "2026-06-29", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 1.11.26", days: "SO + NE", time: "10:00 – 17:00", start: "2026-08-31", end: "2026-11-01" },
    ],
  },
  {
    id: "infocentrum",
    title: "Infocentrum",
    icon: "info",
    summary: "Klientské centrum pro orientaci, parkování, mapy a servis návštěvy.",
    periods: [
      { dateLabel: "16.3.26 – 29.3.26", days: "denně", time: "9:30 – 16:00", start: "2026-03-16", end: "2026-03-29" },
      { dateLabel: "30.3.26 – 31.5.26", days: "denně", time: "9:30 – 17:00", start: "2026-03-30", end: "2026-05-31" },
      { dateLabel: "1.6.26 – 28.9.26", days: "denně", time: "9:30 – 18:00", note: "červenec a srpen každý čtvrtek 9:30 – 20:30", start: "2026-06-01", end: "2026-09-28" },
      { dateLabel: "29.9.26 – 1.11.26", days: "denně", time: "9:30 – 16:00", start: "2026-09-29", end: "2026-11-01" },
    ],
  },
  {
    id: "bikepark",
    title: "Bikepark půjčovna",
    icon: "downhill_skiing",
    summary: "Oficiální bikepark půjčovna se silnou letní špičkou.",
    periods: [
      { dateLabel: "1.5.26 – 28.6.26", days: "SO + NE", time: "9:00 – 17:00", start: "2026-05-01", end: "2026-06-28" },
      { dateLabel: "29.6.26 – 30.8.26", days: "denně", time: "9:00 – 19:00", start: "2026-06-29", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 1.11.26", days: "SO + NE", time: "9:00 – 17:00", start: "2026-08-31", end: "2026-11-01" },
    ],
  },
  {
    id: "intersport",
    title: "Prodejna Intersport",
    icon: "storefront",
    summary: "Prodejna a servisní zázemí v hlavní návštěvnické trase areálu.",
    periods: [
      { dateLabel: "6.12.25 – 31.3.26", days: "denně", time: "8:00 – 17:00", start: "2025-12-06", end: "2026-03-31" },
      { dateLabel: "1.4.26 – 12.4.26", days: "denně", time: "9:00 – 17:00", start: "2026-04-01", end: "2026-04-12" },
      { dateLabel: "13.4.26 – 16.4.26", days: "zavřeno", time: "zavřeno", start: "2026-04-13", end: "2026-04-16" },
      { dateLabel: "17.4.26 – 26.6.26", days: "denně", time: "9:00 – 17:00", start: "2026-04-17", end: "2026-06-26" },
      { dateLabel: "27.6.26 – 30.8.26", days: "denně", time: "9:00 – 19:00", start: "2026-06-27", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 29.11.26", days: "denně", time: "9:00 – 17:00", start: "2026-08-31", end: "2026-11-29" },
    ],
  },
  {
    id: "kapitanat",
    title: "Kapitanát – lodě a el. čluny",
    icon: "sailing",
    summary: "Vodní půjčovna u jezera s poslední výpůjčkou hodinu před koncem.",
    periods: [
      { dateLabel: "18.4.26 – 26.6.26", days: "denně", time: "9:00 – 17:00", note: "poslední výpůjčka v 16:00", start: "2026-04-18", end: "2026-06-26" },
      { dateLabel: "27.6.26 – 30.8.26", days: "denně", time: "9:00 – 19:00", note: "poslední výpůjčka v 18:00", start: "2026-06-27", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 1.11.26", days: "denně", time: "9:00 – 17:00", note: "poslední výpůjčka v 16:00", start: "2026-08-31", end: "2026-11-01" },
    ],
  },
  {
    id: "kolobezky",
    title: "Sjezdové koloběžky u Stezky",
    icon: "electric_scooter",
    summary: "Adrenalinová rodinná klasika navázaná na provoz horní části areálu.",
    periods: [
      { dateLabel: "3.4.26 – 31.5.26", days: "denně", time: "11:00 – 17:00", start: "2026-04-03", end: "2026-05-31" },
      { dateLabel: "1.6.26 – 26.6.26", days: "denně", time: "11:00 – 18:00", start: "2026-06-01", end: "2026-06-26" },
      { dateLabel: "27.6.26 – 30.8.26", days: "denně", time: "11:00 – 18:45", start: "2026-06-27", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 28.9.26", days: "denně", time: "11:00 – 18:00", start: "2026-08-31", end: "2026-09-28" },
      { dateLabel: "29.9.26 – 28.10.26", days: "denně", time: "11:00 – 16:45", start: "2026-09-29", end: "2026-10-28" },
    ],
  },
  {
    id: "element-kola",
    title: "Půjčovna Intersport Element – kola",
    icon: "pedal_bike",
    summary: "Hlavní cyklo půjčovna resortu s dlouhou sezónou.",
    periods: [
      { dateLabel: "1.4.26 – 26.6.26", days: "denně", time: "9:00 – 17:00", start: "2026-04-01", end: "2026-06-26" },
      { dateLabel: "27.6.26 – 30.8.26", days: "denně", time: "9:00 – 19:00", start: "2026-06-27", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 29.11.26", days: "denně", time: "9:00 – 17:00", start: "2026-08-31", end: "2026-11-29" },
    ],
  },
  {
    id: "aquaworld",
    title: "Aquaworld Lipno",
    icon: "pool",
    summary: "Indoor jistota pro rodiny, déšť i večerní relax.",
    periods: [
      { dateLabel: "5.1.26 – 29.3.26", days: "PO – PÁ", time: "12:00 – 21:00", note: "každé pondělí 16:30 – 17:30 bazén uzavřen pro veřejnost", start: "2026-01-05", end: "2026-03-29" },
      { dateLabel: "5.1.26 – 29.3.26", days: "SO – NE", time: "10:00 – 21:00", start: "2026-01-05", end: "2026-03-29" },
      { dateLabel: "30.3.26 – 28.6.26", days: "PO – PÁ", time: "12:00 – 20:00", start: "2026-03-30", end: "2026-06-28" },
      { dateLabel: "30.3.26 – 28.6.26", days: "SO – NE", time: "10:00 – 20:00", start: "2026-03-30", end: "2026-06-28" },
      { dateLabel: "29.6.26 – 30.8.26", days: "denně", time: "10:00 – 21:00", start: "2026-06-29", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 2.11.26", days: "PO – PÁ", time: "12:00 – 20:00", start: "2026-08-31", end: "2026-11-02" },
      { dateLabel: "31.8.26 – 2.11.26", days: "SO – NE", time: "10:00 – 20:00", start: "2026-08-31", end: "2026-11-02" },
    ],
  },
  {
    id: "sauna",
    title: "Sauna",
    icon: "hot_tub",
    summary: "Saunový provoz navázaný na Aquaworld s víkendovými bloky.",
    periods: [
      { dateLabel: "20.12.25 – 29.3.26", days: "ST + PÁ", time: "16:00 – 21:00", note: "24.12. a 31.12. do 17:00", start: "2025-12-20", end: "2026-03-29" },
      { dateLabel: "20.12.25 – 29.3.26", days: "SO + NE", time: "14:00 – 21:00", start: "2025-12-20", end: "2026-03-29" },
      { dateLabel: "30.3.26 – 28.6.26", days: "ST + PÁ", time: "14:00 – 20:00", start: "2026-03-30", end: "2026-06-28" },
      { dateLabel: "30.3.26 – 28.6.26", days: "SO + NE", time: "14:00 – 20:00", start: "2026-03-30", end: "2026-06-28" },
      { dateLabel: "29.6.26 – 30.8.26", days: "ST + PÁ", time: "14:00 – 21:00", start: "2026-06-29", end: "2026-08-30" },
      { dateLabel: "29.6.26 – 30.8.26", days: "SO + NE", time: "14:00 – 21:00", start: "2026-06-29", end: "2026-08-30" },
      { dateLabel: "31.8.26 – 2.11.26", days: "ST + PÁ", time: "14:00 – 20:00", start: "2026-08-31", end: "2026-11-02" },
      { dateLabel: "31.8.26 – 2.11.26", days: "SO + NE", time: "14:00 – 20:00", start: "2026-08-31", end: "2026-11-02" },
    ],
  },
];
