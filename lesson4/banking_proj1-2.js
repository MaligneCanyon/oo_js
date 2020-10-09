let account = { // proj1
  balance: 0,

  deposit (amount) { // proj2
    this.balance += amount;
    return amount;
  },
};

console.log(account.balance);
// = 0
console.log(account.deposit(12));
// = 12
console.log(account.balance);
// = 12
console.log(account.deposit(10));
// = 10
console.log(account.balance);
// = 22
