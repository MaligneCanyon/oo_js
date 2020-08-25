let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message); // 'Hello from the function scope!'
console.log(message); // 'Hello from the global scope!'

// coincidental (and var shadowing) that the two vars are named 'message';
// i.e. globally-scoped and functionally-scoped 'message' vars are dif entities;
// message refs a primitive value and is passed by value to 'func'
