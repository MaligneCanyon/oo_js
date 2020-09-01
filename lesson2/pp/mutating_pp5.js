let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = { // reassignment; 'animal' now refs a dif obj
  name: 'Timom',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false // menagerie.warthog refs the original 'animal' obj
menagerie.meerkat === animal; // true
