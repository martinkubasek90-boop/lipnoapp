export type LipnoAttractionCategory = "rodiny" | "sport" | "wellness" | "lanovky";

export type LipnoAttractionPriceHighlight = {
  label: string;
  price: string;
  detail?: string;
};

export type LipnoAttractionDetail = {
  slug: string;
  title: string;
  category: LipnoAttractionCategory;
  teaser: string;
  location: string;
  phone: string;
  email: string;
  heroImage: string;
  imageAlt: string;
  sourceUrl: string;
  bookingUrl?: string;
  extraUrl?: string;
  extraLabel?: string;
  openingHours: string[];
  highlights: string[];
  priceHighlights: LipnoAttractionPriceHighlight[];
  note?: string;
};

export const lipnoAttractions: LipnoAttractionDetail[] = [
  {
    slug: "stezka-korunami-stromu",
    title: "Stezka korunami stromů",
    category: "rodiny",
    teaser:
      "Ikonický lipenský zážitek s bezbariérovou trasou, vyhlídkovou věží a jedním z nejdelších suchých tobogánů v Česku.",
    location: "Lipno nad Vltavou 307, 382 78 Lipno nad Vltavou",
    phone: "+420 601 509 116",
    email: "info@stezkakorunamistromu.cz",
    heroImage:
      "https://www.lipno.info/files/lipno/images/zazitek/size2-16649469727149-171-size5-152225228523-171-isam-3021.jpg",
    imageAlt: "Stezka korunami stromů Lipno",
    sourceUrl: "https://www.lipno.info/zazitky/stezka-korunami-stromu-lipno.html",
    bookingUrl: "https://www.lipnocard.cz/shopping/eshop",
    extraUrl: "https://www.stezkakorunamistromu.cz/static/bus-timetable.pdf?v=69237dc2f1",
    extraLabel: "Jízdní řád stezkabusu",
    openingHours: [
      "Denně 10:00–17:00",
      "Vstup a prodej vstupenek končí 1 hodinu před koncem provozu.",
      "Tobogán je otevřen celoročně podle počasí.",
    ],
    highlights: [
      "Délka stezky 675 metrů s edukativními i adrenalinovými zastaveními.",
      "Vyhlídková věž vysoká 40 metrů.",
      "Suchý tobogán dlouhý 52 metrů ve středu věže.",
      "Přístup bez bariér i pro kočárky, návaznost na stezkabus a lanovku Lipno Express.",
      "Parkování na centrálním parkovišti P1 u nástupní stanice lanovky.",
    ],
    priceHighlights: [
      { label: "Online vstup", price: "se slevou", detail: "Oficiální web odkazuje na nákup přes Lipno.card e-shop." },
      { label: "Doprava", price: "P1 + lanovka", detail: "Nejrychlejší nástup z centrálního parkoviště." },
    ],
    note:
      "Zdroj: oficiální detail Stezky na Lipno.info. Děti do 15 let mohou vstoupit jen v doprovodu dospělé osoby a pejsci na stezku nesmějí.",
  },
  {
    slug: "kralovstvi-lesa",
    title: "Království lesa",
    category: "rodiny",
    teaser:
      "Největší rodinná herní zóna v areálu, postavená kolem přírody, pohybu a celodenního dovádění pro děti.",
    location: "Rodinný areál Lipno, horní část u Stezky korunami stromů",
    phone: "+420 601 509 116",
    email: "info@kralovstvilesa.cz",
    heroImage:
      "https://www.lipno.info/files/lipno/images/zazitek/size2-1678105701077-171-foto-mala.jpg",
    imageAlt: "Království lesa",
    sourceUrl: "https://www.lipno.info/zazitky/kralovstvi-lesa.html",
    bookingUrl: "https://www.lipnocard.cz/shopping/eshop",
    openingHours: [
      "17. 4. 2026 – 31. 5. 2026: denně 10:00–18:00",
      "1. 6. 2026 – 28. 9. 2026: denně 10:00–19:00",
      "29. 9. 2026 – 1. 11. 2026: denně 10:00–17:00",
    ],
    highlights: [
      "Desítky certifikovaných herních prvků a lesních atrakcí pro celou rodinu.",
      "Lanovky, provazové sestavy, stromová městečka, skluzavky i velká trampolína.",
      "Doporučené od jara do podzimu, s Wi‑Fi, restaurací, WC a bezbariérovým přístupem.",
      "Silný family day anchor pro půldenní až celodenní návštěvu.",
    ],
    priceHighlights: [
      { label: "Online vstupenky", price: "oficiální e-shop", detail: "Nákup přes Lipno.card / oficiální e-shop." },
      { label: "Sezónní využití", price: "jaro–podzim", detail: "Nejsilnější rodinná atrakce mimo zimu." },
    ],
    note:
      "Zdroj: oficiální detail Království lesa na Lipno.info. Přesný ceník si drží oficiální prodej Lipno.card.",
  },
  {
    slug: "lanovy-park",
    title: "Lanový park",
    category: "sport",
    teaser:
      "Lehce adrenalinová aktivita nad centrálním parkovištěm s nízkým i vysokým okruhem a závěrečnou fly kladkou nad rybníkem.",
    location: "Lipno nad Vltavou 307, nad centrálním parkovištěm",
    phone: "+420 607 426 502",
    email: "lanovypark@lipnoservis.cz",
    heroImage:
      "https://www.lipno.info/files/lipno/images/zazitek/size5-16782583913264-171-lanovy-park.jpg",
    imageAlt: "Lanový park Lipno",
    sourceUrl: "https://www.lipno.info/zazitky/lanovy-park.html",
    bookingUrl: "https://www.lipnocard.cz/shopping/eshop",
    openingHours: [
      "1. 5. 2026 – 28. 6. 2026: Po–Pá 12:30–17:00",
      "1. 5. 2026 – 28. 6. 2026: So–Ne 10:00–17:00",
      "29. 6. 2026 – 31. 8. 2026: denně 10:00–18:00",
      "1. 9. 2026 – 1. 11. 2026: Po–Pá 12:30–17:00",
      "1. 9. 2026 – 1. 11. 2026: So–Ne 10:00–17:00",
    ],
    highlights: [
      "Několik druhů lanových cest v celkové délce zhruba 500 metrů.",
      "Nízký i vysoký okruh pro děti, dospělé i skupiny.",
      "Zakončovací fly kladka nad hladinou rybníka.",
      "Instruktáž a podpora od vyškolených instruktorů.",
      "Doporučená je pevná obuv, pro citlivější ruce i rukavice.",
    ],
    priceHighlights: [
      { label: "Nízký okruh + 1x kladka", price: "350 Kč", detail: "s registrací Lipno.card" },
      { label: "Vysoký okruh krátký", price: "490 Kč", detail: "14 překážek + 1x kladka" },
      { label: "Vysoký okruh dlouhý", price: "590 Kč", detail: "25 překážek + 1x kladka" },
      { label: "Rodina 4 osoby", price: "1 890 Kč", detail: "vysoký okruh + 1x kladka" },
    ],
    note:
      "Oficiální stránka uvádí i další ceny bez registrace Lipno.card a samostatné jízdy na kladce.",
  },
  {
    slug: "aquaworld-lipno",
    title: "Aquaworld Lipno",
    category: "wellness",
    teaser:
      "Indoor vodní jistota pro rodiny i horší počasí: bazén, vířivka, protiproud, dětská skluzavka a sauna.",
    location: "Lipno nad Vltavou 86, 382 78 Lipno nad Vltavou",
    phone: "+420 720 483 007",
    email: "infocentrum@lipno.info",
    heroImage:
      "https://www.lipno.info/files/lipno/images/zazitek/size2-16990049114312-171-bazen-016.jpg",
    imageAlt: "Aquaworld Lipno",
    sourceUrl: "https://www.lipno.info/zazitky/aquaworld-lipno.html",
    openingHours: [
      "Bazén 30. 3. 2026 – 28. 6. 2026: Po–Pá 12:00–20:00, So–Ne 10:00–20:00",
      "Bazén 29. 6. 2026 – 30. 8. 2026: denně 10:00–21:00",
      "Sauna 30. 3. 2026 – 28. 6. 2026: St + Pá a víkend 14:00–20:00",
      "Sauna 29. 6. 2026 – 30. 8. 2026: St + Pá a víkend 14:00–21:00",
    ],
    highlights: [
      "Relax ve vířivce s výhledem na lipenské jezero.",
      "Plavecký bazén, dětská skluzavka a bazén s protiproudem.",
      "Silná indoor alternativa při dešti nebo po aktivním dni venku.",
      "Lipno.card dává 10% slevu na vstup do bazénu i sauny.",
    ],
    priceHighlights: [
      { label: "Dospělý 1 hod", price: "220 Kč / 244 Kč", detail: "s registrací Lipno.card / bez registrace" },
      { label: "Dospělý 3 hod", price: "320 Kč / 356 Kč", detail: "s registrací Lipno.card / bez registrace" },
      { label: "Rodina IV 3 hod", price: "900 Kč / 1 000 Kč", detail: "2 dospělí + 2 děti" },
      { label: "Půlroční permanentka", price: "3 200 Kč", detail: "dospělý, vstup do bazénu i sauny" },
    ],
    note:
      "Zdroj: oficiální detail Aquaworld na Lipno.info. Na šatní skříňku je potřeba mince 10 Kč a vratná záloha 100 Kč na čip.",
  },
  {
    slug: "bikepark-lipno",
    title: "Bikepark Lipno",
    category: "sport",
    teaser:
      "Downhill a flow jízdy v rodinném resortu s návazností na lanovku, bikepark půjčovnu a letní servis.",
    location: "Centrální parkoviště a horní část areálu Lipno",
    phone: "+420 731 656 154",
    email: "infocentrum@lipno.info",
    heroImage:
      "https://www.lipno.info/files/lipno/images/upoutavky/n-17428106960181-171-dsf6878-enhanced-nr-3-1.jpg",
    imageAlt: "Bikepark Lipno",
    sourceUrl: "https://www.lipno.info/zazitky/bikepark-lipno.html",
    bookingUrl: "https://www.lipnocard.cz/shopping/eshop",
    extraUrl: "/pujcovny/bikepark-pujcovna",
    extraLabel: "Bikepark půjčovna",
    openingHours: [
      "Provoz se řídí letním chodem lanovek a bikepark půjčovny.",
      "Nejpraktičtější kontrola dne je přes sekci Servis a oficiální provozní doby.",
      "Půjčovna a servis běží v návaznosti na letní provoz areálu.",
    ],
    highlights: [
      "Napojení na lanovky a oficiální bikepark půjčovnu přímo v areálu.",
      "Smysluplný letní anchor pro sportovní hosty i aktivní rodiny se staršími dětmi.",
      "Rychlá kombinace: půjčení kola, výjezd lanovkou, jízda, servis a návrat bez přesunů autem.",
      "V appce je navázaný přímo i interní detail půjčovny s cenovými highlighty.",
    ],
    priceHighlights: [
      { label: "Downhill kolo od", price: "1 190 Kč", detail: "cenový highlight z oficiální bikepark půjčovny" },
      { label: "Online rezervace", price: "se slevou", detail: "oficiální půjčovna uvádí zvýhodnění při online rezervaci" },
    ],
    note:
      "Oficiální detail Bikeparku na Lipno.info je přesměrovaný a část obsahu se mění sezónně. Pro konkrétní vybavení a ceny je navázaná i oficiální bikepark půjčovna.",
  },
  {
    slug: "bobova-draha",
    title: "Bobová dráha",
    category: "rodiny",
    teaser:
      "Celoroční bobová dráha pro rodiny i skupiny, která funguje za každého počasí a je jednoduchou jistotou programu v areálu.",
    location: "Lipno nad Vltavou, centrální část areálu",
    phone: "+420 602 780 726",
    email: "info@slideland.cz",
    heroImage:
      "https://www.lipno.info/files/lipno/images/zazitek/size5-16782588931859-171-bobovadraha-2.jpg",
    imageAlt: "Bobová dráha Lipno",
    sourceUrl: "https://www.lipno.info/zazitky/bobova-draha.html",
    extraUrl: "http://www.slideland.cz/",
    extraLabel: "Aktuální otevírací doba",
    openingHours: [
      "Otevřeno každý den, 365 dní v roce.",
      "Aktuální denní režim drží provozovatel Slideland.",
    ],
    highlights: [
      "Provoz za každého počasí po celý rok.",
      "Dobrá volba pro rychlý rodinný program i skupiny.",
      "Restaurace v areálu a bezbariérový přístup.",
      "Lipno.card dává zvýhodnění formou bonusových jízd zdarma.",
    ],
    priceHighlights: [
      { label: "Leden–červen, září–prosinec", price: "6+1 zdarma", detail: "nebo 10+2 jízdy zdarma s Lipno.card" },
      { label: "Červenec–srpen", price: "10+1 zdarma", detail: "výhoda s Lipno.card" },
    ],
    note:
      "Oficiální detail drží konkrétní denní provoz na webu Slideland. V appce proto nechávám přímý odkaz na provozovatele.",
  },
  {
    slug: "lanove-drahy",
    title: "Lanové dráhy Lipno Express a Střecha",
    category: "lanovky",
    teaser:
      "Hlavní letní dopravní páteř areálu: vývoz ke Stezce, rodinné trasy a doprava kol do horní části resortu.",
    location: "Nástup z centrálního parkoviště P1, Lipno nad Vltavou",
    phone: "+420 731 410 800",
    email: "infocentrum@lipno.info",
    heroImage:
      "https://www.lipno.info/files/lipno/images/zazitek/size2-16781731468016-171-jezerni.jpg",
    imageAlt: "Lanové dráhy Lipno Express a Střecha",
    sourceUrl: "https://www.lipno.info/zazitky/lanove-drahy-lipno-express-a-strecha.html",
    bookingUrl: "https://www.lipnocard.cz/shopping/eshop",
    openingHours: [
      "Lipno Express 17. 4. 2026 – 31. 5. 2026: Po–Pá po intervalech 9:45–18:15, víkend průběžně 9:45–18:15",
      "Lipno Express 27. 6. 2026 – 30. 8. 2026: denně 9:45–19:15, každý čtvrtek do 22:00",
      "Lanová dráha Střecha 29. 6. 2026 – 30. 8. 2026: denně 10:00–18:00",
      "Mimo hlavní léto se provoz střechy přepíná na víkendové a sváteční dny.",
    ],
    highlights: [
      "Přímý vývoz ke Stezce korunami stromů z centrálního parkoviště.",
      "Kola i koloběžky je možné přepravovat zdarma do 20 kg; u elektrokol je nutné vyjmout baterii.",
      "Letní čtvrtky na Lipno Expressu jedou o prázdninách až do 22:00.",
      "Silný servisní modul pro plán dne: ráno výjezd, nahoře Stezka, Království lesa nebo cyklo trasa.",
    ],
    priceHighlights: [
      { label: "Online vstupenky", price: "oficiální e-shop", detail: "nákup přes Lipno.card" },
      { label: "Přeprava kol", price: "zdarma", detail: "platí při splnění limitu hmotnosti 20 kg" },
    ],
    note:
      "Zdroj: oficiální detail lanovek na Lipno.info. Poslední jízda je možná v čase ukončení provozu dané lanové dráhy.",
  },
];

export function getLipnoAttractionBySlug(slug: string) {
  return lipnoAttractions.find((item) => item.slug === slug);
}
