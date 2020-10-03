function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function (m) {
    return subtract(m, n);
  };
}

let sub5 = makeSubN(5);
console.log(sub5(10)); // 5
console.log(sub5(22)); // 17

let sub7 = makeSubN(7);
console.log(sub7(21)); // 14
