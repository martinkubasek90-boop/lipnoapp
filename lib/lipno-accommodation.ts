export type LipnoAccommodation = {
  slug: string;
  title: string;
  location: string;
  teaser: string;
  heroImage: string;
  imageAlt: string;
  href: string;
  cta: string;
  highlights: string[];
};

export const lipnoAccommodationHero = {
  image: "https://www.lipno.info/templates/lipno/images/layout/ubytovani-leto.jpg",
  imageAlt: "Ubytování na Lipně",
};

export const lipnoAccommodationDetails: LipnoAccommodation[] = [
  {
    slug: "hotel-element",
    title: "Hotel Element",
    location: "Centrální část areálu Lipno",
    teaser:
      "Hotel v srdci Lipna s přímou návazností na Restauraci Stodola, hlavní služby a rychlý pěší dosah k atrakcím.",
    heroImage: "https://www.lipno.info/files/lipno/images/upoutavky/n-16794782181398-171-dsc-5089ii.jpg",
    imageAlt: "Hotel Element Lipno",
    href: "https://www.hotelelement.cz/",
    cta: "Hotel v srdci Lipna",
    highlights: [
      "Silná poloha přímo v centrální zóně resortu.",
      "Pěšky na lanovku, gastro i hlavní atrakce.",
      "Dobrá volba pro kratší i delší rodinný pobyt.",
    ],
  },
  {
    slug: "kemp-modrin",
    title: "Kemp Modřín",
    location: "Lipno nad Vltavou, zóna Modřín u vody",
    teaser:
      "Kempování u Lipna s rychlým dosahem na pláž, cyklostezku a letní program v jižní části areálu.",
    heroImage: "https://www.lipno.info/files/lipno/images/upoutavky/n-1681292448077-171-338412964-1700994413695687-1051484031988695255-n.jpeg",
    imageAlt: "Kemp Modřín Lipno",
    href: "https://www.campinglipno.cz/",
    cta: "Kempování na Lipně",
    highlights: [
      "Ubytování blízko vody a cyklo-inline stezky.",
      "Navazuje na gastro Modřín a letní zázemí kempu.",
      "Dobrá volba pro hosty, kteří chtějí venkovní režim pobytu.",
    ],
  },
  {
    slug: "apartmany-element",
    title: "Apartmány Element",
    location: "Lipno nad Vltavou, přímo u vody",
    teaser:
      "Stylové apartmány přímo u vody pro delší pobyt, víc soukromí a pohodlnou rodinnou základnu v areálu.",
    heroImage: "https://www.lipno.info/files/lipno/images/upoutavky/n-1679478336316-171-dsc-6825iipan.jpg",
    imageAlt: "Apartmány Element Lipno",
    href: "https://www.elementapartments.cz/cz/",
    cta: "Stylové apartmány přímo u vody",
    highlights: [
      "Apartmánový pobyt s větší volností než klasický hotel.",
      "Přímá návaznost na jezero a centrální část areálu.",
      "Dobré řešení pro rodiny a delší letní pobyty.",
    ],
  },
];
