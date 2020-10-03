function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus = ready.status;
console.log(systemStatus); // undefined
console.log(status); // ReferenceError
// 'status' is private data and is inaccessible outside the closure
// 'status' is a fn'ly-scoped local var w/i 'startup' and is inaccessible in the outer scope
