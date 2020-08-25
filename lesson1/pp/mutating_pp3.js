let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(); // 'Hello from the function scope!'
console.log(message); // 'Hello from the function scope!'

// 'message' is a globally-scoped var