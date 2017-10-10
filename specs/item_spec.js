var assert = require("assert");
var Item = require("../item");

describe("Item test", function(){

  beforeEach(function(){
    item = new Item("bread", 1, true);
  });


  it("should have name", function(){
    assert.strictEqual(item.name, "bread");
  })

  it("should have price", function(){
    assert.strictEqual(item.price, 1);
  })

  it("shoould be on offer", function(){
    assert.strictEqual(item.offer, true);
  })
});
