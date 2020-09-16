let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a); //=> 1
// bar inherits the 'a' property from its prototype
