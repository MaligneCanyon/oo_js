function neww(constructor, args) {
  let newObj = Object.create(constructor.prototype); // 1. a new obj is created
  let constructorObj = constructor.apply(newObj, args); // 3. the code in the fn is exec'd
  // 4. the new obj is rtn'd if the constructor doesn't explicitly rtn an obj
  return typeof constructorObj !== 'object' ? newObj : constructorObj;

  // // from the Solution ...
  // let object = Object.create(constructor.prototype);
  // let result = constructor.apply(object, args);
  // return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
console.log(john); //=> Person { firstName: 'John', lastName: 'Doe' }
john.greeting(); //=> Hello, John Doe
console.log(john.constructor); //=> [Function: Person]
console.log(john.constructor.toString()); //=> function Person(firstName, lastName) {...}
