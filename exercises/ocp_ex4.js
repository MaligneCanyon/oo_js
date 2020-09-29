let Person = function (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
Person.prototype.eat = () => console.log('Eating');
Person.prototype.communicate = () => console.log('Communicating');
Person.prototype.sleep = () => console.log('Sleeping');
// why doesn't the following work ? because arrow fns don't have a 'this' binding
// Person.prototype.fullName = () => `${this.firstName} ${this.lastName}`;
Person.prototype.fullName = function () { return `${this.firstName} ${this.lastName}`; };

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


// new code begins here
function delegate(methodOwner, methodName, context, ...args) {
  return function () { methodOwner[methodName].call(context, ...args); };
}

function extend(individual, mixin) {
  Object.keys(mixin).forEach(methodName => { // assign the mixin methods to each individual obj
    // pass the method name, not the method itself, to 'delegate'
    individual[methodName] = delegate(mixin, methodName, individual);
  });

  return individual;
}

let professional = { // don't use arrow fns with 'this' (no 'this' context)
  invoice () { console.log(`${this.fullName()} is Billing customer`); },
  payTax  () { console.log(`${this.fullName()} Paying taxes`); },
}
// new code ends here

const doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

console.log(doctor.invoice.toString());
doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(`${this.fullName()} is Asking customer to pay`);
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'