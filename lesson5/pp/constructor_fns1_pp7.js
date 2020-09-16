let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));
// alt, from the Solution ...
let ninjaB = new ninjaA.constructor;

console.log(ninjaB.constructor === ninjaA.constructor); //=> true
