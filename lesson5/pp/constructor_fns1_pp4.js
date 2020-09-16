let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() { // adds the swingSword method to the Ninja prototype
  return this.swung;
};

console.log(ninja.swingSword()); //=> true

// adding the method to the Ninja prototype provides method access to all
// instances of the fn prototype
