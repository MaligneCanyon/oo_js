function makeAccount() { // proj5
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

  return account; // proj5
}

let account = makeAccount();
account.deposit(15);
// = 15
console.log(account.balance);
// = 15
let otherAccount = makeAccount();
console.log(otherAccount.balance);
// = 0
