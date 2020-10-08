let invoices = { // pp1
  unpaid: [], // pp1

  // add: function (clientName, amtOwed) { // pp2
  //   this.unpaid.push({ name: clientName, amount: amtOwed });
  // },
  add (name, amount) { // pp2, concise syntax
    this.unpaid.push({ name, amount });
  },

  // totalDue: function () { // pp3
  //   return this.unpaid.reduce((accum, obj) => accum + obj.amount, 0);
  // },
  total: function (arr) { // pp3
    return arr.reduce((accum, obj) => accum + obj.amount, 0);
  },
  totalDue: function () { // pp3
    return this.total(this.unpaid);
  },

  clear: function () { // extra
    this.unpaid = [];
  },

  paid: [], // pp5
  payInvoice: function (clientName) { // pp5
    let arr = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === clientName) this.paid.push(invoice);
      else arr.push(invoice);
    });
    this.unpaid = arr;
  },

  // totalPaid: function () { // pp6
  //   return this.paid.reduce((accum, obj) => accum + obj.amount, 0);
  // },
  totalPaid: function () { // pp6
    return this.total(this.paid);
  },
};

// pp2
invoices.add('Hardware store', 5612);
console.log(invoices.unpaid); // [ { name: 'Hardware store', amount: 5612 } ]
invoices.add("Starbucks", 300);
console.log(invoices);

// pp3
console.log(invoices.totalDue()); // 5912

// extra
invoices.clear();
// pp4
invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue()); // 737.5

// pp7
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.paid);
console.log(invoices.totalPaid()); // 550
console.log(invoices.totalDue()); // 187.50
