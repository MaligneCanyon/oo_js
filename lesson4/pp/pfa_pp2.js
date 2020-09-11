function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function (arg1) {
    return subtract(arg1, n);
  };
}

let sub5 = makeSubN(5);
console.log(sub5(10)); // 5

let sub7 = makeSubN(7);
console.log(sub7(21)); // 14
