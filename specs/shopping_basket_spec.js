var assert = require("assert");
var Item = require("../item");
var ShoppingBasket = require("../shopping_basket");

describe("Shopping Basket Test", function(){
  beforeEach(function(){
      item1 = new Item("bread", 1, true);
      item2 = new Item("milk", 2, false);
      item3 = new Item("banana", 27, true);
      shoppingBasket = new ShoppingBasket(true);
  });

  it("should start empty", function(){
    assert.strictEqual(shoppingBasket.contents.length, 0);
  })

  it("can add item to basket", function(){
    shoppingBasket.add(item1);
    assert.strictEqual(shoppingBasket.contents[0], item1);
  })

  it("can contain multiple items", function(){
    shoppingBasket.add(item1);
    shoppingBasket.add(item2);
    shoppingBasket.add(item3);
    assert.strictEqual(shoppingBasket.contents.length, 3);
  })

  it("can remove items from the basket", function() {
    shoppingBasket.add(item1);
    shoppingBasket.add(item2);
    shoppingBasket.add(item3);
    shoppingBasket.remove(item2);
    assert.strictEqual(shoppingBasket.contents[0], item1);
    assert.strictEqual(shoppingBasket.contents[1], item3);
  })

  it("totalPrice increases when you add item", function(){
    shoppingBasket.add(item1);
    shoppingBasket.add(item2);
    assert.strictEqual(shoppingBasket.totalPrice, 3);
  })

  it("check if discount applied", function(){
    shoppingBasket.add(item1);
    shoppingBasket.add(item2);
    assert.strictEqual(shoppingBasket.totalPrice, 3);
    shoppingBasket.add(item3);
    shoppingBasket.checkout();
    assert.strictEqual(shoppingBasket.totalPrice, 25.5);
  })

});
