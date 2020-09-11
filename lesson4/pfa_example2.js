function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += string;
  }

  return result;
}

function partial(primary, arg1) { // *** impt ***
  return function(arg2) {
    return primary(arg1, arg2);
  };
}


let add1 = partial(add, 1);
console.log(add1(2));
// = 3
console.log(add1(6));
// = 7

let threeTimes = partial(repeat, 3);
console.log(threeTimes('Hello'));
// = HelloHelloHello
console.log(threeTimes('!'));
// = !!!
