const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
  func () {
    return this.firstName + this.lastName;
  },
};

// context (i.e. the value of 'this') outside a fn is the global object,
// where firstName and lastName are undefined
console.log(person.fullName); //=> NaN // undefined + undefined

// context of an obj method is the owning obj
console.log(person.func()); //=> Rick Sanchez
