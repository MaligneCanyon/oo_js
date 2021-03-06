let createProduct = function(name, stock, price) {
  let id = -1;

  return function (name, stock, price) {
    id++;

    return {
      id,
      name,
      stock,
      price,
      setPrice (newPrice = 0) {
        if (newPrice < 0) alert('Price is negative');
        else this.price = newPrice;
      },
      describe () {
        console.log();
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Stock: ${this.stock}`);
      },
    };
  };
}();

let scissors = createProduct('Scissors', 8, 10);
console.log(scissors);
let drill = createProduct('Cordless Drill', 15, 45);
console.log(drill);

drill.setPrice(42.50);
drill.describe();
// => Name: Cordless Drill
// => ID: 1
// => Price: $42.50
// => Stock: 15

scissors.describe();
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8
