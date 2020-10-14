// Array methods to create:
//     first, return the first element in an array.
//     last, return the last element in an array.
//     without, return a new array that does not contain the value passed to it.
//     range, return an array of values starting at 0 when a single number is supplied. If two arguments are
//       supplied, returns an array of values that start with the first argument and ends with the one number
//       less than the second argument.
//     lastIndexOf, return the last index of the supplied value.
//     sample, return a single value from an array when no argument is supplied. Return an array of multiple,
//       non-repeated elements when a quantity is supplied.

// Object and object collection methods to create:
//     findWhere, return the first object with properties that match the supplied object. If no objects match
//       all the supplied properties, undefined is returned.
//     where, return an array of all objects with properties that match the supplied object.
//     pluck, return an array of the values that match the supplied key from a collection of objects.
//     keys, return an array of the keys from an object.
//     values, return an array of the values from an object.
//     extend, takes two or more objects, taking the properties and values from the last argument and adding
//       them to the argument before it. Object extensions occur recursively from last argument to first. The
//       first argument ends up being modified to include all properties and values from the other objects
//       passed in.
//     pick, return a new object with the passed in properties taken from the old object. Accepts one or more
//       arguments.
//     omit, return a new object with any passed in properties omitted.
//     has, return true when the property passed in exists, false if it doesn't.


// Utility methods. These should work with either syntax (i.e. _.isElement(obj) or _(obj).isElement()).
//     [optional, feel free to check out the video for the answer] isElement, return true if argument is a
//       DOM element.
//     isArray, return true if argument is an array.
//     isObject, return true if argument is an object or a function.
//     isFunction, return true if argument is a function.
//     isString, return true if argument is a string.
//     isNumber, return true if argument is a number. Also returns true for objects created with the
//       Number constructor.
//     isBoolean, return true if argument is a boolean. Also returns true for objects created with the
//       Boolean constructor.

(function () {
  var _ = function(element) { // element can be an obj, arr, arr of objs, etc.

    u = { // def methods attached to the rtn'd obj here ...
      // arr methods
      first () {
        return element[0];
      },
      last () {
        return element[element.length - 1];
      },
      without (...args) {
        return element.filter(elem => args.every(arg => arg !== elem));
      },
      lastIndexOf (value) {
        for (let ndx = element.length - 1; ndx >= 0; ndx--) {
          if (element[ndx] === value) return ndx;
        }

        return -1;
      },
      sample (num = 1) {
        let temp = element;
        let samples = [];
        for (let ndx; num > 0; num--) {
          ndx = Math.floor(Math.random() * temp.length);
          samples.push(temp.splice(ndx, 1)[0]);
        }

        return samples.length === 1 ? samples[0] : samples;
      },

      // obj methods
      findWhere (obj) {
        return this.where(obj)[0];
      },
      where (obj) {
        function obj1ContainsObj2(obj1, obj2) {
          if (obj1 === obj2) return true;
          let keys1 = Object.keys(obj1);
          let keys2 = Object.keys(obj2);
          return keys2.every(key => keys1.includes(key) && obj1[key] === obj2[key]);
        }

        return element.filter(elem => obj1ContainsObj2(elem, obj));
      },
      pluck (key) {
        return element.filter(elem => Object.keys(elem).includes(key)).map(elem => elem[key]);
      },
      keys () {
        return Object.keys(element);
      },
      values () {
        return Object.values(element);
      },
      pick (...args) {
        let obj = {};
        args.forEach(arg => obj[arg] = element[arg]);
        return obj;
      },
      omit (...args) {
        let obj = {};
        this.keys(element).forEach(key => {
          if (!args.includes(key)) obj[key] = element[key];
        });
        return obj;
      },
      has (key) {
        return this.keys(element).includes(key);
      },
    };

    return u;
  };

  // attach _ to the global obj; otherwise, it is undefined outside the closure
  window._ = _; // in a browser
  // global._ = _; // in Node
})();


// def static methods on the parent obj starting here ...

// arr static methods
_.range = function (min, max) {
  let arr = [];

  if (max === undefined) {
    if (min === undefined) return [];
    max = min;
    min = 0;
  }

  for (let value = min; value < max; value++) arr.push(value);
  return arr;
};

// obj static methods
_.extend = function (...args) {
  for (ndx = args.length - 1; ndx > 0; ndx--) {
    Object.keys(args[ndx]).forEach(key => args[ndx - 1][key] = args[ndx][key]);
    let x = 1;
  }
  return args[0];
};


// console.log(_([2,4,6,8,10]).sample(2)); // rtns an arr of ints
// console.log(_([2,4,6,8,10]).sample(1)); // rtns a single int; could rtn a single-elem arr instead
// console.log(_([2,4,6,8,10]).sample());  // rtns a single int
