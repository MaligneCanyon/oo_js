// All cars start out not moving, and sedans
// can accelerate about 8 miles per hour per second (mph/s).
let sedan = {
  speed: 0,
  rate: 8,

  // To accelerate, add the rate of acceleration
  // to the current speed.
  // accelerate: function() {
  accelerate() { // shortform syntax
    this.speed += this.rate;
  },
};

console.log(sedan.speed); // 0
sedan.accelerate();
console.log(sedan.speed); // 8

let coupe = {
  speed: 0,
  rate: 12,
  accelerate() {
    this.speed += this.rate;
  },
};

coupe.accelerate();
console.log(coupe.speed); // 12
