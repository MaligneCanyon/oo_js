// R<ead the following code carefully. Will the JavaScript garbage collection mechanism garbage
// collect the variable count after the function counter is run on line 10?

function makeCounter() {
  let count = 1;

  return () => { // arrow fn, but so what ?
    console.log(count++)
  };
}

const counter = makeCounter();
counter(); //=> 1

// no, 'count' cannot be GC'd;
// for instance, we could call counter() again:
// counter() needs to retain access to the count var that makeCounter closes over
counter(); //=> 2
