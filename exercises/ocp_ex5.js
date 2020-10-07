//   init: The init method sets the email, password, firstName, lastName, and displayName of user.
//     The displayName is a 16 character sequence generated for the user. It's used as the display
//     name of a user.
//   reanonymize: This method generates a new 16 character sequence and reassigns it to the
//     displayName property if the password provided is valid. Returns true if successfully
//   re-anonymized. Returns 'Invalid Password' if the password provided is not valid.
//   resetPassword: This method asks the user for a new password and reassigns it to the password
//     property. To reset the password, the user must provide the current password. Returns
//     'Invalid Password' if the password provided is not valid. Returns true if the password is
//     successfully reset.
//   firstName: This method returns the first name of the user if the password provided is valid.
//     Returns 'Invalid Password' if the password provided is not valid.
//   lastName: This method returns the last name of the user if the password provided is valid.
//     Returns 'Invalid Password' if the password provided is not valid.
//   email: This method returns the email name of the user if the password provided is valid.
//     Returns 'Invalid Password' if the password provided is not valid.
//   displayName: This property returns the displayName — the 16 character sequence.

let Account = function () {
  function genDisplayName() {
    const CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let displayNameLength = 16;
    let displayName = '';

    while (displayNameLength --> 0)
      displayName += CHARS[Math.floor(Math.random() * CHARS.length)]; // CHARS[0..35]
    return displayName;
  }

  // can use 'this' in a private fn if the fn is invoked w/ fnName.call(this, ...args) format
  function validPassword(password) {
    return password === this.password;
  }

  return {
    init(em, password, fName, lName) {
      this.em = em;
      this.password = password;
      this.fName = fName;
      this.lName = lName;
      this.reanonymize(password); // can invoke methods w/i init(); sets this.displayName
      return this;
    },

    reanonymize(password) {
      if (validPassword.call(this, password)) {
        this.displayName = genDisplayName();
        return true;
      }
      return 'Invalid Password';
    },

    firstName(password) {
      return validPassword.call(this, password) ? this.fName : 'Invalid Password';
    },

    lastName(password) {
      return validPassword.call(this, password) ? this.lName : 'Invalid Password';
    },

    email(password) {
      return validPassword.call(this, password) ? this.em : 'Invalid Password';
    },

    resetPassword(password, newPassword) {
      if (validPassword.call(this, password)) {
        this.password = newPassword;
        return true;
      }
      return 'Invalid Password';
    },
  };
}();

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

const displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // returns true
console.log(displayName === fooBar.displayName);   // logs false

const bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'foo'
console.log(fooBar.email('abc'));                  // logs 'foo@bar.com'
