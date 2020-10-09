let account = { // proj1
  balance: 0,

  deposit (amount) { // proj2
    this.balance += amount;
    return amount;
  },

  withdraw (amount) { // proj3
    if (amount > this.balance) amount = this.balance;
    this.balance -= amount;
    return amount;
  },
};

account.balance = 100;
console.log(account.balance);
// = 100
console.log(account.withdraw(19));
// = 19
console.log(account.balance);
// = 81
console.log(account.withdraw(91));
// = 81
console.log(account.balance);
// = 0
