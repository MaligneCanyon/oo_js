// function makeGreeter(greeting, name) { // this works
//   return {
//     message: `${greeting} ${name}!`,
//     sayGreetings() {
//       console.log(this.message);
//     },
//   };
// };

function makeGreeter(greeting, name) { // this works too
  let message = `${greeting} ${name}!`;
  return {
    sayGreetings() {
      console.log(message);
    },
  };
};


// let greeter = makeGreeter('Hello', 'Naveed');
// greeter.sayGreetings();
makeGreeter('Hello', 'Naveed').sayGreetings();
