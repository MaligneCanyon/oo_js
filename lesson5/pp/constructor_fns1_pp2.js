let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   // this.area = RECTANGLE.area(); // refs and invokes (in error) RECTANGLE.area
//   // this.perimeter = RECTANGLE.perimeter(); // refs and invokes (in error) RECTANGLE.perimeter
//   this.area = RECTANGLE.area;
//   this.perimeter = RECTANGLE.perimeter;
// }

// let rect1 = new Rectangle(2, 3); // creates a new obj using the constructor fn
// // console.log(rect1.area); //=> NaN
// // console.log(rect1.perimeter); //=> NaN
// console.log(rect1.area()); //=> 6
// console.log(rect1.perimeter()); //=> 10


// from the Solution ...
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  // this.area = RECTANGLE.area();
  // this.perimeter = RECTANGLE.perimeter();
  this.area = RECTANGLE.area.call(this); // refs the current obj (where width & height are def'd)
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area); //=> 6
console.log(rect1.perimeter); //=> 10
