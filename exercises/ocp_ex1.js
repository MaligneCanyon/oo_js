Object.prototype.ancestors = function() {
  let arr = [];
  let obj = this;

  while (true) {
    obj = Object.getPrototypeOf(obj);
    if (obj === Object.prototype) {
      arr.push('Object.prototype');
      return arr;
    }
    arr.push(obj.name);
  }
}

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
console.log({}.ancestors());   // returns ['Object.prototype']
