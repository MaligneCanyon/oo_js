function createStudent(name, year, courses = []) {
  return {
    name,
    year,
    courses,
    getCourse(courseCode) {
      let result = this.courses.filter(course => course.code === courseCode);
      return result.length === 1 ? result[0] : null;
    },
    info () { console.log(`${name} is a ${year} year student`)},
    addCourse (course) { this.courses.push(course); },
    listCourses () { console.log(this.courses); },
    addNote(code, text) {
      let course = this.getCourse(code);
      if (course) { // the course exists
        if (Object.keys(course).includes('note')) course.note += '; ' + text;
        else course.note = `${course.name}: ${text}`;
      } else console.log(`Course code ${code} not found`);
    },
    viewNotes() {
      // this.courses.filter(course => course.note).forEach(course => console.log(course.note));
      this.courses.forEach(course => {
        if (course.note) console.log(course.note);
      });
    },
    updateNote(code, text) {
      let course = this.getCourse(code);
      if (course) { // the course exists
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

// The key to the enrollStudent, addGrade, and getReportCard method is the use of the student
// object as a parameter. With the student object, the three methods just use the methods and
// properties of the object to update the information on the student object. Although not passed
// as an argument, the key also for the courseReport method is using the methods on the student
// object and then using list processing techniques to convert the list of students to the
// appropriate data needed to log the scores and average for a course.

let school = { // could use a createSchool Factory Fn instead ...
  students: [],

  isStudent(student) {
    return this.students.map(({name}) => name).indexOf(student.name) > -1;
  },

  displayStudentErr(student) {
    console.log(`'${student.name}' is an invalid student`);
  },

  displayCourses(student) {
    if (this.isStudent(student)) student.listCourses();
    else this.displayStudentErr(student);
  },

  getCourseNdx(student, courseName) {
    return student.courses.map(({name}) => name).indexOf(courseName); // concise syntax
  },

  addStudent(data) {
    if (!this.isStudent(data) && /\b(1st|2nd|3rd|(4|5)th)\b/.test(data.year)) {
      let student = createStudent(data.name, data.year, data.courses);
      this.students.push(student);
      return student;
    } else {
      this.displayStudentErr(data);
      return data; // to allow further err msgs and prevent raising of an exception
    }
  },

  enrollStudent(student, course) {
    if (this.isStudent(student)) student.addCourse(course);
    else this.displayStudentErr(student);
  },

  addGrade(student, courseName, grade) {
    if (this.isStudent(student)) { // student exists
      let courseNdx = this.getCourseNdx(student, courseName);
      if (courseNdx > -1) { // student is enrolled
        student.courses[courseNdx].grade = grade;
      } else console.log(`${student.name} is not enrolled in ${courseName}`);
    } else this.displayStudentErr(student);
  },
  // from the Solution ...
  // addGrade(student, courseName, grade) {
  //   const course = student.listCourses().filter(({name}) => name === courseName)[0];
  //   if (course) course.grade = grade;
  // },

  getReportCard(student) {
    console.log();
    console.log(`// getReportCard output for '${student.name}'`);
    if (this.isStudent(student)) { // student exists
      student.courses.forEach(course => {
        console.log(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
      });
    } else this.displayStudentErr(student);
  },

  courseReport(courseName) {
    console.log();
    console.log(`// courseReport output for '${courseName}'`);
    let gradedStudents = this.students.filter(student => {
      let courseNdx = this.getCourseNdx(student, courseName);
      return courseNdx > -1 && Object.keys(student.courses[courseNdx]).includes('grade');
    });

    if (gradedStudents.length) {
      console.log(`=${courseName} Grades=`);
      let courseAvg = gradedStudents.reduce((accum, student) => {
        let courseNdx = this.getCourseNdx(student, courseName);
        let grade = student.courses[courseNdx].grade;
        console.log(`${student.name}: ${grade}`);
        return accum + grade;
      }, 0) / gradedStudents.length;
      console.log(`---`);
      console.log(`Course Average: ${courseAvg.toFixed(0)}`);
    } else console.log(undefined);
  },
};


let foo = school.addStudent({
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
});

let foo2 = school.addStudent({
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}); //=> 'foo' is an invalid student // duplicate

let poo = school.addStudent({
  name: 'poo',
  year: '33rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
  ],
}); //=> 'poo' is an invalid student // invalid year

console.log(school.students); // should only contain foo

school.enrollStudent(foo, { name: 'Physical Education', code: 601, });
school.displayCourses(foo);
school.enrollStudent(poo, { name: 'Physical Education', code: 601, }); // should gen err msg
// school.addGrade(foo, 'Physics', 84);
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
