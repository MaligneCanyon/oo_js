function makeCountry(name, continent, visited) {
  // from the Solution ...
  // if (visited === undefined) {
  //   visited = false;
  // }
  // ... but this has no error chking, nor does
  // function makeCountry(name, continent, visited = false) {

  return {
    name, // concise syntax, replaces 'name: name,'
    continent,
    // visited,
    visited: visited === true ? true : false, // set to false if arg !== true
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.';
    },
  };
};

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America', true);
let southAfrica = makeCountry('The Republic of South Africa', 'Africa', '?');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

console.log(chile);
console.log(canada);
console.log(southAfrica);
