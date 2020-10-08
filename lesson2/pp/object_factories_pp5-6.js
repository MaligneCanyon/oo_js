function makeCountry(name, continent, visited) {
  return {
    name,
    continent,
    visited: visited === true ? true : false, // set to false if arg !== true
    visitCountry () { // pp5
      this.visited = true;
    },
    getDescription () {
      // return this.name + ' is located in ' + this.continent + '.';
      return `${this.name} is located in ${this.continent}. ` +
             `I have${this.visited ? "" : "n't"} visited ${this.name}.`; // pp6
    },
  };
};

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// pp6
console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."
