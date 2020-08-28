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
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          // msg += `${evening} ${name}`;
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); // => Good Morning Victor

// use 'this' when ref'ing an obj or its properties w/i an obj's methods
