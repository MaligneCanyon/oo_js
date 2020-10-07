// function delegate(methodOwner, methodName, ...args) {
function delegate(obj, method, ...args) {
  // return function () { obj[method].call(obj, ...args); };
  return function () { obj[method].apply(obj, args); };
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };
baz.qux();   // logs 'changed'
