export type LipnoRentalCategory = "voda" | "kola" | "adrenalin" | "servis";

export type LipnoPriceHighlight = {
  label: string;
  price: string;
  detail?: string;
};

export type LipnoRentalDetail = {
  slug: string;
  title: string;
  category: LipnoRentalCategory;
  summary: string;
  location: string;
  phone: string;
  email: string;
  sourceUrl: string;
  bookingUrl?: string;
  season: "leto";
  teaser: string;
  highlights: string[];
  openingHours: string[];
  priceHighlights: LipnoPriceHighlight[];
  note?: string;
};

export type LipnoCardBenefit = {
  title: string;
  discount: string;
  href: string;
  text: string;
};

export const lipnoRentalCategories: { value: LipnoRentalCategory | "vse"; label: string }[] = [
  { value: "vse", label: "Vše" },
  { value: "voda", label: "Voda" },
  { value: "kola", label: "Kola" },
  { value: "adrenalin", label: "Adrenalin" },
  { value: "servis", label: "Servis" },
];

export const lipnoRentalDetails: LipnoRentalDetail[] = [
  {
    slug: "vodni-plavidla",
    title: "Vodní plavidla",
    category: "voda",
    summary: "Paddleboardy, šlapadla, veslice a kajaky přímo u lipenské pláže.",
    location: "Půjčovna pláž, Beach aréna, pláž pod bazénem a Camping Lipno Modřín",
    phone: "+420 731 410 813",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/vodni-plavidla.html",
    teaser: "Nejsilnější letní půjčovna pro rodiny u vody. Jednoduchý start, rychlá výpůjčka a jasný ceník po hodinách.",
    season: "leto",
    highlights: [
      "Šlapadla MARTINI, část se skluzavkou pro děti.",
      "SIT ON TOP kajaky pro 1 i 2 osoby.",
      "Paddleboard jako lehký sport i rodinná zábava.",
      "Poslední výpůjčka 60 minut před koncem provozu.",
    ],
    openingHours: [
      "30. 6. 2025 až 31. 8. 2025: denně 10:00–19:00",
      "Poslední výpůjčka v 18:00",
    ],
    priceHighlights: [
      { label: "Šlapadlo 1 hod", price: "370 Kč" },
      { label: "Kajak 1 osoba 1 hod", price: "215 Kč" },
      { label: "Kajak 2 osoby 1 hod", price: "250 Kč" },
      { label: "Paddle board 1 hod", price: "270 Kč" },
    ],
    note: "Zdroj: oficiální ceník půjčovny Vodní plavidla na Lipno.info.",
  },
  {
    slug: "bikepark-pujcovna",
    title: "Bikepark půjčovna",
    category: "adrenalin",
    summary: "Celoodpružená sjezdová kola, ochranné prvky a návaznost na bikepark i lanovku.",
    location: "Půjčovna INTERSPORT Element u centrálního parkoviště",
    phone: "+420 731 656 154",
    email: "bike@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/bikepark-pujcovna.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Silná landing page pro letní adrenalin. Kolo, komplet s chrániči i online rezervace se slevou na jednom místě.",
    season: "leto",
    highlights: [
      "Celoodpružená sjezdová kola pro začátečníky i zkušené jezdce.",
      "Možnost půjčit integrální helmu a chrániče samostatně i v kompletu.",
      "Poslední výpůjčka 3 hodiny před koncem provozu.",
      "Vratná kauce na sjezdová kola 3000 Kč.",
    ],
    openingHours: [
      "1. 5. 2026 až 3. 5. 2026: denně 9:00–17:00",
      "29. 6. 2026 až 30. 8. 2026: denně 9:00–19:00",
      "31. 8. 2026 až 1. 11. 2026: SO + NE 9:00–17:00",
    ],
    priceHighlights: [
      { label: "Sjezdové kolo 3 hod", price: "1 485 Kč", detail: "s Lipno.card" },
      { label: "Sjezdové kolo 1 den", price: "2 600 Kč", detail: "s Lipno.card" },
      { label: "Komplet 3 hod", price: "1 595 Kč", detail: "kolo + chrániče + helma" },
      { label: "Dětské sjezdové kolo 1 den", price: "2 110 Kč", detail: "s Lipno.card" },
    ],
    note: "Oficiální stránka uvádí i rezervaci se slevou 10 % a návaznost na Bikepass.",
  },
  {
    slug: "elektrocluny",
    title: "Elektročluny",
    category: "voda",
    summary: "Komfortní čluny po Lipně bez nutnosti kapitánského průkazu.",
    location: "Intersport Rent Lipno, Kapitanát",
    phone: "+420 731 410 813",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/elektrocluny.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Prémiová vodní půjčovna pro delší projížďku po jezeře. Dobrá volba pro rodiny i malé skupiny.",
    season: "leto",
    highlights: [
      "K řízení není potřeba kapitánský průkaz.",
      "Modely Darato 530 a Sweet Water až pro 6 osob.",
      "Poslední výpůjčka 60 minut před koncem provozu.",
      "Rezervace online se slevou 10 %.",
    ],
    openingHours: [
      "18. 4. 2026 až 26. 6. 2026: denně 9:00–17:00",
      "27. 6. 2026 až 30. 8. 2026: denně 9:00–19:00",
      "31. 8. 2026 až 1. 11. 2026: denně 9:00–17:00",
    ],
    priceHighlights: [
      { label: "Darato 530 1 hod", price: "1 190 Kč", detail: "s Lipno.card" },
      { label: "Darato 530 2 hod", price: "2 330 Kč", detail: "s Lipno.card" },
      { label: "Sweet Water 1 hod", price: "1 490 Kč", detail: "s Lipno.card" },
      { label: "Sweet Water 2 hod", price: "2 930 Kč", detail: "s Lipno.card" },
    ],
  },
  {
    slug: "motorove-cluny",
    title: "Motorové čluny",
    category: "voda",
    summary: "Motorové lodě pro delší plavbu po Lipně s rezervací předem.",
    location: "Intersport Rent Lipno, Kapitanát",
    phone: "+420 731 410 813",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/motorove-cluny.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Pro hosty, kteří chtějí delší čas na vodě a komfortní člun s online rezervací.",
    season: "leto",
    highlights: [
      "Navazuje na stejný vodní servis jako elektročluny.",
      "Dobrá volba pro delší rodinnou plavbu po jezeře.",
      "Rezervace online se slevou 10 %.",
    ],
    openingHours: [
      "Otevírací doba je vedena na oficiální stránce motorových člunů.",
    ],
    priceHighlights: [
      { label: "Rascala / Rio 1 hod", price: "1 190 Kč", detail: "s Lipno.card" },
      { label: "Rascala / Rio 2 hod", price: "2 330 Kč", detail: "s Lipno.card" },
      { label: "Sea Leader / Harmony 1 hod", price: "1 340 Kč", detail: "s Lipno.card" },
      { label: "Sweet Water 2 hod", price: "2 930 Kč", detail: "s Lipno.card" },
    ],
    note: "Na oficiální stránce jsou uvedené i jednotlivé modely člunů a rezervace se slevou 10 %.",
  },
  {
    slug: "kola-a-prislusenstvi",
    title: "Kola a příslušenství",
    category: "kola",
    summary: "TREK, MTB, dětská kola, elektrokola i vozíky, sedačky a helmy.",
    location: "Intersport Rent Element",
    phone: "+420 731 656 154",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/kola-a-prislusenstvi.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Nejdůležitější cyklo landing pro léto. Pokrývá běžná kola, e-biky i rodinné příslušenství pro celý pobyt.",
    season: "leto",
    highlights: [
      "Treková, horská a dětská kola značek Author a Kellys.",
      "Přívěsné vozíky Cytex pro 1 nebo 2 děti.",
      "Dětské sedačky Thule a cyklo helmy.",
      "Rezervace online se slevou 10 %.",
    ],
    openingHours: [
      "1. 4. 2026 až 26. 6. 2026: denně 9:00–17:00",
      "27. 6. 2026 až 30. 8. 2026: denně 9:00–19:00",
      "31. 8. 2026 až 29. 11. 2026: denně 9:00–17:00",
    ],
    priceHighlights: [
      { label: "TREK / MTB 1 hod", price: "280 Kč", detail: "s Lipno.card" },
      { label: "TREK / MTB 1 den", price: "655 Kč", detail: "s Lipno.card" },
      { label: "Elektrokolo 1 den", price: "1 295 Kč", detail: "s Lipno.card" },
      { label: "Vozík + helma 1 den", price: "650 Kč", detail: "s Lipno.card" },
    ],
  },
  {
    slug: "elektrokola",
    title: "Elektrokola",
    category: "kola",
    summary: "Elektrokola pro delší výlety po Lipně a okolí bez přetížení rodinného plánu.",
    location: "Intersport Rent Element",
    phone: "+420 731 656 154",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/elektrokola.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Specializovaná stránka pro hosty, kteří chtějí rovnou e-bike bez procházení celé cyklo nabídky.",
    season: "leto",
    highlights: [
      "E-bike půjčovna pro delší trasy kolem přehrady.",
      "Navazuje na rodinné cyklostezky i výlety mimo hlavní areál.",
      "Rezervace online se slevou 10 %.",
    ],
    openingHours: [
      "Otevírací doba se řídí režimem Intersport Rent Element.",
    ],
    priceHighlights: [
      { label: "Elektrokolo 1 hod", price: "490 Kč", detail: "s Lipno.card" },
      { label: "Elektrokolo 1 den", price: "1 295 Kč", detail: "s Lipno.card" },
      { label: "Dětské e-kolo 1 den", price: "795 Kč", detail: "s Lipno.card" },
    ],
    note: "Oficiální detail uvádí trekingové, horské i dětské e-biky Kellys a online rezervaci se slevou 10 %.",
  },
  {
    slug: "singletrack-pujcovna",
    title: "Singletrack půjčovna",
    category: "kola",
    summary: "Horská kola a vstup do singletrackového dne bez složité přípravy.",
    location: "INTERSPORT Element",
    phone: "+420 731 656 154",
    email: "bike@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/singletrack-pujcovna.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Dobrá vstupní stránka pro hosty, kteří chtějí rovnou na trail bez zdržení u obecné nabídky.",
    season: "leto",
    highlights: [
      "Napojení na singletrackové okruhy a family flow den.",
      "Rezervace online se slevou 10 %.",
      "Vhodné pro aktivní rodiny i sportovní návštěvníky.",
    ],
    openingHours: [
      "Otevírací doba se řídí režimem letních půjčoven v Elementu.",
    ],
    priceHighlights: [
      { label: "Dospělý MTB 2 hod", price: "733 Kč", detail: "včetně bikepassu" },
      { label: "Dospělý MTB 1 den", price: "951 Kč", detail: "včetně bikepassu" },
      { label: "Dětské MTB 2 hod", price: "455 Kč", detail: "včetně bikepassu" },
      { label: "Dětské MTB 1 den", price: "585 Kč", detail: "včetně bikepassu" },
    ],
    note: "V ceně půjčení je automaticky i jízdenka na lanovou dráhu Lipno Express.",
  },
  {
    slug: "sjezdove-kolobezky",
    title: "Sjezdové koloběžky",
    category: "adrenalin",
    summary: "Rodinná letní klasika z Kramolína dolů s helmou a jednoduchým nástupem.",
    location: "Intersport Rent u Stezky korunami stromů",
    phone: "+420 731 410 812",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/sjezdove-kolobezky.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Silná rodinná atrakce na půlden. Má velký marketingový potenciál přímo na homepage i v zážitcích.",
    season: "leto",
    highlights: [
      "Oblíbená trasa z Kramolína do centrální části areálu.",
      "Helma je součástí zážitku.",
      "Dobrá volba pro rodiny s většími dětmi.",
    ],
    openingHours: [
      "Otevírací doba je navázaná na letní provoz areálu a lanových drah.",
    ],
    priceHighlights: [
      { label: "Dospělý sjezd", price: "250 Kč", detail: "s Lipno.card" },
      { label: "Dítě do 15 let", price: "160 Kč", detail: "s Lipno.card" },
    ],
    note: "Oficiální stránka uvádí koloběžky Yedoo a Kickbike, helmu zdarma a trasu dlouhou cca 3,5 km.",
  },
  {
    slug: "silnicni-kolobezky",
    title: "Silniční koloběžky",
    category: "kola",
    summary: "Lehčí aktivita na jezerní stezce pro hosty, kteří chtějí něco mezi kolem a pěším výletem.",
    location: "Intersport Rent Element",
    phone: "+420 731 410 813",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/silnicni-kolobezky.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/",
    teaser: "Dobrá alternativní půjčovna pro kratší výlet a odlehčenou aktivitu bez bikeparku.",
    season: "leto",
    highlights: [
      "Vhodné pro lehký family výlet kolem jezera.",
      "Napojení na jezerní stezky a centrální areál.",
    ],
    openingHours: [
      "Otevírací doba je na oficiální stránce silničních koloběžek.",
    ],
    priceHighlights: [
      { label: "Dospělý 1 hod", price: "170 Kč", detail: "s Lipno.card" },
      { label: "Dospělý 1 den", price: "440 Kč", detail: "s Lipno.card" },
      { label: "Dítě do 15 let 1 hod", price: "135 Kč", detail: "s Lipno.card" },
      { label: "Dítě do 15 let 1 den", price: "255 Kč", detail: "s Lipno.card" },
    ],
    note: "Na oficiálním webu je půjčovna vedená jako lehčí rodinný vstup na jezerní cyklostezku.",
  },
  {
    slug: "in-line-brusle",
    title: "In-line brusle",
    category: "adrenalin",
    summary: "Inline brusle pro jezerní stezku, včetně dětských variant, helem a chráničů v ceně.",
    location: "Intersport Rent Lipno, Element u Restaurace Stodola",
    phone: "+420 731 410 813",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/in-line-brusle.html",
    bookingUrl: "https://lipno.onlineshop.ws/cs/shop/detail-1/article/inline-brusle/",
    teaser: "Přímá půjčovna pro jezero, rodiny a aktivní odpoledne bez potřeby kola.",
    season: "leto",
    highlights: [
      "Modely pro začátečníky i rychlejší bruslaře.",
      "Dětské nastavitelné brusle od velikosti 28.",
      "Chrániče a helma jsou v ceně půjčení.",
    ],
    openingHours: [
      "18. 4. 2026 až 26. 6. 2026: denně 9:00–17:00",
      "27. 6. 2026 až 30. 8. 2026: denně 9:00–19:00",
      "31. 8. 2026 až 1. 11. 2026: denně 9:00–17:00",
    ],
    priceHighlights: [
      { label: "Economy brusle 1 hod", price: "195 Kč", detail: "s Lipno.card" },
      { label: "Economy brusle 3 hod", price: "380 Kč", detail: "s Lipno.card" },
      { label: "Economy brusle 1 den", price: "590 Kč", detail: "s Lipno.card" },
    ],
  },
  {
    slug: "servis-a-oprava-kol",
    title: "Servis a oprava kol",
    category: "servis",
    summary: "Rychlý cykloservis pro defekty, brzdy, řetězy a průběžné opravy během pobytu.",
    location: "Půjčovna INTERSPORT Element",
    phone: "+420 720 471 267",
    email: "rent@lipnoservis.cz",
    sourceUrl: "https://www.lipno.info/pujcovny/servis-a-oprava-kol.html",
    teaser: "Praktická servisní landing page, která má velkou hodnotu během reálného pobytu v resortu.",
    season: "leto",
    highlights: [
      "Rychlé opravy, defekty, řetězy i základní servis.",
      "Smysluplný záložní bod pro cyklo návštěvníky během dne.",
      "Napojení na půjčovnu a doplňky v Elementu.",
    ],
    openingHours: [
      "1. 4. 2026 až 26. 6. 2026: denně 9:00–16:00",
      "27. 6. 2026 až 30. 8. 2026: denně 9:00–17:00",
      "31. 8. 2026 až 1. 11. 2026: denně 9:00–16:00",
    ],
    priceHighlights: [],
    note: "Oficiální stránka uvádí defekty, výměny řetězů, brzdových destiček a náročnější opravy po předchozí prohlídce.",
  },
];

