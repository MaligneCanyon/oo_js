// the declaration of 'function sum' is hoisted to the top of the code;
// the declaration of 'var sum' is hoisted, seen as duplicate, and ignored;
// the assignment of sum to 0 illustrates dynamic typing; sum is no longer a fn,
// so when the code attempts to invoke sum as a fn in 'sum += sum(numbers)', an err is raised

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

sum += (function (arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum); //=> 49
