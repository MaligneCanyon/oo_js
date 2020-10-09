let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

Ninja.prototype.swing = function () {
  this.swung = !this.swung;
  return this; // must rtn the context obj (i.e. 'this') when chaining methods
};

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // => false
