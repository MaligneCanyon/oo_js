function makeList() {
  let todos = []; // prevents access to todos outside the fn

  let obj = {
    remove (todo) {
      if (todos.includes(todo)) {
        todos.splice(todos.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      } else console.log(`${todo} was not found.`);
    },

    add (todo) {
      if (todos.includes(todo)) console.log(`${todo} already exists.`);
      else {
        todos.push(todo);
        console.log(`${todo} added!`);
      }
    },

    list () {
      if (todos.length) todos.forEach(todo => console.log(todo));
      else console.log('The list is empty.');
    },

    clear () {
      todos = [];
      console.log(`The list was cleared!`);
    }
  };

  return obj;
}


let list = makeList();

list.add('test');         // adds
list.add('test');         // err
list.list();              // lists
console.log(list.todos);  // undefined
list.remove('testy');     // err
list.remove('test');      // removes
list.add('a');            // adds
list.add('b');            // adds
list.add('c');            // adds
list.clear();             // clears
console.log();

list.list();
// The list is empty.
list.add('make breakfast');
// make breakfast added!
list.add('read book');
// read book added!
list.list();
// make breakfast
// read book
list.remove('make breakfast');
// make breakfast removed!
list.list();
// read book
