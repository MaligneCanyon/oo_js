function delegate(methodOwner, methodName, ...args) {
  return function () { methodOwner[methodName].call(methodOwner, ...args); };
  // return () => methodOwner[methodName].apply(methodOwner, args); // alt form, from the Solution
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
