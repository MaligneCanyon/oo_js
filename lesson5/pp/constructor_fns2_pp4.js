let foo = {
  a: 1,
  // begetObject () { // although this appears to work, ...
  //   function ConstructorFn() {}
  //   ConstructorFn.prototype = this;
  //   return new ConstructorFn();
  // },
};

// ... according to the Solution, we need to def the method on Object.prototype
// in order for it to be callable on any obj
Object.prototype.begetObject = function () {
  function ConstructorFn() {}
  ConstructorFn.prototype = this;
  return new ConstructorFn();
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar)); //=> true
