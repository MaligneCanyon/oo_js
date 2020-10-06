// prob1
let prot = {};
let foo = Object.create(prot);

// prob2
console.log(Object.getPrototypeOf(foo)); //=> {}; somewhat unexpected and not v.useful
console.log(Object.getPrototypeOf(foo) === prot); //=> true

// prob3
console.log(prot.isPrototypeOf(foo)); //=> true
