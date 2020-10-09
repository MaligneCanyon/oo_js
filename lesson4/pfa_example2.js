function add(first, second) { // defs primary #1
  return first + second;
}

function repeat(count, string) { // defs primary #2
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += string;
  }

  return result;
}

// pass the primary fn to the gen, if the gen is going to be used w/ dif primary fns;
// otherwise, directly ref the name of the primary fn below (instead of using 'primary')
function partial(primary, arg1) { // defs generator
  return function(arg2) {         // defs applicator
    return primary(arg1, arg2);   // calls primary
  };
}


let add1 = partial(add, 1); // calls generator
console.log(add1(2)); // calls applicator
// = 3
console.log(add1(6));
// = 7

let threeTimes = partial(repeat, 3);
console.log(threeTimes('Hello'));
// = HelloHelloHello
console.log(threeTimes('!'));
// = !!!
