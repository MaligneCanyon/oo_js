// the code below won't execute w/o the outer parentheses;
// in its current form, it is interpreted as a fn statement (which reqs a fn name)

// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})(); // => Sometimes, syntax isn't intuitive!
