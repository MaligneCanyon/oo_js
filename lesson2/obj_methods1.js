// we can assign properties when we instantiate an obj
// let me = {
//   firstName: 'Jane',
//   lastName: 'Doe',
// };

// OR we can start w/ an empty obj then add properties
let me = {};
me.firstName = 'Jane';
me.lastName = 'Doe';

console.log(me); //=> { firstName: 'Jane', lastName: 'Doe' }

// log a person's full name
// accept a person obj as an arg
function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}
fullName(me); //=> 'Jane Doe'

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};
fullName(friend); //=> 'John Smith'

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};
fullName(mother); //=> 'Amber Doe'

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};
fullName(father); //=> 'Shane Doe'

let people = [];
people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

function rollCall(collection) {
  // for (let i = 0, length = collection.length; i < length; i++) {
  //   fullName(collection[i]);
  // }

  // collection.forEach(item => fullName(item));
  collection.forEach(fullName);
}
rollCall(people);
