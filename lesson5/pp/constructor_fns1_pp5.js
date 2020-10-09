let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); //=> TypeError; not a fn

// ninja refs the original Ninja.prototype obj (where swingSword is not def'd);
// the swingSword method cannot be found on ninja's prototype chain;
// Ninja.prototype is later assigned to a dif obj (where swingSword is def'd)
