let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a); //=> 2; overrides the prototype obj's property value
console.log(foo.a); //=> 1

// Note that w/ 'bar.a = 2;' commented out,
// console.log(bar.a); //=> 1
