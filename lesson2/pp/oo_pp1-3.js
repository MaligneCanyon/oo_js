// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// pp1
let scissors = {
	id: 0,
	name: 'Scissors',
	stock: 8,
	price: 10,
};

let drill = {
	id: 1,
	name: 'Cordless Drill',
	stock: 15,
	price: 45,
};

// pp2
function setPrice(product, newPrice = 0) {
	if (newPrice < 0) alert('Price is negative');
	else product.price = newPrice;
}
setPrice(drill, 42.50);
console.log(drill);

// pp3
function describeProduct(product) {
	console.log(`Name: ${product.name}`);
	console.log(`ID: ${product.id}`);
	console.log(`Price: $${product.price}`);
	console.log(`Stock: ${product.stock}`);
}
describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8
