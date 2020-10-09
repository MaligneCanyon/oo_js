function add(first, second) {     // defs primary
  return first + second;
}

// GAP
function makeAddN(addend) {       // defs generator([primary,] arg1)
  return function(number) {       // defs applicator(arg2)
    return add(addend, number);   // calls primary(arg1,arg2)
  }
}

let add1 = makeAddN(1);           // calls generator; applicator = generator([primary,] arg1)
console.log(add1(1));             // calls applicator(arg2) //=> 2
console.log(add1(41));            //=> 42; equiv to add(1, 41)

let add9 = makeAddN(9);
console.log(add9(1));             //=> 10
console.log(add9(9));             //=> 18
