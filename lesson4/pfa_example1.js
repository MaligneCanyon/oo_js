function add(first, second) {     // primary
  return first + second;
}

// GAP
function makeAddN(addend) {       // generator
  return function(number) {       // applicator
    return add(addend, number);   // primary
  }
}

let add1 = makeAddN(1);           // calls generator
console.log(add1(1));             // calls applicator //=> 2
console.log(add1(41));            //=> 42; equiv to add(1, 41)

let add9 = makeAddN(9);
console.log(add9(1));             //=> 10
console.log(add9(9));             //=> 18
