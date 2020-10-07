function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          // msg += `${morning} ${name}`; // err
          // msg += `${this.morning} ${this.name}`; // this works

          // this works too ... 'name' refs the createGreeter param
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          // msg += `${afternoon} ${name}`;
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          // msg += `${evening} ${name}`;
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },

    // greet(timeOfDay) { // this also works
    //   console.log(this[timeOfDay] + ' ' + name);
    // },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); // => Good Morning Victor

// use 'this' when ref'ing an obj or its properties w/i the obj's methods
