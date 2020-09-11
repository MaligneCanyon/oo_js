// prob1 ...
function greet(greeting, name) {
  // console.log(greeting[0].toUpperCase() + greeting.slice(1) + ', ' + name + '!');
  console.log(`${greeting[0].toUpperCase() + greeting.slice(1)}, ${name}!`);
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!


// prob2 ...
function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!
