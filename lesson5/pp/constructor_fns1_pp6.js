let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

Ninja.prototype.swing = function () {
  this.swung = true;
  return this; // must rtn the context obj (i.e. 'this')
}

console.log(ninjaA.swing().swung); //=> true
console.log(ninjaB.swing().swung); //=> true
