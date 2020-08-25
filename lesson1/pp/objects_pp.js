let invoices = { // pp1
  unpaid: [], // pp1

  add: function (clientName, amtOwed) { // pp2
    this.unpaid.push({ name: clientName, amount: amtOwed });
  },

  totalDue: function () { // pp3
    return this.unpaid.reduce((accum, obj) => accum + obj.amount, 0);
  },

  clear: function () { // extra
    this.unpaid = [];
    // console.log(this.unpaid);
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

  totalPaid: function () { // pp6
    return this.paid.reduce((accum, obj) => accum + obj.amount, 0);
  },
}

invoices.add('Hardware store', 5612); // pp2
console.log(invoices.unpaid); // [ { name: 'Hardware store', amount: 5612 } ] // pp2
invoices.add("Starbucks", 300); // pp2
console.log(invoices); // pp2

console.log(invoices.totalDue()); // 5912 // pp3

invoices.clear(); // extra
invoices.add('Due North Development', 250); // pp4
invoices.add('Moonbeam Interactive', 187.50); // pp4
invoices.add('Slough Digital', 300); // pp4
console.log(invoices.totalDue()); // 737.5 // pp4

invoices.payInvoice('Due North Development'); // pp7
invoices.payInvoice('Slough Digital'); // pp7
console.log(invoices.paid); // pp7
console.log(invoices.totalPaid()); // 550 // pp7
console.log(invoices.totalDue()); // 187.50 // pp7
