function makeList() {
  let todos = [];
  return function (todo) {
    if (todo === undefined) {
      if (todos.length) todos.forEach(todo => console.log(todo));
      else console.log('The list is empty.');
    } else if (todos.includes(todo)) {
      todos.splice(todos.indexOf(todo), 1);
      console.log(todo + ' removed!');
    } else {
      todos.push(todo);
      console.log(todo + ' added!');
    }
  };
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book
