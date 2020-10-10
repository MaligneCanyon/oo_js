let Person = function (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
// why doesn't the following work ? because arrow fns don't have a 'this' binding;
// so 'this' is determined by the surrounding lexical scope (the global obj here)
// Person.prototype.fullName = () => `${this.firstName} ${this.lastName}`;
Person.prototype.fullName = function () { return `${this.firstName} ${this.lastName}`; };
Person.prototype.communicate = () => console.log('Communicating');
Person.prototype.eat = () => console.log('Eating');
Person.prototype.sleep = () => console.log('Sleeping');

// let Doctor = function(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }
let Doctor = function(...args) {
  this.specialization = args.pop();
  Person.call(this, ...args);
}
Doctor.prototype = new Person();
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = () => console.log('Diagnosing');

let Professor = function(...args) {
  this.subject = args.pop();
  Person.call(this, ...args);
}
Professor.prototype = new Person();
Professor.prototype.constructor = Professor;
Professor.prototype.teach = () => console.log('Teaching');

let Student = function(...args) {
  this.degree = args.pop();
  Person.call(this, ...args);
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.study = () => console.log('Studying');

let GraduateStudent = function(...args) {
  this.graduateDegree = args.pop();
  Student.call(this, ...args);
}
GraduateStudent.prototype = new Student();
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = () => console.log('Researching');


const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'
// person.diagnose();                      // TypeError

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender',
  'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
console.log(graduateStudent.graduateDegree); // logs 'MS Industrial Engineering'
