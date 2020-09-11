function makeCounterLogger(initial) {
  return function (final) {
    let delta = initial < final ? 1 : -1;
    for (let value = initial; ; value += delta) {
      console.log(value);
      if (value === final) break;
    }
  };
}

let countlog5 = makeCounterLogger(5);
countlog5(8);
// 5
// 6
// 7
// 8
countlog5(2);
// 5
// 4
// 3
// 2
let countlog22 = makeCounterLogger(22);
countlog22(20);
// 22
// 21
// 20
countlog5(4); // still counts from 5
// 5
// 4
