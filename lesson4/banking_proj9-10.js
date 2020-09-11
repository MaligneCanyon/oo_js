function makeBank() { // proj6
  let accounts = []; // proj10

  let bank = {
    // accounts: [],
    // number: 101, // proj7

    openAccount () { // proj7
      // let number = this.accounts.length + 101; // from the Solution ...
      // let acct = makeAccount(this.number);
      // this.number++;
      let acct = makeAccount(accounts.length + 101); // proj10 (w/ retrofix for proj7)
      // console.log('acct:', acct);
      // this.accounts.push(acct);
      accounts.push(acct); // proj10
      return acct;
    },

    transfer (source, destination, amount) { // proj8
      destination.deposit(source.withdraw(amount));
      return amount;
    },
  };

  return bank;
}

// function makeAccount() { // proj5
function makeAccount(number) { // proj7 // can move makeAccount inside 'function makeBank()'
  let balance = 0; // proj9
  let transactions = []; // proj9

  let account = {
    // number, // proj7
    // balance: 0, // proj1
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

  return account; // proj5
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
