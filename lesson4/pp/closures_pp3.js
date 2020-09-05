function later(func, arg) {
  return function () {
    func(arg);
  }
}

let logWarning = later(console.log, 'The system is shutting down!');
logWarning();
// The system is shutting down!
