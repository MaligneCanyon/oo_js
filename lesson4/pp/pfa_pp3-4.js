function multiply(a, b) {
  return a * b;
}

function makePartialFunc(func, n) { // Note the pattern: //    n
  return function(m) {                                   // m
    return func(m, n);                                   // m, n
  };
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500

// the closure created by the makePartialFunc allows it to retain access to
// func and b long after makePartialFunc has finished execution
