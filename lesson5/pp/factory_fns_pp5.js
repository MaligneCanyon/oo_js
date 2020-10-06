function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total () { return this.phone + this.internet; }, // should be renamed 'totalInvoices'
    addPayment (payment) { this.payments.push(payment); },
    addPayments (paymentsArr) {
      paymentsArr.forEach(payment => this.addPayment(payment)); // 'this' is scoped lexically in an arrow fn
    },
    totalPayments () {
      return this.payments.reduce((accum, payment) => accum + payment.total(), 0);
    },
    amountDue () {
      return this.total() - this.totalPayments();
    },
  };
}


function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total () { return this.phone + this.internet + this.amount; },
  };
}


let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1001,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
console.log(invoice);
