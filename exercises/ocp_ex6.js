let ItemManager = function () {
  let inventory = [];

  let itemCreator = function (itemName, category, quantity) {
    let isValidItem = function () {
      let isValidName = (itemName) => itemName.replace(/ /g, '').length > 4;
      let isValidCategory =
        (category) => category.replace(/ /, '') === category && category.length > 4;
      let isValidQuantity = (quantity) => quantity !== undefined;
      return isValidName(itemName) && isValidCategory(category) && isValidQuantity(quantity);
    };

    if (isValidItem()) {
      // although this works ...
      // let skuCode = (itemName.split(' ').join('').slice(0, 3) + category.slice(0, 2)).toUpperCase();
      // return { skuCode, itemName, category, quantity };

      // ... should gen an item using 'new'
      this.skuCode = (itemName.split(' ').join('').slice(0, 3) + category.slice(0, 2)).toUpperCase();
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else return { notValid: true };
  };
  // console.log(itemCreator('ab  cd', 'fghij', 0)); // { notValid: true } // itemName too short
  // console.log(itemCreator('ab cde', 'fghij', 0));
    // { skuCode: 'ABCFG', itemName: 'ab cde', category: 'fghij', quantity: 0 }
  // console.log(itemCreator('ab cde', 'fgh j', 0)); // { notValid: true } // space in category
  // console.log(itemCreator('ab cde', 'fghij'));    // { notValid: true } // no quantity
  // console.log(itemCreator.skuCode); // should log undefined

  return {
    items: inventory,

    create (itemName, category, quantity) {
      // let item = itemCreator(itemName, category, quantity); // although this works ...
      let item = new itemCreator(itemName, category, quantity); // ... should gen an item using 'new'
      if (item.hasOwnProperty('notValid')) return false;
      inventory.push(item);
      return true; // for testing purposes
    },

    delete (skuCode) {
      for (let ndx = 0; ndx < inventory.length; ndx++) {
        if (inventory[ndx].skuCode === skuCode) return inventory.splice(ndx, 1)[0];
      }

      // return undefined;
    },

    update (skuCode, obj) {
      let item = this.delete(skuCode);
      if (item) {
        for (key in obj) item[key] = obj[key]; // assumes all keys are valid
        inventory.push(item);
      }
    },
    // the Solution uses Object.assign to update the item obj
    // update(skuCode, itemInformation) {
    //   Object.assign(this.getItem(skuCode), itemInformation);
    // },

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
          return accum + item.itemName + ((ndx === arr.length - 1) ? '' : ', ');
        }, '')
      );
    },

    createReporter (skuCode) {
      let item = {};
      let arr = this.itemMgr.items;
      for (let ndx = 0; ndx < arr.length; ndx++) {
        if (arr[ndx].skuCode === skuCode) {
          item = arr[ndx];
          break;
        }
      }

      return {
        itemInfo () {
          for (key in item) console.log(`${key}: ${item[key]}`);
        },
      };
    },
  };
}();


console.log(ItemManager.create('basket ball', 'sports', 0));         // T // valid item
console.log(ItemManager.create('asd', 'sports', 0));                 // F // itemName too short
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
