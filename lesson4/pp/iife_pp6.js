let countdown = function (num) {
  return (function logger() {
    console.log(num);
    if (num === 0) {
      console.log('Done!');
      return;
    }
    logger(--num); // recursion
  })();
};

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!
