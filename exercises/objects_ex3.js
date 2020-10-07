function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;
  return keys1.every(key => keys2.includes(key) && obj1[key] === obj2[key]);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo', c: 'bar'}));  // false; keys differ
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo', b: 'cat'}));  // false; values differ
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: 'bar', a: 'foo'}));  // true; order is not impt

// from the Solution,
// A limitation of this function is that it doesn't look for deep equality. In other words, if
// one of the values is an object in both objects, this will return false unless that object is
// identical on both objects.
