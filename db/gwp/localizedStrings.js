export function getLocalizedStrings( locale, collection ) {
  // ex: getLocalizedStrings("en_CA", "colour")
  // ex: getLocalizedStrings("fr_CA", "ALL")
  // ex: getLocalizedStrings("ALL")

  // English
  const en_CA = {
    gwp: "Gatineau Wildflower Project",
    welcome: "Hello",
    screen: "Home,Query,Flowers,Flower Details,About,Contact,Links,Copyright".split(','),
    homebutton: 'Query,About,Contact,Links,Copyright'.split(','),
    all: "ALL",
    colour: "white,yellow,red,purple,green,brown,orange,blue,pink".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
    familyname:
`Adoxaceae,Alismataceae,Alliaceae,Amaranthaceae,Apiaceae,Apocynaceae,Araceae,Araliaceae,Aristolochiaceae,Asteraceae,
Balsaminaceae,Berberidaceae,Boraginaceae,Brassicaceae,
Cabombaceae,Campanulaceae,Caprifoliaceae,Caryophyllaceae,Colchiaceae,Convolvulaceae,Cornaceae,
Ericaceae,Euphorbiaceae,Fabaceae,Geraniaceae,Hemerocallidaceae,Hydrophyllaceae,Hypericaceae,
Iridaceae,Lamiaceae,Lentibulariaceae,Liliaceae,Lythraceae,Malvaceae,Melanthiaceae,Montiaceae,
Nymphaeaceae,Onagraceae,Orchidaceae,Orobanchaceae,Oxalidaceae,
Papaveraceae,Phrymaceae,Plantaginaceae,Polygonaceae,Pontederiaceae,Portulacaceae,Primulaceae,
Ranunculaceae,Rosaceae,Rubiaceae,Ruscaceae,Saxifragaceae,Scrophulariaceae,Solanaceae,
Typhaceae,Urticaceae,Verbenaceae,Violaceae`.split(','),
    trail: "1,1B,2,3,5,6,8,9,14,15,17,18,21,23,24,25,28,29,31,32,36,38,40,50,52,53,54,55,62,72,73".split(','),
    abouttitle: "About",
    abouttext: [
      "What would you like to know about the Gatineau Wildflower Project?",
      "Where is the Gatineau?",
      "What is a wild flower?",
      "What is the project trying to accomplish?"
    ],
    querytitle: "Flower Search",
    queryresults: "results",
    queryfiltername: 'Flower colour,Leaf type,Leaf arrangement,Flowering in,Family name,Trail number'.split(","),
    querydone: "Done"
  }

  //const en-CA = en_CA;

  // French
  const fr_CA = {
    gwp: "Projet de fleurs sauvages de Gatineau",
    welcome: "Bonjour",
    screen: "Home,Requête,Fleurs,Détails,À propos,Contact,Liens,Copyright".split(','),
    homebutton: 'Requête,À propos,Contact,Liens,Copyright'.split(','),
    all: "TOUS",
    colour: "blanc,jaune,rouge,violet,vert,brun,orange,bleu,rose".split(","),
    leaf: "simple,composée,aucun".split(","),
    arrangement: "alternes, basales, verticillées, opposées, aucune".split(','),
    floweringin: 'janvier,février,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre'.split(','),
    familyname: `
Adoxacées,Alismatacées,Alliacées,Amaranthacées,Apiacées,Apocynacées,Aracées,Araliacées,Aristolochiacées,Astéracées,
Balsaminacées,Berbéridacées,Boraginacées,Brassicacées,
Cabombacées,Campanulacées,Caprifoliacées,Caryophyllacées,Colchicacées,Convolvulacées,Cornacées,
Éricacées,Euphorbiacées,Fabacées,Géraniacées,Hémérocallidacées,Hydrophyllacées,Hypéricacées,
Iridacées,Lamiacées,Lentibulariacées,Liliacées,Lythracées,Malvacées,Mélanthiacées,Montiacées,
Nymphéacées,Onagracées,Orchidacées,Orobanchacées,Oxalidacées,
Papavéracées,Phrymacées,Plantaginacées,Polygonacées,Pontédériacées,Portulacaceae (need translation),Primulacées,
Renonculacées,Rosacées,Rubiacées,Ruscacées,Saxifragacées,Scrofulariacées,Solanacées,
Typhacées,Urticacées,Verbénacées,Violacées`.split(','),
    abouttitle: "À propos",
    abouttext: [
      "Qu'aimeriez-vous savoir sur le Projet de fleurs sauvages de Gatineau?",
      "Où est la Gatineau?",
      "Qu'est-ce qu'une fleur sauvage?",
      "Qu'est-ce que le projet essaie d'accomplir?"
    ]
  }

  // Spanish
  const es = {
    gwp: "Proyecto de flores silvestres de Gatineau",
    welcome: "Buenos Dias",
    all: "TODOS",
    colour: "blanco,amarillo,rojo,violeta,verde,marrón,naranja,azul,rosa".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre'.split(','),
    familyname: null
  }

  // German
  const de = {
    gwp: "Gatineau Wildblumenprojekt",
    welcome: "Guten Tag",
    all: "ALLES",
    colour: "weiß,gelb,rot,lila,grün,braun,orange,blau,pink".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember'.split(','),
    familyname: null
  }

  // Latin
  const la = {
    gwp: "Gatineau flos feram Project",
    welcome: "Salve",
    all: "OMNIS",
    colour: "album,luteus,rubrum,purpura,viridis,brunneis,aureus,caeruleo,rosea".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'Ianuarius,Februarius,Martius,Aprilis,Maius,Iunius,Iulius,Augustus,September,October,November,December'.split(','),
    familyname: null,
    abouttitle: "About",
    abouttext: [
    "Vis scire quid futurum de Gatineau Wildflower Project?",
       "Gatineau Ubi est?",
       "Quod est flos feri!",
       "Quid est, conatur et implerem project?"
    ]
  }

  // Russian
  const ru = {
    gwp: "Проект Полевой цветок Гатино",
    welcome: "Здравствуйте",
    homebutton: "Запрос, О нас, Контакт, Ссылки, Авторские права".split(','),
    all: "ВСЕ",
    screen: "Главная, Запрос, Цветы, Детали Цветка, О нас, Контакт, Ссылки, Авторские права".split(','),
    colour: "белый,желтый,красный,фиолетовый,зеленый,коричневый,оранжевый,синий,розовый".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(','),
    familyname: null,
    abouttitle: "насчет",
    abouttext: [
    "Что бы вы хотели знать о проекте Gatineau Wildflower?",
       "Где Гатино?",
       "Что такое полевой цветок?",
       "Чего пытается достичь проект?"
    ]
  }

  const strings = {
    en_CA,
    fr_CA,
    en: en_CA,
    fr: fr_CA,
    es,
    de,
    la,
    ru
  }

  //console.log(JSON.stringify(strings, null, 2));
  //console.log(en_CA.trail);

  if (locale == "All") {return strings}
  if (collection == "All") {return strings[locale]}
  return strings[locale][collection];
}
