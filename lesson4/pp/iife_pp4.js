let countdown = function (num) {
  return function () {
    // console.log(num);
    // while (num --> 0) console.log(num);
    // console.log('Done!');

    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
    console.log('Done!');
  }();
};
// convoluted; works w/ lines 2 and 11 commented out (i.e. the IIFE is n/r)
// Note: it's not necessary to pass 'num' to the IIFE (as suggested in the Solution);
// num is an outer-scoped var, which is accessible w/i an inner-scoped fn

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
