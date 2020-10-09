function makeBank() { // proj6
  let accounts = []; // proj10

  return {
    // accounts: [],
    // number: 101, // proj7

    openAccount () { // proj7
      // let acct = makeAccount(this.number);
      // this.number++;
      let acct = makeAccount(accounts.length + 101); // proj10 (w/ retrofix for proj7)
      // this.accounts.push(acct);
      accounts.push(acct); // proj10
      return acct;
    },

    transfer (source, destination, amount) { // proj8
      destination.deposit(source.withdraw(amount));
      return amount;
    },
  };
}

// let account = { // proj1
// function makeAccount() { // proj5
function makeAccount(number) { // proj7 // could move makeAccount inside 'function makeBank()'
  let balance = 0; // proj9
  let transactions = []; // proj9

  return {
    // number, // proj7
    // balance: 0,
    // transactions: [], // proj4

    deposit (amount) { // proj2
      // this.balance += amount;
      // this.transactions.push({ type: "deposit", amount }); // proj4
      balance += amount; // proj9
      transactions.push({ type: "deposit", amount }); // proj9
      return amount;
    },

    withdraw (amount) { // proj3
      // if (amount > this.balance) amount = this.balance;
      // this.balance -= amount;
      // this.transactions.push({ type: "withdrawal", amount }); // proj4
      if (amount > balance) amount = balance; // proj9
      balance -= amount; // proj9
      transactions.push({ type: "withdrawal", amount }); // proj9
      return amount;
    },

    balance () { // proj9
      return balance;
    },

    number () { // proj9
      return number;
    },

    transactions () { // proj9
      return transactions;
    },
  };
}


// proj9 ...
let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// = 0
console.log(account.deposit(17));
// = 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// = 102
console.log(account.transactions());
// [Object] // specifically, [ { type: 'deposit', amount: 17 } ]


// proj10 ...
// let bank = makeBank();
console.log(bank.accounts);
// = undefined
console.log(bank.number); // no longer available
// = undefined
