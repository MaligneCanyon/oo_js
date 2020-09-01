// We can take this a step further and have an index property for each person. The index would be
// unique for each person, which would let us locate anybody even if they have the same first and
// last name as another. Try implementing this yourself by keeping a variable of the last index
// used, and incrementing it by one each time we add somebody new via the add method.

// search for 'extra'

let me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

let people = {
  index: 0, // extra
  // collection: [me, friend, mother, father], // extra
  collection: [], // use the 'add' method to add people along with a unique index

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
    console.log();
  },

  add: function(person) {
    if (!this.isValidPerson(person)) return;
    this.index++; // extra
    person.index = this.index; // extra
    this.collection.push(person);
  },

  getIndex: function(person) {
    let rtnval = -1;
    this.collection.forEach((peep, ndx) => {
      if (peep.firstName === person.firstName && peep.lastName === person.lastName) {
        rtnval = ndx;
      }
    });

    return rtnval;
  },

  remove: function(person) {
    if (!this.isValidPerson(person)) return;
    let ndx = this.getIndex(person);
    if (ndx !== -1) this.collection.splice(ndx, 1);
  },

  isValidPerson: function(person) {
    return typeof(person.firstName) === 'string' && typeof(person.lastName) === 'string';
  },

  get: function(person) {
    if (!this.isValidPerson(person)) return;
    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (!this.isValidPerson(person)) return;
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.add(me);
people.add(friend);
people.add(mother);
people.add(father);

people.rollCall();
console.log(people.getIndex(friend)); // 1
people.remove(friend);
console.log(people.getIndex(friend)); // -1; gone but not forgotten
people.rollCall();
people.add(friend);
people.rollCall();
console.log(friend);
