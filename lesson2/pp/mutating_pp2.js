let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message); // 'Greetings from the function scope!'
}

func(myObj);

console.log(myObj.message); // 'Greetings from the function scope!'

// demonstates that objs are passed by ref;
// assignment of the message property on line4 mutates the obj
