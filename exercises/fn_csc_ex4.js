// using 'apply' ... basically a PFA-style def
function myBind(func, obj) {
  return function (...args) {
    return func.apply(obj, args);
  };
}

// using 'call'
// function myBind(func, obj) {
//   return function (...args) { // rest syntax
//     return func.call(obj, ...args); // spread syntax
//   };
// }

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(myBind(function(number) {
      return `${this.name} ${number}`;
    }, franchise));
  },
};

console.log(franchise.allMovies()); //=>
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]
