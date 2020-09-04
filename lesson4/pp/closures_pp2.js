let total = 0;
function add(incr) {
  total += incr;
  console.log(total);
}
function subtract(incr) {
  add(-incr);
}

add(1);
// 1)
add(42);
// 43
subtract(39);
// 4
add(6);
// 10
