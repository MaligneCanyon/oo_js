// function makeGreeter(greeting, name) { // this works
//   return {
//     message: `${greeting} ${name}!`,
//     sayGreetings() {
//       console.log(this.message);
//     },
//   };
// };
// let greeter = makeGreeter('Hello', 'Naveed');
// greeter.sayGreetings();


// function makeGreeter(greeting, name) { // this works too
//   let message = `${greeting} ${name}!`;
//   return {
//     sayGreetings() {
//       console.log(message);
//     },
//   };
// };
// makeGreeter('Hello', 'Naveed').sayGreetings();


const greeter = function () { // this also works
  const name = 'Naveed';
  const greeting = 'Hello';
  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    },
  };
}();
greeter.sayGreetings();
