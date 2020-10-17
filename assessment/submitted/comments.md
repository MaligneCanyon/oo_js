Yes, I really struggled with that requirement.  I couldn't reconcile the fact that
```
    getTodos () {
      return todos;
    },
```

violates the stated requirement, while
```
    getTodos () {
      return todos.map(todo => Object.assign({}, todo));
    },
```

(my original implementation) though meeting the requirement, prevents objects
in the resulting array from accessing the Todo `isWithinMonthYear` method.

In the end I opted for the former, as it allowed `getMonthYearTodos` and
`getCompletedMonthYearTodos` to execute with raising a TypeError.

I ran out of time before I could resolve the issue.

Anyway, I have (hopefully) fixed that code and not broken anything else in the
process.  Changes to the code and additional tests are indicated by `***1`.


Late in the day, I noticed that I had implemented `todoNdx` and `invalidTodo`
differently regarding error messaging; the former calls `todoErrMsg` prior to
returning, the latter does not.  This means that error codes from `invalidTodo`
had to be dealt within the functions where `invalidTodo` was invoked (namely
in `addTodo` and `updateTodo`).  I have refactored the related code to be
consistent with the `todoNdx` implementation.  As a result,
- `invalidTodo` has been renamed `isValidTodo`; it now returns a boolean
  (instead of an integer)
- `addTodo` and `updateTodo` have been streamlined

Changes are indicated by `***2`.


If I were to continue refactoring, I would like to implement
- using boolean values (rather than strings) for the values of the `completed`
  property
  - currently, there is no error checking for something like
```
    { completed: 'ture' } // misspelt
```
  - would simplify some of the code; for instance, could test for `todo.completed` rather than `todo.completed === 'true'`

- updating of any valid properties passed into the `updateTodo` method (rather
  than rejecting all passed-in properties if an invalid one is present)
  - however, that could potentially cause problems down the road if the
    passed-in properties were interdependent ...
