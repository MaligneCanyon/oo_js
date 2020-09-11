function multiply(a, b) {
  return a * b;
}

function makePartialFunc(func, argB) {
  return function (argA) {
    return func(argA, argB);
  }
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500

// the closure created by the makePartialFunc allows it to retain access to
// func and b long after makePartialFunc has finished execution
