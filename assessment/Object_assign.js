let Obj = {
  b () { console.log('hi'); },
  init() {
    this.a = 1;
    return this;
  },
};

let obj1 = Object.create(Obj).init();
console.log('obj1:', obj1);
let obj2 = {};
Object.assign(obj2, obj1);
obj1.b(); // => hi
console.log(Object.getPrototypeOf(obj1) === Obj); // => true
console.log(Object.getPrototypeOf(obj2) === Obj); // => false
// objs created using assign don't automatically have access to the
// source obj's prototype or methods created on that prototype
// obj2.b(); // raises TypeError
console.log();

// method1 // use Object.setPrototypeOf() after using Object.assign()
Object.setPrototypeOf(obj2, Obj); // slow
console.log(Object.getPrototypeOf(obj2) === Obj); // => true
obj2.b(); // => hi
obj2.a = 2;
console.log(obj2.a); // => 2
console.log(obj1.a); // => 1
console.log();

// method2 // use Object.create(Prototype) then Object.assign()
let obj3 = Object.create(Obj);
console.log(Object.getPrototypeOf(obj3) === Obj); // => true
obj3.b(); // => hi
console.log(obj3.a); // => undefined
Object.assign(obj3, obj1);
console.log(obj3.a); // => 1
obj3.a = 3;
console.log(obj3.a); // => 3
console.log(obj1.a); // => 1
