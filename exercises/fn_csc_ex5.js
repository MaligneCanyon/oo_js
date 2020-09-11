// using 'apply'
function myBind(func, obj, ...someArgs) {
  return function (...moreArgs) {
    let args = someArgs.concat(moreArgs);
    return func.apply(obj, args);
  };
}


function addNumbers(a, b) { return a + b; };
const addFive = myBind(addNumbers, null, 5);
console.log(addFive(10)); // 15
