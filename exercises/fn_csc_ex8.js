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
      stack.forEach(value => console.log(value));
    },
  };
}

let stacked = newStack();
console.log(stacked.push(1));
console.log(stacked.push(2));
console.log(stacked.push(3));
console.log(stacked.pop());
console.log(stacked.push(4));
stacked.printStack();
console.log(stacked.stack); // undefined
