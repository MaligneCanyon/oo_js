const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this,
  fullName: this.firstName + this.lastName,
  func () {
    return this.firstName + this.lastName;
  },
};

// context of a const (the 'person' obj) is the global object,
// where firstName and lastName are undefined
console.log(person.fullName); //=> NaN

// context of an obj method is the owning obj
console.log(person.func()); //=> Rick Sanchez