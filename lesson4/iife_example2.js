let inventory = (function() {
  let stocks = [];

  function isValid(newStock) {
    return stocks.every(stock => newStock.name !== stock.name);
  }

  return {
    stockCounts() {
      stocks.forEach(stock => console.log(stock.name + `: ${stock.count}`));
    },

    addStock(newStock) {
      if (isValid(newStock)) stocks.push(newStock);
      else console.log(newStock.name + ' already exists');
    },
  };
})();


inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
//=> ballpen: 5

inventory.addStock({
  name: 'ballpen',
  count: 5,
});
//=> ballpen already exists

inventory.stockCounts();
//=> ballpen: 5

inventory.stocks.push({
  name: 'ballpen',
  count: 5,
});
// results in an error
