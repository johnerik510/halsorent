export interface Article {
  slug: string;
  url: string;
  title: string;
  excerpt: string;
  category: string;
  categoryUrl: string;
  hero: string;
  publishDate: string;
  updateDate?: string;
  readingTime: number;
  cornerstone?: boolean;
  published?: boolean;
}

export interface Cluster {
  slug: string;
  url: string;
  label: string;
  shortLabel: string;
  description: string;
  hero: string;
  intro: string;
}

export const clusters: Cluster[] = [
  {
    slug: 'allergi-och-astma',
    url: '/allergi-och-astma/',
    label: 'Allergi & astma',
    shortLabel: 'Allergi',
    description: 'Städa bort dammkvalster, pollen och djurallergen. Konkreta råd för ett allergivänligt hem.',
    hero: '/images/heroes/allergi.webp',
    intro: 'Runt 30 procent av Sveriges befolkning lever med allergi. Hemmet är ofta den plats där allergenerna gör mest skada, eftersom vi spenderar mer tid inomhus än utomhus. Rätt städteknik och rätt utrustning gör en påtaglig skillnad, utan att du behöver köpa dyra specialprodukter.',
  },
  {
    slug: 'kemikaliefri-stadning',
    url: '/kemikaliefri-stadning/',
    label: 'Kemikaliefri städning',
    shortLabel: 'Kemikaliefri',
    description: 'Städa effektivt med bikarbonat, ättika och citronsyra. Utan skadliga kemikalier.',
    hero: '/images/heroes/kemikaliefri.webp',
    intro: 'Hushållskemikalier bidrar till en försämrad inomhusluft och kan utlösa reaktioner hos känsliga personer. Bikarbonat, ättika och citronsyra är billiga, effektiva och nedbrytbara alternativ som löser de flesta rengöringsproblem i ett hem.',
  },
  {
    slug: 'inomhusluft',
    url: '/inomhusluft/',
    label: 'Inomhusluft',
    shortLabel: 'Inomhusluft',
    description: 'Förbättra luftkvaliteten hemma. Luftrenare, ventilation, luftfuktighet och partiklar.',
    hero: '/images/heroes/inomhusluft.webp',
    intro: 'Inomhusluften kan vara 2 till 5 gånger mer förorenad än utomhusluften, enligt Naturvårdsverket. Dammpartiklar, mögel­sporer, VOC från målarfärg och möbler samt koldioxid från din utandningsluft påverkar hälsan varje dag. Här går vi igenom vad du faktiskt kan göra åt det.',
  },
  {
    slug: 'mogel-och-fukt',
    url: '/mogel-och-fukt/',
    label: 'Mögel & fukt',
    shortLabel: 'Mögel',
    description: 'Identifiera och åtgärda mögel och fukt i hemmet. När du kan göra det själv och när du behöver hjälp.',
    hero: '/images/heroes/mogel.webp',
    intro: 'Mögel producerar sporer och mykotoxiner som kan orsaka luftvägsbesvär, trötthet och allergireaktioner. De flesta mögelskador i svenska hem uppstår i badrum, kök och källare, och många kan åtgärdas om de upptäcks tidigt. Här lär du dig identifiera, mäta och hantera mögel rätt.',
  },
  {
    slug: 'stadtips-och-rutiner',
    url: '/stadtips-och-rutiner/',
    label: 'Städtips & rutiner',
    shortLabel: 'Städtips',
    description: 'Effektiva städscheman och rutiner som håller hemmet rent utan att ta halva dagen.',
    hero: '/images/heroes/stadtips.webp',
    intro: 'En bra städrutin handlar inte om att städa mer, utan om att städa smartare. Med rätt ordning, rätt verktyg och ett genomtänkt schema kan du hålla ett hälsosamt hem med ett minimum av tid och ansträngning.',
  },
  {
    slug: 'rengoring-av-apparater',
    url: '/rengoring-av-apparater/',
    label: 'Rengöring av apparater',
    shortLabel: 'Apparater',
    description: 'Rengör tvättmaskin, diskmaskin, kylskåp och luftrenare ordentligt. Steg för steg.',
    hero: '/images/heroes/apparater.webp',
    intro: 'Hushållsapparater samlar snabbt på sig bakterier, mögel och kalkavlagringar om de inte rengörs regelbundet. En smutsig tvättmaskin tvättar smutsigt, och ett igensatt kylskåpsfilter höjer energiförbrukningen. Här finns steg-för-steg-guider för de vanligaste apparaterna.',
  },
];

