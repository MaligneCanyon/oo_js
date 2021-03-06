function makeBank() { // proj6
  return {
    accounts: [],
    number: 101, // proj7

    openAccount () { // proj7
      // let number = this.accounts.length + 101; // from the Solution ...
      let acct = makeAccount(this.number);
      this.number++;
      this.accounts.push(acct);
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
function makeAccount(number) { // proj7
  return { // proj5
    number, // proj7
    balance: 0,
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
} // proj5

// proj7 ...
let bank = makeBank();
// console.log('bank:', bank);
let account = bank.openAccount();
// console.log('account:', account);
console.log(account.number);
// = 101
console.log(bank.accounts);
// = [{...}]
console.log(bank.accounts[0]);
// = {number: 101, balance: 0, transactions: Array[0]}
let secondAccount = bank.openAccount();
console.log(secondAccount.number);
// = 102

// proj8 ...
// let bank = makeBank();
let source = bank.openAccount();
console.log(source.deposit(10));
// = 10
let destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7));
// = 7
console.log(source.balance);
// = 3
console.log(destination.balance);
// = 7
