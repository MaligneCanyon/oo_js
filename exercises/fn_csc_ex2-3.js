// the inner fn passed to map has lost exec context; repair by saving 'this'
// to a var and using the var w/i the inner fn to ref the correct context

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       // return `${this.name} ${number}`;
//       return `${self.name} ${number}`;
//     });
//   },
// };

// alt version1:
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(number => {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// alt version2:
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }.bind(franchise));
//   },
// };

// alt version3:
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  },
};

console.log(franchise.allMovies()); //=>
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

// from the Solution ...
// "take advantage of the fact that a variable defined in an outer scope is
// available to an inner scope by assigning a local variable 'self' to 'this'
// within the allMovies method and then referencing 'self' within the anonymous
// callback function"
