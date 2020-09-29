let ItemManager = function () {
  let inventory = [];
  let itemCreator = function (name, category, quantity) {
    let isValidItem = function () {
      let isValidName = (name) => name.replace(/ /g, '').length > 4;
      let isValidCategory = (category) => category.replace(/ /, '') === category && category.length > 4;
      let isValidQuantity = (quantity) => quantity !== undefined;
      return isValidName(name) && isValidCategory(category) && isValidQuantity(quantity);
    };

    if (isValidItem()) {
      let sku = (name.split(' ').join('').slice(0, 3) + category.slice(0, 2)).toUpperCase();
      return { sku, name, category, quantity };
    } else return { notValid: true };
  };
  // console.log(itemCreator('ab  cd', 'fghij', 0)); // { notValid: true } // name too short
  // console.log(itemCreator('ab cde', 'fghij', 0)); // { sku: 'ABCFG', name: 'ab cde', category: 'fghij', quantity: 0 }
  // console.log(itemCreator('ab cde', 'fgh j', 0)); // { notValid: true } // space in category
  // console.log(itemCreator('ab cde', 'fghij'));    // { notValid: true } // no quantity
  // console.log(itemCreator.sku); // should log undefined

  return {
    items: inventory,

    create (name, category, quantity) {
      let item = itemCreator(name, category, quantity);
      if (item.hasOwnProperty('notValid')) return false;
      inventory.push(item);
      return true;
    },

    delete (sku) {
      for (let ndx = 0; ndx < inventory.length; ndx++) {
        if (inventory[ndx].sku === sku) return inventory.splice(ndx, 1)[0];
      }

      return null;
    },

    update (sku, obj) {
      let item = this.delete(sku);
      if (item) {
        for (key in obj) item[key] = obj[key]; // assumes all keys are valid
        inventory.push(item);
      }
    },

    inStock () {
      return inventory.filter(item => item.quantity > 0);
    },

    itemsInCategory (category) {
      return inventory.filter(item => item.category === category);
    },
  };
}();


let ReportManager = function () {
  return {
    init (itemMgr) { this.itemMgr = itemMgr; },

    reportInStock () {
      console.log(
        this.itemMgr.inStock.call(this).reduce((accum, item, ndx, arr) => {
          return accum + item.name + ((ndx === arr.length - 1) ? '' : ', ');
        }, '')
      );
    },

    createReporter (sku) {
      let self = this;
      return {
        itemInfo () {
          let item = {};
          let arr = self.itemMgr.items;
          for (let ndx = 0; ndx < arr.length; ndx++) {
            if (arr[ndx].sku === sku) {
              item = arr[ndx];
              break;
            }
          }

          for (key in item) console.log(`${key}:${item[key]}`);
        },
      };
    },
  };
}();


console.log(ItemManager.create('basket ball', 'sports', 0));         // T // valid item
console.log(ItemManager.create('asd', 'sports', 0));                 // F // name too short
console.log(ItemManager.create('soccer ball', 'sports', 5));         // T // valid item
console.log(ItemManager.create('football', 'sports'));               // F // no quantity
console.log(ItemManager.create('football', 'sports', 3));            // T // valid item
console.log(ItemManager.create('kitchen pot', 'cooking items', 0));  // F // space in category
console.log(ItemManager.create('kitchen pot', 'cooking', 3));        // T // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball, football, kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.items);
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football, kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
console.log(ItemManager.items);
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
