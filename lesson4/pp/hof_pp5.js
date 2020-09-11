// function makeListTransformer(func) {
//   return function (value) {
//     if (Array.isArray(value)) {
//       return value.map(func);
//     } else {
//       return func(value);
//     }
//   };
// }
// console.log(timesTwo(3)); // 6


function makeListTransformer(func) {
  return function (arr) {
    return arr.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
