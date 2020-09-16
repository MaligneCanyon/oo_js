// Write a constructor function that can be used with or without the new operator,
// and return the same result in either form. Use the code below to check your solution:

// function User(first, last) {
//   let self = this === global ? {} : this;
//   self.name = (function () { return first + ' ' + last; })();
//   return self;
// }
// console.log(Object.getPrototypeOf(user1)); // => User {}
// console.log(Object.getPrototypeOf(user2)); // => {} ... not quite the same
// console.log(user1); // => User { name: John Doe }
// console.log(user2); // => { name: John Doe } ... not quite the same

// from the Solution ...
function User(first, last){
  if (!(this instanceof User)) return new User(first, last);
  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
console.log(Object.getPrototypeOf(user1)); // => User {}
console.log(Object.getPrototypeOf(user2)); // => User {}
console.log(user1); // => User { name: John Doe }
console.log(user2); // => User { name: John Doe }
