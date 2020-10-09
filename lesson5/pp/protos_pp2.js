// algo:
// - get the prototype of the obj
// - create a newObj from the prototype
// - for each of the properties in the original obj
//   - copy the property and its value to the newObj
// - rtn the newObj

// function shallowCopy(obj) {
//   let proto = Object.getPrototypeOf(obj);
//   let newObj = Object.create(proto);
//   for (let prop in obj) { // enumerable properties only
//     // if (obj.hasOwnProperty(prop)) {
//     // guard against property names that are reserved keywords or method names
//     if (Object.prototype.hasOwnProperty.call(obj, prop)) { // call the hasOwnProperty *method*
//       newObj[prop] = obj[prop];
//     }
//   }
//   return newObj;
// }

function shallowCopy(obj) {
  let proto = Object.getPrototypeOf(obj);
  let newObj = Object.create(proto);
  let props = Object.getOwnPropertyNames(obj); // enumerable and non-enumerable native properties
  props.forEach(prop => newObj[prop] = obj[prop]);
  return newObj;
}


let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
