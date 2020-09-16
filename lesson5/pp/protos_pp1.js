function getDefiningObject(obj, propKey) {
  do {
    if (!obj) return null;
    if (obj.hasOwnProperty(propKey)) return obj;
    obj = Object.getPrototypeOf(obj);
  } while (true);
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
console.log(getDefiningObject(undefined, 'e'));       // => null
console.log(getDefiningObject('abc', 'e'));           // => null
