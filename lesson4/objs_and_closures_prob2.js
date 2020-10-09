function makeList() {
  let todos = []; // prevents access to todos outside the fn

  return {
    add (todo) {
      if (todos.includes(todo)) console.log(todo + ' already exists.');
      else {
        todos.push(todo);
        console.log(todo + ' added!');
      }
    },

    remove (todo) {
      if (todos.includes(todo)) {
        todos.splice(todos.indexOf(todo), 1);
        console.log(todo + ' removed!');
      } else console.log(todo + ' was not found.');
    },

    list () {
      if (todos.length) todos.forEach(todo => console.log(todo));
      else console.log('The list is empty.');
    },

    clear () {
      todos = [];
      console.log('The list was cleared!');
    },
  };
}


let list = makeList();

list.add('test');         //=> test added!
list.add('test');         //=> test already exists.
list.list();              //=> test
console.log(list.todos);  //=> undefined
list.remove('testy');     //=> testy was not found.
list.remove('test');      //=> test removed!
console.log();

list.add('a');            //=> a added!
list.add('b');            //=> b added!
list.add('c');            //=> c added!
list.clear();             //=> The list was cleared!
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
