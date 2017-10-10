var ShoppingBasket = function(card){
  this.contents = [];
  this.totalPrice = 0;
  this.card = card;
  this.discount = 1;
}

ShoppingBasket.prototype.add = function(item){
  this.contents.push(item);
  this.totalPrice += item.price;
}

ShoppingBasket.prototype.remove = function(item){
  var index = this.contents.indexOf(item);
  this.contents.splice(index, 1);
}

ShoppingBasket.prototype.checkout = function(){
  if (this.totalPrice > 20) {
    this.discount -= 0.1;
  }

  if (this.card === true){
    this.discount -= 0.05;
  }

  this.totalPrice = this.totalPrice * this.discount;
}


module.exports = ShoppingBasket;
