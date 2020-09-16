// function extend(destination) {
//   Object.assign(destination, ...Array.from(arguments));
//   // console.log(destination);
//   return destination;
// }
function extend(destination) {
  Array.from(arguments).forEach(obj => {
    let props = Object.getOwnPropertyNames(obj);
    props.forEach(prop => destination[prop] = obj[prop]);
  });
  // console.log(destination);
  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
