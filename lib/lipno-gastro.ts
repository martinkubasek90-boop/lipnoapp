export type LipnoGastroDetail = {
  slug: string;
  title: string;
  teaser: string;
  tagline?: string;
  location: string;
  phone: string;
  email: string;
  heroImage: string;
  imageAlt: string;
  sourceUrl: string;
  websiteUrl?: string;
  openingHours: string[];
  highlights: string[];
  note?: string;
};

export const lipnoGastroDetails: LipnoGastroDetail[] = [
  {
    slug: "restaurace-stodola",
    title: "Restaurace Stodola",
    tagline: "Poctivá jihočeská kuchyně v moderních kulisách",
    teaser: "Silný gastro anchor přímo v rodinném areálu s poctivou kuchyní, velkým prostorem a celoročním provozem.",
    location: "Rodinný areál Lipno, Hotel Element, Lipno nad Vltavou",
    phone: "+420 722 980 028",
    email: "restaurace@stodolalipno.cz",
    heroImage: "https://www.lipno.info/files/lipno/images/zazitek/size2-16799942536037-171-restaurace-stodola-lipno-nad-vltavou-hotel-element.jpg",
    imageAlt: "Restaurace Stodola",
    sourceUrl: "https://www.lipno.info/zazitky/restaurace-stodola.html",
    websiteUrl: "https://www.stodolalipno.cz/",
    openingHours: [
      "Denně 11:00–23:00",
      "Na Lipno.info je uveden celotýdenní provoz bez rozdílu dnů.",
    ],
    highlights: [
      "Poctivá jihočeská kuchyně s důrazem na lokální charakter.",
      "Celoroční provoz, Wi‑Fi a plné zázemí v místě.",
      "Dobře funguje jako hlavní obědová nebo večerní zastávka v centru areálu.",
    ],
    note: "Otevírací doba a kontakty převzaté z oficiální stránky na Lipno.info.",
  },
  {
    slug: "cukrarna-povidlon",
    title: "Cukrárna Povidloň",
    tagline: "Současná neotřelá cukrařina na Lipně",
    teaser: "Moderní cukrárna s výrazným vizuálem, řemeslnými dezerty a celodenním provozem v centru Lipna.",
    location: "Lipno nad Vltavou 330, 382 78 Lipno nad Vltavou",
    phone: "+420 722 990 506",
    email: "cukrarna@cukrarnapovidlon.cz",
    heroImage: "https://www.lipno.info/files/lipno/images/zazitek/size2-16789611535975-171-img-04.jpg",
    imageAlt: "Cukrárna Povidloň",
    sourceUrl: "https://www.lipno.info/zazitky/cukrarna-povidlon.html",
    websiteUrl: "https://www.cukrarnapovidlon.cz/",
    openingHours: [
      "Denně 8:00–19:00",
      "Oficiální web cukrárny uvádí provoz Po–Ne bez rozdílu dní.",
    ],
    highlights: [
      "Výrazná současná cukrařina a dezerty vlastní výroby.",
      "Dobré místo na snídani, kávu nebo odpolední pauzu s dětmi.",
      "Přístup bez bariér a silná poloha v hlavním návštěvnickém toku areálu.",
    ],
    note: "Adresa a otevírací doba doplněné z oficiálního webu cukrárny.",
  },
  {
    slug: "molo-restaurant",
    title: "MOLO RESTAURANT",
    tagline: "Zážitková gastronomie na vlnách lipenského jezera",
    teaser: "Prémiovější restaurace s výhledem na jezero a silným večerním i slavnostním charakterem.",
    location: "MOLO Lipno, Lipno nad Vltavou 517, 382 78 Lipno nad Vltavou",
    phone: "+420 720 985 270",
    email: "restaurant@mololipno.cz",
    heroImage: "https://www.lipno.info/files/lipno/images/zazitek/size2-16787930468589-171-size5-16769696102149-171-molo-lipno-restaurace-708-lq.jpeg",
    imageAlt: "MOLO RESTAURANT",
    sourceUrl: "https://www.lipno.info/zazitky/molo-restaurant.html",
    websiteUrl: "https://www.mololipno.cz/cs/gastronomie",
    openingHours: [
      "Denně 12:00–22:00",
      "Provoz na Lipno.info je veden jako celotýdenní bez rozdílu dní.",
    ],
    highlights: [
      "Panoramatický výhled na jezero a výrazně zážitkovější servis.",
      "Silné místo na delší oběd, večeři nebo speciální příležitost.",
      "Napojení na MOLO Resort a další gastro podniky v téže zóně.",
    ],
    note: "Adresa MOLO Lipno převzatá z oficiálního webu MOLO Resort, otevírací doba z Lipno.info.",
  },
  {
    slug: "cafe-du-lac",
    title: "Cafe du Lac",
    tagline: "Francouzská cukrařina a butiková atmosféra u jezera",
    teaser: "Designová kavárna a cukrárna v MOLO zóně se silným dezertním profilem a řemeslnou zmrzlinou.",
    location: "MOLO Lipno, Lipno nad Vltavou 517, 382 78 Lipno nad Vltavou",
    phone: "+420 606 644 962",
    email: "cafedulac@mololipno.cz",
    heroImage: "https://www.lipno.info/files/lipno/images/zazitek/size2-16867327894521-171-cukra-rna-interie-r-slideshow.jpg",
    imageAlt: "Cafe du Lac",
    sourceUrl: "https://www.lipno.info/zazitky/cafe-du-lac.html",
    websiteUrl: "https://www.mololipno.cz/cs/gastronomie",
    openingHours: [
      "Aktuální otevírací doba se řídí provozem MOLO Resort.",
      "Lipno.info uvádí kontakt a detail podniku, přesný týdenní rozpis si drží MOLO.",
    ],
    highlights: [
      "Francouzský styl dezertů a řemeslná zmrzlina.",
      "Silný sweet spot na kávu, brunch nebo odpolední zastavení.",
      "Vhodné i pro rodiny a skupiny, funguje celoročně.",
    ],
    note: "Lipno.info neuvádí pevný týdenní rozpis hodin; pro aktuální provoz je nejlepší oficiální web MOLO.",
  },
];

export function getLipnoGastroBySlug(slug: string) {
  return lipnoGastroDetails.find((item) => item.slug === slug);
}
