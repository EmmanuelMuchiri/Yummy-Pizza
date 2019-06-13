//var totalPrice = [];
//------Constructor Placeorder created with it's properties----//
function Placeorder(size, cheese, topping) {
  this.size = size;
  this.cheese = cheese;
  this.topping = topping;
  this.price = 0
}
//--Arrays to declare the pizzaSize,pizzaCheese and pizzaTopping to be used in the prototype CostOfPizza--//
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCheese = ["Standard", "More Cheese", "Most Cheese"];
var pizzaTopping = ["Bacon", "Chicken", "beef", "vegetables"];
//-Prototype CostOfPizza created to determine the price based on the three properties i.e size,cheese,topping-//
Placeorder.prototype.CostOfPizza = function() {
  if (this.size === pizzaSize[0]) {
    this.price = price + 300;
  } else if (this.size === pizzaSize[1]) {
    this.price = price + 400;
  } else if (this.size === pizzaSize[2]) {
    this.price = price + 500;
  }
  if (this.cheese === pizzaCheese[0]) {
    this.price += 100;
  } else if (this.cheese === pizzaCheese[1]) {
    this.price += 200;
  } else if (this.cheese === pizzaCheese[2]) {
    this.price += 300;
  }
  if (this.topping === pizzaTopping[0]) {
    this.price += 100;
  } else if (this.topping === pizzaTopping[1]) {
    this.price += 200;
  } else if (this.topping === pizzaTopping[2]) {
    this.price += 300;
  } else if (this.topping === pizzaTopping[3]) {
    this.price += 50;
}
  return this.price;
}
//----End Of the Prototype CostOfPizza---//
