let generateStudentId = function() {
  let studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
}();

console.log(generateStudentId()); //=> 1
console.log(generateStudentId()); //=> 2
console.log(generateStudentId()); //=> 3
