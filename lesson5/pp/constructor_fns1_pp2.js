let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  // this.area = RECTANGLE.area(); // refs and invokes RECTANGLE.area w/ the incorrect context
  // this.perimeter = RECTANGLE.perimeter(); // refs and invokes RECTANGLE.perimeter w/ the incorrect context
  this.area = RECTANGLE.area; // adds the RECTANGLE.area method to the current obj
  this.perimeter = RECTANGLE.perimeter; // adds the RECTANGLE.perimeter method to the current obj
}

let rect1 = new Rectangle(2, 3); // creates a new obj using the constructor fn
// console.log(rect1.area); //=> NaN
// console.log(rect1.perimeter); //=> NaN
console.log(rect1.area()); //=> 6
console.log(rect1.perimeter()); //=> 10


// from the Solution ...
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   // this.area = RECTANGLE.area();
//   // this.perimeter = RECTANGLE.perimeter();

//   // ref the current obj (where width & height are def'd)
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); //=> 6
// console.log(rect1.perimeter); //=> 10
