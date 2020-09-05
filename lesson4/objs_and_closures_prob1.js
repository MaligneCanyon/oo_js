// based on the Solution ...
function makeList() {
  let obj = {
    todos: [], // makes the todos list a property of the obj (accessible outside the fn)

    remove (todo) {
      if (this.todos.includes(todo)) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      } else console.log(`${todo} was not found.`);
    },

    add (todo) {
      if (this.todos.includes(todo)) console.log(`${todo} already exists.`);
      else {
        this.todos.push(todo);
        console.log(`${todo} added!`);
      }
    },

    list () {
      if (this.todos.length) this.todos.forEach(todo => console.log(todo));
      else console.log('The list is empty.');
    },
  };

  return obj;
}


let list = makeList();

list.add('test');         // adds
list.add('test');         // err
list.list();              // lists
console.log(list.todos);  // ['test']
list.remove('testy');     // err
list.remove('test');      // removes
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
