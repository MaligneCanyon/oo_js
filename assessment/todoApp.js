"use strict";

let Todo = {
  init(todoData, id) {
    this.id = id;
    this.title = todoData.title;
    this.month = todoData.month;
    this.year = todoData.year;
    this.description = todoData.description;
    this.completed = 'false';
    return this;
  },

  isWithinMonthYear(month, year) {
    return this.month === month && this.year === year;
  },
};

let makeTodoList = function () {
  let todos = [];
  let id = 0;

  function todoNdx(id) {
    for (let ndx = 0; ndx < todos.length; ndx++) {
      if (todos[ndx].id === id) return ndx;
    }
    todoErrMsg(-1);
    return -1;
  }

  function todoErrMsg(code) {
    let msg;
    switch (code) {
      case -1:
        msg = 'Todo not found';
        break;
      case -2:
        msg = 'Invalid todo object';
        break;
      case -3:
        msg = 'Invalid todo property name';
        break;
      case -4:
        msg = 'Invalid todo property datatype';
        break;
      case -5:
        msg = 'Invalid todo month';
        break;
      case -6:
        msg = 'Invalid todo year';
        break;
      default:
        msg = 'Unknown error';
    };

    console.log(msg);
  }

  function invalidTodo(todo) {
    function invalidObject(obj) {
      return (obj && typeof(obj) === 'object') ? 0 : -2;
    }

    function invalidPropertyName(obj) {
      const validKeys = ['title', 'month', 'year', 'description', 'completed'];
      let keys = Object.getOwnPropertyNames(obj);
      return keys.every(key => validKeys.includes(key)) ? 0 : -3;
    }

    function invalidDataType(obj) {
      let keys = Object.getOwnPropertyNames(obj);
      return keys.every(key => typeof(obj[key]) === 'string') ? 0 : -4;
    }

    function invalidMonth(obj) {
      const minMonth = 1;
      const maxMonth = 12;
      return Object.getOwnPropertyNames(obj).includes('month') &&
             obj.month !== '' && (Number(obj.month) < minMonth ||
             Number(obj.month) > maxMonth) ? -5 : 0;
    }

    function invalidYear(obj) {
      const minYear = 1900;
      const maxYear = 2100;
      return Object.getOwnPropertyNames(obj).includes('year') &&
             obj.year !== '' && (Number(obj.year) < minYear ||
             Number(obj.year) > maxYear) ? -6 : 0;
    }

    return invalidObject(todo) || invalidPropertyName(todo) || invalidDataType(todo) ||
           invalidMonth(todo) || invalidYear(todo);
  }

  return {
    addTodo (todoData) {
      let code = invalidTodo(todoData);
      if (code) todoErrMsg(code);
      else todos.push(Object.create(Todo).init(todoData, ++id));
    },

    removeTodo (id) {
      let ndx = todoNdx(id);
      if (ndx !== -1) return todos.splice(ndx, 1);
    },

    getTodo (id) {
      let ndx = todoNdx(id);
      if (ndx !== -1) return Object.assign({}, todos[ndx]); // return a clone
    },

    updateTodo (id, properties) {
      let code;
      let ndx = todoNdx(id);
      if (ndx !== -1) {
        code = invalidTodo(properties);
        if (code) todoErrMsg(code); // we could still update the remaining valid properties ...
        else Object.assign(todos[ndx], properties);
      }
    },

    init (todoData) {
      if (Array.isArray(todoData)) todoData.forEach(this.addTodo);
      else this.addTodo(todoData);
    },

    getTodos () {
      return todos;
    },
  };
};


// init() with todo data for single object
var todoData = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};
var todoData0 = {
  title: 'Study',
  month: '10',
  year: '2020',
  description: 'Study for assessment',
};
var todoData5 = 'invalid'; // invalid datatype
var todoData6 = { // invalid key
  id: '123',
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};
var todoData7 = { // invalid datatype
  title: 'Buy Milk',
  month: 1,
  year: '2017',
  description: 'Milk for baby',
};
var todoData8 = { // invalid month
  title: 'Buy Milk',
  month: '0',
  year: '2017',
  description: 'Milk for baby',
};
var todoData9 = { // invalid month
  title: 'Buy Milk',
  month: '13',
  year: '2017',
  description: 'Milk for baby',
};
var todoData10 = { // invalid year
  title: 'Buy Milk',
  month: '1',
  year: '1817',
  description: 'Milk for baby',
};
var todoData11 = { // invalid year
  title: 'Buy Milk',
  month: '1',
  year: '2117',
  description: 'Milk for baby',
};

