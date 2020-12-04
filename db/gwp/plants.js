export function getPlants( filters ) {

  const plants =
  [
   {
     "clazz": {
       "en_CA": "Paleoherb",
       "fr_CA": "Paléoherbe"
     },
     "family": {
       "en_CA": "Cabombaceae",
       "fr_CA": "Cabombacées"
     },
     "sub_family": {
       "en_CA": "water-shield family",
       "fr_CA": "water-shield family"
     },
     "species": "Brasenia schreberi",
     "name": {
       "en_CA": "Watershield",
       "fr_CA": "Brasénie de Schreber"
     },
     "native": true,
     "colour": "red",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6150366",
         imageLink: require('../../assets/gwp/images/P6150366.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-06-15"}
       },
       {
         "photo_id": "P9070383",
         imageLink: require('../../assets/gwp/images/P9070383.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-09-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   }
  ]

  if (filters) {
    if (Array.isArray(filters)) {
      return processFilters(filters, plants);
    }

    // UNKNOWN FILTER
    else {
      return plants;
    }
  }
  // NO FILTER
  else {
    return plants;
  }
};

const MAX_COUNT = 250;

// FP approach
// [Object] -> [Object] -> [Object]
const processFilters = ( filtersArr, plants ) => {

  // convert filters from an Array of Objects to an Object of Objects
  const filters = filtersArr.reduce((acc, curr) => Object.assign(acc, curr), {});

  const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

  // COLOUR  Object -> [Object] -> [Object]
  const fcolour = filters => plants =>
    filters.colour ? plants.filter(plant => (plant.colour === filters.colour.split(",")[0])) : plants

  // LEAF TYPE  Object -> [Object] -> [Object]
  const fleaf = filters => plants =>
    filters.leaf ? plants.filter(plant => (plant.leaf === filters.leaf.split(",")[0])) : plants

  // LEAF ARRANGEMENT  Object -> [Object] -> [Object]
  const farrangement = filters => plants =>
    filters.arrangement ? plants.filter(plant => (plant.arrangement === filters.arrangement.split(",")[0])) : plants

  // FAMILY NAME  Object -> [Object] -> [Object]
  const ffamilyname = filters => plants =>
    filters.familyname ? plants.filter(plant => (plant.family.en_CA === filters.familyname.split(",")[0])) : plants

  // FLOWERING IN  Object -> [Object] -> [Object]
  const ffloweringin = filters => plants =>
    filters.floweringin ? plants.filter(plant => {
      const mnths = {January:15,February:45,March:75,April:105,May:135,June:165,July:195,August:225,September:255,October:285,November:315,December:345};
      const ffin = filters.floweringin.split(",")[0];
      return ((mnths[ffin] >= plant.flowering.start) && (mnths[ffin] <= plant.flowering.end))
    }) : plants

  // TRAIL  Object -> [Object] -> [Object]
  const ftrail = filters => plants => {
    if (filters.trail) {
      var arr = [];
      for (var i = 0; i < plants.length; i++) {
        if (plants[i].photos[0].trail === filters.trail.split(",")[0]) {
          arr.push(plants[i]);
        }
        if (plants[i].photos[1].trail === filters.trail.split(",")[0]) {
          arr.push(plants[i]);
        }
      }
      //console.log("filtering  " + plants.length + " for trail " + filters.trail + ", found " + arr.length);
      return arr;
    }
    else {
      return plants;
    }
  }

  // QUANTITY  Object -> [Object] -> [Object]
  const fquantity = filters => plants =>
    filters.quantity ? plants.slice(0, filters.quantity) : plants

  // SORT
  const fsort = plants => {
    plants.sort((a, b) =>
      a.name.en_CA < b.name.en_CA ? -1 : a.name.en_CA > b.name.en_CA ? 1 : 0
    )
    return plants;
  }

  // TRACE
  const ftrace = plants => {
    console.log(plants);
    return plants;
  }

  // TRACE
  const ftracelen = plants => {
    console.log(plants.length);
    return plants;
  }

  // pipeline of filters
  return filters ? pipe(
    //ftracelen,
    fcolour(filters),
    //ftracelen,
    fleaf(filters),
    farrangement(filters),
    ffloweringin(filters),
    ffamilyname(filters),
    ftrail(filters),
    //ftracelen,
    fquantity({quantity: MAX_COUNT}),
    fsort
    //ftracelen,
    //ftrace
  )(plants) : plants
}
