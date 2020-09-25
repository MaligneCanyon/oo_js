function createObject(obj) {
  function ConstructorFn() {}
  ConstructorFn.prototype = obj;
  return new ConstructorFn();
}
// Note: convention is to use 'F' for the ConstructorFn name

// alt, from the Solution ...
function createObject(obj) {
  return Object.setPrototypeOf({}, obj);
}


let foo = {
  a: 1,
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar)); //=> true
