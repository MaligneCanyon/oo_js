function newPerson(name) { // PCP
  let Person = function (name = '') {
    this.name = name;
  };

  // let obj = new Person(name);
  // Object.defineProperties(obj, {
  //   log: {
  //     value: function () { console.log(name); },
  //     writeable: false,
  //   }
  // });
  // return obj;

  return Object.defineProperties(new Person(name), {
    log: {
      value () { console.log(this.name); },
      writeable: false,
    }
  });
}

let me = newPerson('Shane Riley');
console.log(me); // => Person { name: 'Shane Riley' }
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley
