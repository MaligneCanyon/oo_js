function makeBank() { // proj6
  let bank = {
    accounts: [],
    number: 101, // proj7
    openAccount () { // proj7
      // let number = this.accounts.length + 101; // from the Solution ...
      let acct = makeAccount(this.number);
      // console.log('acct:', acct);
      this.number++;
      this.accounts.push(acct);
      return acct;
    },
  };

  return bank;
}

// function makeAccount() {
function makeAccount(number) { // proj7
  let account = {
    number, // proj7
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

  return account;
}

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
