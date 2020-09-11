// see file ../exercises/objects_ex5.js

// #1 Make the list students private.
// #2 Make the constraint for allowed values for years a private variable.
// #3 Make the getCourse function accessible in the addGrade method also.

function createStudent(name, year, courses = []) {
  return {
    name,
    year,
    courses,
    info() {
      console.log(`${name} is a ${year} year student`);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      console.log(this.courses);
    },
    addNote(code, text) {
      let course = this.findCourse(code);
      if (Object.keys(course).length) { // the course exists
        if (Object.keys(course).includes('note')) course.note += '; ' + text;
        else course.note = `${course.name}: ${text}`;
      } else console.log(`Course code ${code} not found`);
    },
    findCourse(courseCode) {
      let result = this.courses.filter(course => course.code === courseCode);
      return result.length === 1 ? result[0] : {};
    },
    viewNotes() {
      let notes = this.courses.filter(course => course.note).map(course => course.note);
      // notes.forEach(console.log);
      notes.forEach(note => console.log(note));
    },
    updateNote(code, text) {
      let course = this.findCourse(code);
      if (Object.keys(course).length) { // the course exists
        course.note = `${course.name}: ${text}`;
      } else console.log(`Course code ${code} not found`);
    },
  };
}

// addStudent: Adds a student by creating a new student and adding the student to a collection
//   of students. The method adds a constraint that the year can only be any of the following
//   values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid
//   otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade,
//   it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with
//   grades are part of the course report.

// let school = {
let school = (function () { // #1
  let students = []; // #1
  const validYears = ['1st', '2nd', '3rd', '4th', '5th']; // #2

  return { // #1
    // students: [],
    addStudent(data) {
      // if (/1st|2nd|3rd|4th|5th/.test(data.year)) {
      // if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) { // from the Solution to objects_ex5.js
      if (validYears.includes(data.year)) { // #2
        let student = createStudent(data.name, data.year, data.courses);
        // console.log(student);
        // this.students.push(student);
        students.push(student); // #1
        return student;
      } else {
        console.log(`'${data.year}' is an invalid year`);
        return data; // to allow further err msgs
      }
    },

    isStudent(student) {
      // return this.students.map(({name}) => name).indexOf(student.name) > -1;
      return students.map(({name}) => name).indexOf(student.name) > -1; // #1
    },

    displayStudentErr(student) {
      console.log(`'${student.name}' is an invalid student name`);
    },

    enrollStudent(student, course) {
      if (this.isStudent(student)) student.addCourse(course);
      else this.displayStudentErr(student);
    },

    displayCourses(student) {
      if (this.isStudent(student)) student.listCourses();
      else this.displayStudentErr(student);
    },

    addGrade(student, courseName, grade) {
      if (this.isStudent(student)) { // student exists
        // let courseNdx = student.courses.map(({name}) => name).indexOf(courseName); // compact syntax
        // if (courseNdx > -1) { // student is enrolled
          // student.courses[courseNdx].grade = grade;
        let course = this.getCourse(student, courseName); // #3
        if (course) { // student is enrolled // #3
          course.grade = grade; // #3
        } else console.log(`${student.name} is not enrolled in ${courseName}`);
      } else this.displayStudentErr(student);
    },

    getReportCard(student) {
      console.log();
      console.log(`// getReportCard output for '${student.name}'`);

      if (this.isStudent(student)) { // student exists
        student.courses.forEach(course => {
          console.log(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
        });
      } else this.displayStudentErr(student);
    },

    // getCourseNdx(courseName, student) {
    //   return student.courses.map(course => course.name).indexOf(courseName);
    // },
    getCourse(student, courseName) { // #3
      return student.courses.filter(({name}) => name === courseName)[0];
    },

    courseReport(courseName) {
      console.log();
      console.log(`// courseReport output for '${courseName}'`);
      // let gradedStudents = this.students.filter(student => {
      let gradedStudents = students.filter(student => { // #1
        // let courseNdx = this.getCourseNdx(courseName, student);
        // return courseNdx > -1 && Object.keys(student.courses[courseNdx]).includes('grade');
        let course = this.getCourse(student, courseName); // #3
        return course && Object.keys(course).includes('grade'); // #3
      });

      if (gradedStudents.length) {
        console.log(`=${courseName} Grades=`);
        let courseAvg = gradedStudents.reduce((accum, student) => {
          // let courseNdx = this.getCourseNdx(courseName, student);
          // let grade = student.courses[courseNdx].grade;
          let grade = this.getCourse(student, courseName).grade; // #3
          console.log(`${student.name}: ${grade}`);
          return accum + grade;
        }, 0) / gradedStudents.length;
        console.log(`---`);
        console.log(`Course Average: ${courseAvg.toFixed(0)}`);
      } else console.log(undefined);
    },
  } // #1
// };
})(); // #1


let foo = school.addStudent({
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
});

let poo = school.addStudent({
  name: 'poo',
  year: '6th',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
  ],
}); // should gen err msg //=> '6th' is an invalid year

console.log(school.students); // should now rtn 'undefined' since the property no longer exists

school.enrollStudent(foo, { name: 'Physical Education', code: 601, });
school.displayCourses(foo);
school.enrollStudent(poo, { name: 'Physical Education', code: 601, }); // should gen err msg
school.addGrade(foo, 'Physics', 84);
school.addGrade(foo, 'Sonic Foosball', 99); // should gen err msg
school.addGrade(poo, 'Sonic Foosball', 99); // should gen err msg
school.displayCourses(foo);
school.displayCourses(poo); // should gen err msg

// getReportCard output
school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

let bar = school.addStudent({
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
});

let qux = school.addStudent({
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
});

// courseReport output
school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined
