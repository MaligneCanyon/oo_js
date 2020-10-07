const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    // this.price -= discount; // mutates the obj; effects of repeated discounts are compounding
    // return this.price;
    return this.price - discount;
  },
};

console.log(item.discount(20)); // 40 // should return 40
console.log(item.discount(50)); // 20 // should return 25
console.log(item.discount(25)); // 15 // should return 37.5
