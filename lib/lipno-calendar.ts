export type LipnoCalendarEvent = {
  slug: string;
  title: string;
  dateLabel: string;
  timeLabel?: string;
  endLabel?: string;
  teaser: string;
  image: string;
  imageAlt: string;
  href: string;
  badge?: string;
  category: "rodiny" | "sport" | "festival" | "show";
};

export const lipnoCalendarSourceUrl = "https://www.lipno.info/kalendar.html";

export const lipnoCalendarEvents: LipnoCalendarEvent[] = [
  {
    slug: "velikonocni-cesta-lisaka-foxe",
    title: "Velikonoční cesta lišáka Foxe",
    dateLabel: "4. dubna 2026",
    timeLabel: "13:00",
    teaser: "Tradiční velikonoční cesta lišáka Foxe se stanovišti a rodinným programem v areálu.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17731313134363-171-velikonocni-cesta-lisaka-foxe.png",
    imageAlt: "Velikonoční cesta lišáka Foxe",
    href: "https://www.lipno.info/kalendar/221-velikonocni-cesta-lisaka-foxe.html",
    category: "rodiny",
  },
  {
    slug: "blinduro",
    title: "Blinduro",
    dateLabel: "8. května 2026",
    endLabel: "až do 10.5.",
    teaser: "Závodní a festivalový bike víkend pro všechny, kdo mají rádi trail, enduro a lipenský terén.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17731314850991-171-blinduro.jpg",
    imageAlt: "Blinduro",
    href: "https://www.lipno.info/kalendar/222-blinduro.html",
    badge: "Bike",
    category: "sport",
  },
  {
    slug: "draci-lode",
    title: "Dračí lodě",
    dateLabel: "22. května 2026",
    endLabel: "až do 23.5.",
    teaser: "Silný sportovní víkend u jezera s dračími loděmi, posádkami a doprovodným programem.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733042206892-171-draci-lode.jpg",
    imageAlt: "Dračí lodě",
    href: "https://www.lipno.info/kalendar/223-draci-lode.html",
    category: "sport",
  },
  {
    slug: "kolemkolem-fest-2026",
    title: "KolemKolem Fest 2026",
    dateLabel: "5. června 2026",
    endLabel: "až do 7.6.",
    teaser: "Velký cyklo festival s programem pro hobby jezdce, rodiny i fanoušky všech disciplín.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17714997795914-171-kolemkolem-fest-2026.jpg",
    imageAlt: "KolemKolem Fest 2026",
    href: "https://www.lipno.info/kalendar/219-kolemkolem-fest-2026.html",
    category: "festival",
  },
  {
    slug: "indian-riders-fest",
    title: "Indian Riders Fest",
    dateLabel: "18. června 2026",
    endLabel: "až do 21.6.",
    teaser: "Velký motocyklový sraz a festival s doprovodným programem v lipenském resortu.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733054777463-171-indian-riders-fest.jpg",
    imageAlt: "Indian Riders Fest",
    href: "https://www.lipno.info/kalendar/224-indian-riders-fest.html",
    category: "festival",
  },
  {
    slug: "pigyada",
    title: "Pigyáda",
    dateLabel: "20. června 2026",
    teaser: "Show s prasátkem Pigy a Lily v Království lesa, mířená hlavně na rodiny s dětmi.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733056703697-171-pigyada.jpg",
    imageAlt: "Pigyáda",
    href: "https://www.lipno.info/kalendar/225-pigyada.html",
    category: "show",
  },
  {
    slug: "radiokemp-frekvence-1",
    title: "Radiokemp Frekvence 1",
    dateLabel: "15. července 2026",
    timeLabel: "14:00",
    teaser: "Roadshow rádia Frekvence 1 dorazí do Lipna s pódiem, hosty a letní atmosférou u vody.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733077637584-171-radiokemp-frekvence-1.jpg",
    imageAlt: "Radiokemp Frekvence 1",
    href: "https://www.lipno.info/kalendar/231-radiokemp-frekvence-1.html",
    category: "show",
  },
  {
    slug: "narozeniny-stezky-korunami-stromu",
    title: "Narozeniny Stezky korunami stromů",
    dateLabel: "20. července 2026",
    timeLabel: "10:00",
    teaser: "Celodenní oslava Stezky korunami stromů s programem pro rodiny i návštěvníky areálu.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-1773306165617-171-narozeniny-stezky-korunami-stromu.jpg",
    imageAlt: "Narozeniny Stezky korunami stromů",
    href: "https://www.lipno.info/kalendar/227-narozeniny-stezky-korunami-stromu.html",
    category: "rodiny",
  },
  {
    slug: "pohadka-v-kralovstvi-lesa",
    title: "Pohádka v Království lesa",
    dateLabel: "23. července 2026",
    timeLabel: "11:00",
    teaser: "Dětské divadlo a rodinný program v Království lesa s lehkým prázdninovým režimem.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733069769787-171-pohadka-v-kralovstvi-lesa.jpg",
    imageAlt: "Pohádka v Království lesa",
    href: "https://www.lipno.info/kalendar/228-pohadka-v-kralovstvi-lesa.html",
    category: "rodiny",
  },
  {
    slug: "cez-lipno-sport-festival",
    title: "ČEZ Lipno Sport Festival",
    dateLabel: "14. srpna 2026",
    endLabel: "až do 23.8.",
    teaser: "Nejsilnější letní sportovní event na Lipně s programem, hvězdami a pohybem pro veřejnost.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733058765672-171-cez-lipno-sport-festival.jpg",
    imageAlt: "ČEZ Lipno Sport Festival",
    href: "https://www.lipno.info/kalendar/226-cez-lipno-sport-festival.html",
    category: "festival",
  },
  {
    slug: "den-s-integrovanym-zachrannym-systemem",
    title: "Den s integrovaným záchranným systémem",
    dateLabel: "5. září 2026",
    timeLabel: "10:00",
    teaser: "Ukázky techniky, zásahových složek a program pro děti i rodiny přímo v areálu.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733072634236-171-den-s-integrovanym-zachrannym-systemem.jpg",
    imageAlt: "Den s integrovaným záchranným systémem",
    href: "https://www.lipno.info/kalendar/229-den-s-integrovanym-zachrannym-systemem.html",
    category: "show",
  },
  {
    slug: "lipnotrailrun-2026",
    title: "Lipno.trail.run. 2026",
    dateLabel: "19. září 2026",
    teaser: "Trailový běžecký festival na jihu Čech s více tratěmi a silným závěrem letní sezóny.",
    image: "https://www.lipno.info/files/lipno/images/calendar/size1-17733080627484-171-lipnotrailrun-2026.jpg",
    imageAlt: "Lipno.trail.run. 2026",
    href: "https://www.lipno.info/kalendar/232-lipnotrailrun-2026.html",
    category: "sport",
  },
];
