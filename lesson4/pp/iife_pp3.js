var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // TypeError: sum is not a fn
// Note: the above line is equiv to 'sum = sum + sum(numbers);'

sum += (function (arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum); //=> 49
