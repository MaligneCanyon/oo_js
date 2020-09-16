
//     Create an object called shape that has a getType method.
//     Define a Triangle constructor function whose prototype is shape. Objects created with Triangle
//     should have four own properties: a, b, c (representing the sides of a triangle), and type.
//     Add a new method to the prototype called getPerimeter.

// Test your implementation with the following code:

let shape = {
  getType () { return this.type; },
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}
Triangle.prototype = shape; // explicitly set the prototype
Triangle.prototype.constructor = Triangle; // must reset the constructor after setting the prototype
shape.getPerimeter = function() {
  return this.a + this.b + this.c;
};
// Triangle.prototype.getPerimeter = function() { // from the Solution ...
//   return this.a + this.b + this.c;
// };

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"
