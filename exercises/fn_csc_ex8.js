// A stack is a compound data type like an array. The difference between an array and a stack is
// that in an array you can insert and remove elements in any order you want, but a stack has a
// rule whereby you can only add new elements at the end and remove the last inserted element.

// Create a function newStack, that when called returns a stack object with three methods:
// push, pop, and printStack. push takes a value and inserts it at the end of the stack.
// pop removes the last element from the stack. printStack logs each remaining element of
// the stack on its own line.

// Internally, use an array to implement the stack. Make sure that the array is not accessible
// from outside the methods.

function newStack() {
  let arr = [];
  return {
    push (value) {
      arr.push(value);
    },
    pop () {
      return arr.pop();
    },
    printStack () {
      arr.forEach(elem => console.log(elem));
      console.log();
    },
  };
}

let stack = newStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack(); //=> 1,2,3
stack.pop();
stack.push(4);
stack.printStack(); //=> 1,2,4
console.log(stack.arr); // undefined
