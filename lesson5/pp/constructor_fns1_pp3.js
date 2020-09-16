// function Circle(radius) {
//   this.radius = radius;
//   this.area = function () { return Math.PI * radius * radius; };
// }

// alt, from the Solution ...
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.area = function () { return Math.PI * this.radius * this.radius; };


let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
