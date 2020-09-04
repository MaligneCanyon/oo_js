function makeMultipleLister(num) {
  return function () {
    for (let value = num; value < 100; value += num) console.log(value);
  };
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91
