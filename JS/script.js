var totalPrice = [];

function placeOrder(size, cheese) {
  this.size = defaultSize;
  this.cheese = cheese;
  this.sauce = sauce;
  this.vegeOne = 1;
  this.vegeTwo = 1;
  this.meat = 2;
  this.price = 0;
  this.priceTwo = 3;
}

Order.prototype.costOfPizza = function() {
  if (this.size === "Small") {
    this.price += 6;
  } else if (this.size === "Medium") {
    this.price += 9;
  } else if (this.size === "Large") {
    this.price += 12;
  }
  if (this.cheese === "cheese") {
    this.price += 1;
  } else if (this.cheese === "standard cheese") {
    this.price += 0.5;
  } else if (this.cheese === "more cheese") {
    this.price += 1.5;
  }
  this.price += this.sauce;
  this.price += this.vegeOne;
  this.price += this.vegeTwo;
  this.price += this.meat;
  return this.price;
}