export const lipnoCardPage = {
  sourceUrl: "https://www.lipno.info/lipnocard.html",
  shopUrl: "https://www.lipnocard.cz/",
  title: "Lipno.card",
  teaser: "Věrnostní karta plná výhod a tipů, která zrychlí nákup i pobyt v areálu.",
  summary:
    "Lipno.card je zdarma, platí se pouze vratná záloha 50 Kč nebo 100 Kč podle typu karty. Aktivní je až po přiřazení k online registraci na lipnocard.cz.",
  deposit: "Vratná záloha 50 Kč nebo 100 Kč podle typu karty.",
  steps: [
    "Kartu získáš v Klientském informačním centru.",
    "Na webu lipnocard.cz si zdarma vytvoříš účet.",
    "K účtu přiřadíš kartu pomocí 14místného WTP čísla na rubu karty.",
    "Kartu můžeš vrátit v automatech na parkovištích P1 nebo P2 a získat zpět zálohu.",
  ],
  reasons: [
    "V létě drží slevy a přehled výhod v areálu.",
    "V zimě funguje i jako skipas s nákupem z domova.",
    "Vrácení karty neruší tvůj účet v programu Lipno.card.",
  ],
};

export const lipnoCardBenefits: LipnoCardBenefit[] = [
  {
    title: "Paddleboardy a šlapadla",
    discount: "-10 %",
    href: "https://www.lipno.info/zazitky/paddleboardy-slapadla.html",
    text: "Sleva na letní vodní zábavu přímo u jezera.",
  },
  {
    title: "Na kole či koloběžce",
    discount: "-10 %",
    href: "https://www.lipno.info/zazitky/na-kole-ci-kolobezce.html",
    text: "Výhoda pro cyklo den i lehčí rodinný okruh kolem přehrady.",
  },
  {
    title: "Aquaworld Lipno",
    discount: "-10 %",
    href: "https://www.lipno.info/zazitky/aquaworld-lipno.html",
    text: "Silný indoor benefit pro horší počasí nebo kratší odpočinek.",
  },
  {
    title: "Amenity Resort Lipno – sportovní hala",
    discount: "-10 %",
    href: "https://www.lipno.info/zazitky/amenity-resort-lipno-sportovni-hala.html",
    text: "Sportovní zázemí se slevou v širším resort ekosystému.",
  },
];

export function getLipnoRentalBySlug(slug: string) {
  return lipnoRentalDetails.find((item) => item.slug === slug);
}
