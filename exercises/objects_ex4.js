// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for
//   its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note
//   already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the
//   new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
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

let foo = createStudent('Foo', '1st');
foo.info();
// = Foo is a 1st year student

foo.listCourses();
// = []
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// = [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(666, 'Evil course');
foo.viewNotes(); // = Course code 666 not found
foo.addNote(101, 'Fun course');
foo.viewNotes(); // = Math: Fun Course
foo.addNote(101, 'Remember to study for algebra');
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// = Math: Fun Course; Remember to study for algebra
// = Advanced Math: Difficult Subject

foo.updateNote(101, 'Fun course');
foo.viewNotes();
// = Math: Fun Course
// = Advanced Math: Difficult Subject

foo.updateNote(69, 'Another fun course');