let todoListObj = makeTodoList();
todoListObj.init(todoData);          // valid todo
console.log(todoListObj.getTodos()); // logged array contains the todoData obj
todoListObj.init(todoData5);         // => Invalid todo object
console.log(todoListObj.getTodos()); // logged array only contains the todoData obj
todoListObj.init(todoData6);         // => Invalid todo property name
console.log(todoListObj.getTodos()); // logged array only contains the todoData obj
todoListObj.init(todoData7);         // => Invalid todo property datatype
console.log(todoListObj.getTodos()); // logged array only contains the todoData obj
todoListObj.init(todoData8);         // => Invalid todo month
console.log(todoListObj.getTodos()); // logged array only contains the todoData obj
todoListObj.init(todoData9);         // => Invalid todo month
console.log(todoListObj.getTodos()); // logged array only contains the todoData obj
todoListObj.init(todoData10);        // => Invalid todo year
console.log(todoListObj.getTodos()); // logged array only contains the todoData obj
todoListObj.init(todoData11);        // => Invalid todo year
console.log(todoListObj.getTodos()); // logged array only contains the todoData obj


// init() with todo set
var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

var todoSet = [todoData1, todoData2, todoData3, todoData4];
var todoSet1 = [todoData1, todoData2, todoData5, todoData4]; // invalid data in dataset

todoListObj = makeTodoList();
todoListObj.init(todoSet);
console.log(todoListObj.getTodos());    // logged array contains all 4 todo objs; ids are sequential

todoListObj = makeTodoList();
todoListObj.init(todoSet1);
console.log(todoListObj.getTodos());    // logged array contains the only the 3 valid todo objs
todoListObj.init(todoData0);
console.log(todoListObj.getTodos());    // logged array now contains 4 valid todo objs

// addTodo()
todoListObj = makeTodoList();
todoListObj.addTodo(todoData0);
console.log(todoListObj.getTodos());    // logged array only contains the todoData0 obj
todoListObj.addTodo(todoData5);         // invalid todo
console.log(todoListObj.getTodos());    // logged array only contains the todoData0 obj

// removeTodo()
todoListObj.removeTodo(77);             // => Todo not found
console.log(todoListObj.getTodos());    // logged array only contains the todoData0 obj
console.log(todoListObj.removeTodo(1)); // valid id, todo removed; logs removed todo
console.log(todoListObj.getTodos());    // logged array is empty
todoListObj = makeTodoList();
todoListObj.init(todoSet);
console.log(todoListObj.removeTodo(3)); // valid id, todo removed; logs removed todo
console.log(todoListObj.getTodos());    // logged array contains the 3 remaining todos; id === 3 gone

// getTodo()
console.log(todoListObj.getTodo(2));    // valid id, logs the specified todo
console.log(todoListObj.getTodo(77));   // => Todo not found

// updateTodo()
todoListObj.updateTodo(2, { year: '2020', month: '10', title: 'Sell apples' });
console.log(todoListObj.getTodo(2)); // logs the specified todo with updated property values
todoListObj.updateTodo(2, { summary: 'Fall harvest' }); // rejects the invalid property name
console.log(todoListObj.getTodo(2)); // logs the specified todo with valid properties
todoListObj.updateTodo(77, { title: 'Fall harvest' });  // rejects the invalid todo id
todoListObj.updateTodo(2, { completed: 'true' });
console.log(todoListObj.getTodo(2)); // logs the specified todo with updated property values


let todoManager = function () {
  return {
    init (todoObj) {
      this.todoObj = todoObj;
      return this;
    },
    getTodos () {
      return this.todoObj.getTodos();
    },
    getCompletedTodos () {
      return this.getTodos().filter(todo => todo.completed === 'true');
    },
    getMonthYearTodos (month, year) {
      return this.getTodos().filter(todo => todo.isWithinMonthYear(String(month), String(year)));
    },
    getCompletedMonthYearTodos (month, year) {
      return this.getTodos().filter(todo => {
        return todo.completed === 'true' && todo.isWithinMonthYear(String(month), String(year));
      });
    },
  };
}();


// todoManager
let tdMgr = todoManager.init(todoListObj);
console.log(tdMgr.getTodos());                      // logged array contains the 3 remaining todos
console.log(tdMgr.getCompletedTodos());             // logged array contains todo with id 2
todoListObj.updateTodo(4, { completed: 'true' });
console.log(tdMgr.getTodos());                      // logged array contains the updated todo
console.log(tdMgr.getCompletedTodos());             // logged array contains todos with ids 2, 4
console.log(tdMgr.getMonthYearTodos(10, 2020)); // logged array contains todo with id 2
console.log(tdMgr.getCompletedMonthYearTodos(1, 2017)); // logged array is empty
todoListObj.updateTodo(1, { completed: 'true' });
console.log(tdMgr.getCompletedMonthYearTodos(1, 2017)); // logged array contains todo with id 1
