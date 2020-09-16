let prot = {};
let foo = Object.create(prot);

console.log(prot.isPrototypeOf(foo)); //=> true
// we created obj foo w/ obj prot as its prototype

console.log(Object.prototype.isPrototypeOf(foo)); //=> true
// Object.prototype is the ultimate prototype of any obj (a result of prototype chaining)