export const articles: Article[] = [
  // Allergi & astma
  {
    slug: 'dammkvalster-i-sang',
    url: '/allergi-och-astma/dammkvalster-i-sang/',
    title: 'Dammkvalster i sängen: så bli du av med dem',
    excerpt: 'Dammkvalster trivs i din säng. Så här minskar du antalet kvalster och lindrar allergibesvären med enkla åtgärder som faktiskt fungerar.',
    category: 'Allergi & astma',
    categoryUrl: '/allergi-och-astma/',
    hero: '/images/articles/dammkvalster.webp',
    publishDate: '2026-04-29',
    updateDate: '2026-04-29',
    readingTime: 9,
    cornerstone: true,
    published: true,
  },
  {
    slug: 'allergivanlig-dammsugare',
    url: '/allergi-och-astma/allergivanlig-dammsugare/',
    title: 'Dammsugare för allergiker: vad du ska titta efter',
    excerpt: 'HEPA-filter, tät konstruktion och rätt sugkraft. Vad som faktiskt spelar roll när du väljer dammsugare vid allergi.',
    category: 'Allergi & astma',
    categoryUrl: '/allergi-och-astma/',
    hero: '/images/articles/dammsugare.webp',
    publishDate: '2026-04-29',
    readingTime: 7,
    published: true,
  },
  {
    slug: 'pollen-i-hemmet',
    url: '/allergi-och-astma/pollen-i-hemmet/',
    title: 'Pollen i hemmet: minska pollenbördan inomhus',
    excerpt: 'Pollen fastnar i kläder, hår och möbler. Så här håller du pollenet utanför hemmet under pollensäsongen.',
    category: 'Allergi & astma',
    categoryUrl: '/allergi-och-astma/',
    hero: '/images/articles/pollen.webp',
    publishDate: '2026-04-29',
    readingTime: 6,
    published: true,
  },
  {
    slug: 'stada-med-astma',
    url: '/allergi-och-astma/stada-med-astma/',
    title: 'Städa när du har astma: råd som faktiskt hjälper',
    excerpt: 'Städning kan utlösa astmaanfall. Rätt teknik, rätt timing och rätt skydd minskar risken utan att hemmet blir ostädat.',
    category: 'Allergi & astma',
    categoryUrl: '/allergi-och-astma/',
    hero: '/images/articles/astma.webp',
    publishDate: '2026-04-29',
    readingTime: 7,
    published: true,
  },

  // Kemikaliefri städning
  {
    slug: 'rengora-med-bikarbonat',
    url: '/kemikaliefri-stadning/rengora-med-bikarbonat/',
    title: 'Rengöra med bikarbonat: komplett guide för hemmet',
    excerpt: 'Bikarbonat skurar, luktneutraliserar och löser upp fett. En komplett guide till hur du använder bikarbonat i varje rum.',
    category: 'Kemikaliefri städning',
    categoryUrl: '/kemikaliefri-stadning/',
    hero: '/images/articles/bikarbonat.webp',
    publishDate: '2026-04-29',
    updateDate: '2026-04-29',
    readingTime: 8,
    cornerstone: true,
    published: true,
  },
  {
    slug: 'attika-rengoring',
    url: '/kemikaliefri-stadning/attika-rengoring/',
    title: 'Ättika vid rengöring: vad den klarar och vad den inte klarar',
    excerpt: 'Ättika löser upp kalk och dödar bakterier, men ska aldrig blandas med bikarbonat eller användas på marmor. Så här gör du rätt.',
    category: 'Kemikaliefri städning',
    categoryUrl: '/kemikaliefri-stadning/',
    hero: '/images/articles/attika.webp',
    publishDate: '2026-04-29',
    readingTime: 6,
    published: true,
  },
  {
    slug: 'citronsyra-rengoring',
    url: '/kemikaliefri-stadning/citronsyra-rengoring/',
    title: 'Citronsyra för rengöring: avkalkning och mer',
    excerpt: 'Citronsyra är det kraftfullaste naturliga avkalkningsmedlet du kan köpa. Så här avkalkar du kaffemaskinen, vattenkokaren och duschfältet.',
    category: 'Kemikaliefri städning',
    categoryUrl: '/kemikaliefri-stadning/',
    hero: '/images/articles/citronsyra.webp',
    publishDate: '2026-04-29',
    readingTime: 6,
    published: true,
  },
  {
    slug: 'giftfri-stadning-barnrum',
    url: '/kemikaliefri-stadning/giftfri-stadning-barnrum/',
    title: 'Giftfri städning i barnrummet',
    excerpt: 'Barn är känsligare för kemikalier än vuxna. Så här städar du barnrummet effektivt utan ämnen som skadar luftvägar och hormoner.',
    category: 'Kemikaliefri städning',
    categoryUrl: '/kemikaliefri-stadning/',
    hero: '/images/articles/barnrum.webp',
    publishDate: '2026-04-29',
    readingTime: 7,
    published: true,
  },

  // Inomhusluft
  {
    slug: 'luftrenare-allergi',
    url: '/inomhusluft/luftrenare-allergi/',
    title: 'Luftrenare mot allergi: vad du behöver veta innan du köper',
    excerpt: 'HEPA-filter är ett krav, men det räcker inte ensamt. Vad som faktiskt avgör om en luftrenare hjälper mot allergi, och vilka funktioner du inte behöver betala för.',
    category: 'Inomhusluft',
    categoryUrl: '/inomhusluft/',
    hero: '/images/articles/luftrenare.webp',
    publishDate: '2026-04-29',
    updateDate: '2026-04-29',
    readingTime: 10,
    cornerstone: true,
    published: true,
  },
  {
    slug: 'forbattra-inomhusluft',
    url: '/inomhusluft/forbattra-inomhusluft/',
    title: 'Förbättra inomhusluften: 8 åtgärder som gör skillnad',
    excerpt: 'Från att vädra rätt till att välja rätt växter. Konkreta åtgärder som faktiskt minskar partikelhalten och VOC i ditt hem.',
    category: 'Inomhusluft',
    categoryUrl: '/inomhusluft/',
    hero: '/images/articles/inomhusluft.webp',
    publishDate: '2026-04-29',
    readingTime: 7,
    published: true,
  },
  {
    slug: 'luftfuktighet-hemmet',
    url: '/inomhusluft/luftfuktighet-hemmet/',
    title: 'Luftfuktighet i hemmet: rätt nivå för hälsa och hus',
    excerpt: 'För låg luftfuktighet torkar slemhinnorna. För hög gynnar dammkvalster och mögel. Den optimala nivån är 40 till 50 procent, och så når du dit.',
    category: 'Inomhusluft',
    categoryUrl: '/inomhusluft/',
    hero: '/images/articles/luftfuktighet.webp',
    publishDate: '2026-04-29',
    readingTime: 6,
    published: true,
  },
  {
    slug: 'ventilation-lagenhet',
    url: '/inomhusluft/ventilation-lagenhet/',
    title: 'Ventilation i lägenhet: kontrollera och förbättra',
    excerpt: 'Dålig ventilation leder till fukt, dålig luft och mögelproblem. Hur du kontrollerar att din ventilation fungerar och vad du kan justera själv.',
    category: 'Inomhusluft',
    categoryUrl: '/inomhusluft/',
    hero: '/images/articles/ventilation.webp',
    publishDate: '2026-04-29',
    readingTime: 6,
    published: true,
  },

  // Mögel & fukt
  {
    slug: 'mogel-i-hemmet',
    url: '/mogel-och-fukt/mogel-i-hemmet/',
    title: 'Mögel i hemmet: identifiera, mäta och åtgärda',
    excerpt: 'Synligt mögel är bara toppen av isberget. Så här identifierar du dolt mögel, tolkar ett mögeltest och avgör om du kan åtgärda det själv.',
    category: 'Mögel & fukt',
    categoryUrl: '/mogel-och-fukt/',
    hero: '/images/articles/mogel.webp',
    publishDate: '2026-04-29',
    updateDate: '2026-04-29',
    readingTime: 11,
    cornerstone: true,
    published: true,
  },
  {
    slug: 'mogel-badrum',
    url: '/mogel-och-fukt/mogel-badrum/',
    title: 'Mögel i badrummet: ta bort det och håll det borta',
    excerpt: 'Badrumssilikonen och fogarna är klassiska mögelhärdar. Steg för steg: ta bort svart mögel, byt fogmassa och förhindra att det kommer tillbaka.',
    category: 'Mögel & fukt',
    categoryUrl: '/mogel-och-fukt/',
    hero: '/images/articles/mogel-badrum.webp',
    publishDate: '2026-04-29',
    readingTime: 7,
    published: true,
  },
  {
    slug: 'fukt-kallare',
    url: '/mogel-och-fukt/fukt-kallare/',
    title: 'Fukt i källaren: orsaker och åtgärder',
    excerpt: 'Källarfukt är vanligt i svenska hus och kan orsaka mögel och dålig inomhusluft i hela huset. Vad du kan göra själv och när du behöver en specialist.',
    category: 'Mögel & fukt',
    categoryUrl: '/mogel-och-fukt/',
    hero: '/images/articles/kallare.webp',
    publishDate: '2026-04-29',
    readingTime: 8,
    published: true,
  },
  {
    slug: 'mogelsanering-sjalv',
    url: '/mogel-och-fukt/mogelsanering-sjalv/',
    title: 'Mögelrengöring själv: när det går och när det inte går',
    excerpt: 'Skador under 0,5 kvadratmeter på hårda ytor kan du ofta rengöra själv. Allt annat kräver professionell sanering. Här är gränserna och metoderna.',
    category: 'Mögel & fukt',
    categoryUrl: '/mogel-och-fukt/',
    hero: '/images/articles/sanering.webp',
    publishDate: '2026-04-29',
    readingTime: 7,
    published: true,
  },

  // Städtips & rutiner
  {
    slug: 'stadschema-hemmet',
    url: '/stadtips-och-rutiner/stadschema-hemmet/',
    title: 'Städschema för hemmet: dagligt, veckovis och månadsvis',
    excerpt: 'Ett städschema som faktiskt fungerar i vardagen. Vad som behöver göras varje dag, varje vecka och varje månad för att hålla ett hälsosamt hem.',
    category: 'Städtips & rutiner',
    categoryUrl: '/stadtips-och-rutiner/',
    hero: '/images/articles/stadschema.webp',
    publishDate: '2026-04-29',
    updateDate: '2026-04-29',
    readingTime: 8,
    cornerstone: true,
    published: true,
  },
  {
    slug: 'ratt-ordning-stadning',
    url: '/stadtips-och-rutiner/ratt-ordning-stadning/',
    title: 'Rätt ordning när du städar: uppifrån och ner, torrare före vattnare',
    excerpt: 'Fel ordning innebär att du sprider smuts du just har städat bort. Den korrekta ordningen sparar tid och ger ett renare resultat.',
    category: 'Städtips & rutiner',
    categoryUrl: '/stadtips-och-rutiner/',
    hero: '/images/articles/ordning.webp',
    publishDate: '2026-04-29',
    readingTime: 5,
    published: true,
  },
  {
    slug: 'stada-fort',
    url: '/stadtips-och-rutiner/stada-fort/',
    title: 'Städa fort: genomstäda hela hemmet på under en timme',
    excerpt: 'En strategisk genomstädning tar inte 3 timmar om du jobbar rätt. Så här städar du ett helt hem på 45 till 60 minuter.',
    category: 'Städtips & rutiner',
    categoryUrl: '/stadtips-och-rutiner/',
    hero: '/images/articles/fort.webp',
    publishDate: '2026-04-29',
    readingTime: 6,
    published: true,
  },
  {
    slug: 'djupstadning',
    url: '/stadtips-och-rutiner/djupstadning/',
    title: 'Djupstädning: vad det är och hur du gör det rum för rum',
    excerpt: 'En djupstädning täcker allt som inte ingår i den vanliga städningen: bakom kylskåpet, inuti ugnen, under soffan och garderobernas insida.',
    category: 'Städtips & rutiner',
    categoryUrl: '/stadtips-och-rutiner/',
    hero: '/images/articles/djup.webp',
    publishDate: '2026-04-29',
    readingTime: 9,
    published: true,
  },

  // Rengöring av apparater
  {
    slug: 'rengora-tvattmaskin',
    url: '/rengoring-av-apparater/rengora-tvattmaskin/',
    title: 'Rengöra tvättmaskin: komplett guide mot lukt och mögel',
    excerpt: 'En smutsig tvättmaskin tvättar smutsigt och luktar. Hur du rensar luddfilter, avkalkar trumman och håller maskinen fräsch med naturliga medel.',
    category: 'Rengöring av apparater',
    categoryUrl: '/rengoring-av-apparater/',
    hero: '/images/articles/tvattmaskin.webp',
    publishDate: '2026-04-29',
    updateDate: '2026-04-29',
    readingTime: 8,
    cornerstone: true,
    published: true,
  },
  {
    slug: 'rengora-diskmaskin',
    url: '/rengoring-av-apparater/rengora-diskmaskin/',
    title: 'Rengöra diskmaskin: avkalkning, filter och luktborttagning',
    excerpt: 'Diskmaskinen samlar kalk, matfett och mögel i filter och packningar. Månatlig rengöring med citronsyra håller den i toppskick.',
    category: 'Rengöring av apparater',
    categoryUrl: '/rengoring-av-apparater/',
    hero: '/images/articles/diskmaskin.webp',
    publishDate: '2026-04-29',
    readingTime: 7,
    published: true,
  },
  {
    slug: 'rengora-kylskap',
    url: '/rengoring-av-apparater/rengora-kylskap/',
    title: 'Rengöra kylskåpet ordentligt: steg för steg',
    excerpt: 'Kylskåpet är ett av hemets bakterietätaste ställen. Hur du tömmer, rengör, desinfekterar och organiserar det på rätt sätt.',
    category: 'Rengöring av apparater',
    categoryUrl: '/rengoring-av-apparater/',
    hero: '/images/articles/kylskap.webp',
    publishDate: '2026-04-29',
    readingTime: 6,
    published: true,
  },
  {
    slug: 'rengora-luftrenare',
    url: '/rengoring-av-apparater/rengora-luftrenare/',
    title: 'Rengöra luftrenaren: filter, kåpa och sensorer',
    excerpt: 'En luftrenare med igensatt filter renar sämre och kan sprida partiklar. Hur ofta du bör rengöra och byta filter, och hur du gör det rätt.',
    category: 'Rengöring av apparater',
    categoryUrl: '/rengoring-av-apparater/',
    hero: '/images/articles/rengorning-luftrenare.webp',
    publishDate: '2026-04-29',
    readingTime: 5,
    published: true,
  },
];

export function getArticlesByCluster(slug: string): Article[] {
  const cluster = clusters.find(c => c.slug === slug);
  if (!cluster) return [];
  return articles.filter(a => a.categoryUrl === cluster.url && a.published);
}

export function getRelated(currentSlug: string, categoryUrl: string, limit = 3): Article[] {
  return articles
    .filter(a => a.published && a.slug !== currentSlug && a.categoryUrl === categoryUrl)
    .slice(0, limit);
}
