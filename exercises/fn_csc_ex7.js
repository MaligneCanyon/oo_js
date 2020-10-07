function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)
  };
}

const counter = makeCounter();
counter(); //=> 1

// after counter() runs, the value of 'count' is 2;
// the current value of 'count' cannot be GC'd;
// for instance, we could call counter() again:
// counter() needs to retain access to the count var that makeCounter closes over;
// however, the initial value (i.e. '1') assigned to count can be GC'd
counter(); //=> 2
