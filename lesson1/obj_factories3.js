// problem 3
function makeCar(acceleration, deceleration) {
  return ({
    speed: 0,
    accel: acceleration,
    accelerate() {
      this.speed += this.accel;
    },
    decel: deceleration,
    brake() {
      this.speed -= this.decel;
      if (this.speed < 0) this.speed = 0;
    },
  });
};

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed); // 8
sedan.brake();
console.log(sedan.speed); // 2
sedan.brake();
console.log(sedan.speed); // 0
