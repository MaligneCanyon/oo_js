let me = {
  firstName: 'Jane',
  lastName: 'Doe',
};
console.log(me); //=> { firstName: 'Jane', lastName: 'Doe' }

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
  collection: [me, friend, mother, father],

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  // since 'people' is our context, we don't need to pass it as an arg to 'rollCall'
  // rollCall: function() {
  //   people.collection.forEach(people.fullName);
  // },

  // can use 'this' to access a fn's context w/i a parent obj
  // rollCall method can be called w/ any var that references the parent obj
  rollCall: function() {
    this.collection.forEach(this.fullName);
    console.log();
  },

  add: function(person) {
    if (!this.isValidPerson(person)) return;
    this.collection.push(person);
  },

  getIndex: function(person) {
    // return this.collection.indexOf(person); // won't work if person is a dif obj

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

people.rollCall();
let dog = {
  firstName: 'Dusty',
  lastName: 'Dog',
};
people.add(dog);
people.rollCall();

console.log(people.getIndex(dog)); // 4
console.log(people.getIndex({ firstName: 'Dusty', lastName: 'Dog', })); // 4; but dif objs
people.remove(dog);
people.rollCall();

let cat = {
  firstName: 'Grey',
  lastName: 'Cat',
};
console.log(people.getIndex(cat)); // -1
people.remove(cat); // no effect
people.rollCall();
console.log(people.getIndex(friend)); // 1
people.remove(friend);
console.log(people.getIndex(friend)); // -1; gone but not forgotten
people.rollCall();

let unknown = {};
console.log(people.getIndex(unknown)); // -1
people.remove(unknown); // no effect
people.rollCall();

console.log(me);
console.log(people.get(me)); // pointless; rtns 'me'
