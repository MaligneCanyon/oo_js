let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
  console.log();
}

function makeMathRollCall() {
  return function (arg2) {
    let arg1 = Object.keys(subjects).filter(key => {
      return subjects[key].every((name, ndx) => name === arg2[ndx]);
    })[0]; // evals to the subject name that matches the list of students given by arg2
    return rollCall(arg1, arg2);
  };
}


let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan

let makeSubjRollCall = makeMathRollCall; // not just math ... rename the generator fn
let subjRollCall = makeSubjRollCall(); // more generally ... rename the applicator
subjRollCall(subjects['English']);
// => English:
// => Bob
// => Tyrone
// => Lizzy
