// A stack is a compound data type like an array. The difference between an array and a stack is
// that in an array you can insert and remove elements in any order you want, but a stack has a
// rule whereby you can only add new elements at the end and remove the last inserted element.

function newStack() {
  stack = [];

  return {
    push (value) {
      return stack.push(value);
    },
    pop () {
      return stack.pop();
    },
    printStack () {
      console.log(stack); // for testing
      stack.forEach(value => console.log(value));
    },
  };
}

let stacked = newStack();
stacked.push(1);
stacked.push(2);
stacked.push(3);
stacked.pop();
stacked.push(4);
stacked.printStack(); //=> 1,2,4
console.log(stacked.stack); // undefined
