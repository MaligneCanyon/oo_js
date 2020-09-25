function User(first, last) {
  let self = this === global ? Object.create(User.prototype) : this;
  // self.name = (function () { return first + ' ' + last; })(); // convoluted
  self.name = first + ' ' + last;
  return self;
}

// from the Solution ...
// function User(first, last){
//   if (!(this instanceof User)) return new User(first, last);
//   this.name = first + ' ' + last;
// }

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
