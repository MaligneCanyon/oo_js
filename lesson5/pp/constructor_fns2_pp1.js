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

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(t.constructor === Triangle);    // true
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"
