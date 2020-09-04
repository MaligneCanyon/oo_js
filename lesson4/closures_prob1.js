function makeCounterLogger(initial) {
  return function (final) {
    let incr = initial < final ? 1 : -1;
    for (let value = initial; ; value += incr) {
      console.log(value);
      if (value === final) break;
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2
