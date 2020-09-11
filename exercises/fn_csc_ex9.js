function makeGreeter(greeting, name) {
  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    },
  };
};

// makeGreeter('Hello', 'Naveed').sayGreetings();
let greeter = makeGreeter('Hello', 'Naveed');
greeter.sayGreetings();
