let account = {
  balance: 0, // proj1
  transactions: [], // proj4

  deposit (amount) { // proj2
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount }); // proj4
    return amount;
  },

  withdraw (amount) { // proj3
    if (amount > this.balance) amount = this.balance;
    this.balance -= amount;
    this.transactions.push({ type: "withdrawal", amount }); // proj4
    return amount;
  },
};


console.log(account.deposit(23));
// = 23
console.log(account.transactions);
// = [{...}]
console.log(account.transactions[0]);
// = {type: "deposit", amount: 23}

console.log(account.withdraw(11));
console.log(account.transactions);
