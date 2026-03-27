export type LipnoInfoBanner = {
  title: string;
  href: string;
  description: string;
  icon: string;
  external?: boolean;
};

export type LipnoInfoHoursRow = {
  range: string;
  days: string;
  hours: string;
  note?: string;
};

export const lipnoInfocentrumPage = {
  title: "Infocentrum Lipno",
  heroImage: "https://www.lipno.info/templates/lipno/images/layout/infocentrum-leto.jpg",
  heroAlt: "Infocentrum Lipno",
  intro:
    "Infocentrum v Lipně nad Vltavou Vám celoročně poskytuje informace a vše potřebné pro to, aby Vaší pohodové dovolené na Lipensku nic nechybělo.",
  sourceUrl: "https://www.lipno.info/infocentrum.html",
  address: "Lipno nad Vltavou 307, 382 78 Lipno nad Vltavou",
  phone: "+420 731 410 800",
  email: "infocentrum@lipno.info",
  mapEmbedUrl: "https://frame.mapy.cz/s/lomolezehu",
  exchangeRate: "1 € = 23,- Kč",
  parkingTitle: "Placené parkoviště P1",
  parkingItems: [
    "3 hodiny zdarma",
    "Dále 15 Kč za každou započatou hodinu do limitu 48 hodin.",
    "Po 48 hodinách se účtuje 250 Kč za každých dalších 24 hodin parkování.",
  ],
};

export const lipnoInfocentrumHours: LipnoInfoHoursRow[] = [
  { range: "16.3.26 - 29.3.26", days: "denně", hours: "9:30 - 16:00" },
  { range: "30.3.26 - 31.5.26", days: "denně", hours: "9:30 - 17:00" },
  { range: "1.6.26 - 28.9.26", days: "denně", hours: "9:30 - 18:00", note: "Každý čtvrtek v červenci a srpnu 9:30 - 20:30." },
  { range: "29.9.26 - 1.11.26", days: "denně", hours: "9:30 - 16:00" },
];

export const lipnoInfocentrumBanners: LipnoInfoBanner[] = [
  {
    title: "Tipy na cyklovýlety",
    href: "https://www.kolemkolem.info/cz",
    description: "Oficiální tipy na výlety po okolí pro kola, rodiny i delší den na Lipensku.",
    icon: "directions_bike",
    external: true,
  },
  {
    title: "Mapa",
    href: "/mapa",
    description: "Rychlý vstup do interaktivní mapy areálu a služeb v aplikaci.",
    icon: "map",
  },
  {
    title: "Směnárna",
    href: "#smenarna",
    description: "Denní směna EUR na CZK podle provozní doby infocentra.",
    icon: "currency_exchange",
  },
  {
    title: "Napište nám",
    href: "mailto:infocentrum@lipno.info",
    description: "Přímý kontakt na tým infocentra pro dotazy před příjezdem i během pobytu.",
    icon: "mail",
  },
  {
    title: "Tipy na pěší výlety",
    href: "https://www.lipno.info/infocentrum/pesi-vylety.html",
    description: "Oficiální výběr pěších tras a kratších rodinných výšlapů z Lipna.",
    icon: "hiking",
    external: true,
  },
];

export const lipnoInfocentrumOffer = [
  "Bezplatné informace o Lipensku a jeho okolí.",
  "Tipy na výlety a plánování pobytu.",
  "Prodej map, pohledů, známek a suvenýrů.",
  "Prodej šumavských regionálních produktů.",
  "Směnárna EUR na české koruny.",
  "Registrační a kontaktní místo LIPNO.CARD.",
  "Certifikované turistické centrum a člen A.T.I.C.",
];
