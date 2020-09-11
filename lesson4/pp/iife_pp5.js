(function foo() {
  console.log('Bar');
})();

foo(); //=> ReferenceError: foo is not def'd

// the fn is inaccessible; an IIFE creates a scope and the fn (even a named one)
// is not accessible outside that scope
