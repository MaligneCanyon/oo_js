let account = {
  balance: 0, // proj1

  deposit (amount) { // proj2
    this.balance += amount;
    return amount;
  },

  withdraw (amount) {
    if (amount > this.balance) amount = this.balance;
    this.balance -= amount;
    return amount;
  },
};

console.log(account.deposit(81));
// = 81
console.log(account.balance);
// = 81
console.log(account.withdraw(91));
// = 81
console.log(account.balance);
// = 0
