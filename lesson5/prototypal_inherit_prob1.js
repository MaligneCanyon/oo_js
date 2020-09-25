let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a); // => 1
// bar inherits the 'a' property from its prototype;
// properties created on an obj's prototype are avail to the obj;
// method lookup on the prototypal chain occurs at runtime
