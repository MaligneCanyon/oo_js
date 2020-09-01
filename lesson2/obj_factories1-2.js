// problem 1
function makeCar(acceleration) {
  return ({
    speed: 0,
    rate: acceleration,
    accelerate() {
      this.speed += this.rate;
    },
  });
};

let sedan = makeCar(8);
console.log(sedan);
sedan.accelerate();
console.log(sedan.speed); // 8

let coupe = makeCar(12);
console.log(coupe);
coupe.accelerate();
console.log(coupe.speed); // 12


// problem 2
let hatchback = makeCar(9);
console.log(hatchback);
hatchback.accelerate();
console.log(hatchback.speed); // 9
