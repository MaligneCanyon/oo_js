let countdown = function (num) {
  return (function () {
    console.log(num);
    while (num --> 0) console.log(num);
    console.log('Done!');
  })();
};
// convoluted; works w/ line2 and line6 commented out (i.e. the IIFE is n/r)
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
