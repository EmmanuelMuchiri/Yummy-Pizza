//-------------------------------BUSINESS LOGIC DESIGNED AND TESTED---------------------------//

//---Declaration of a Global Variable totalOrderPrice and initialized to an empty array---//
//The final total order price will be pushed to this array
var totalOrderPrice = [];
//------Constructor Placeorder created with it's properties----//
function Placeorder(size, cheese, topping) {
  this.size = size;
  this.cheese = cheese;
  this.topping = topping;
  this.price = 0;
  this.ShippingFee = 200;
}
//--Arrays to declare the pizzaSize,pizzaCheese and pizzaTopping to be used in the prototype CostOfPizza--//
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCheese = ["Standard", "More Cheese", "Most Cheese"];
var pizzaTopping = ["Bacon", "Chicken", "beef", "vegetables"];
//-Prototype CostOfPizza created to determine the price based on the three properties i.e size,cheese,topping-//
Placeorder.prototype.costOfPizza = function() {
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

Placeorder.prototype.costOfDelivery = function() {
  return this.ShippingFee;
}

//---Creation of prototype totalCost to be used to compute the total cost of all the orders--//
Placeorder.prototype.totalCost = function() {
  //created a variable shoppingCartTotal and initialized it to zero
  var shoppingCartTotal = 0;
  //this for loop iterates through the total orders to determine the number of orders
  for (var order = 0; order < totalOrderPrice.length; order++) {
    //shoppingCartTotal is now assigned a new value after the order(s) is added
    shoppingCartTotal += totalOrderPrice[order];
  }
  return cartTotalPrice;
}
//----End Of the Prototype totalCost---//

//---Created and object called ShippingAddress---//
function ShippingAddress(cityName, cityStreetName, cityAvenueName, nameOfBuilding, officeNumber) {
  this.cityName = cityName;
  this.CityStreetName = cityStreetName;
  this.cityAvenueName = cityAvenueName;
  this.nameOfBuilding = nameOfBuilding;
  this.nameOfBuilding = phoneNumber;
  this.deliveryAddress = (cityStreetName + " : \n" + cityAvenueName + " : \n" + nameOfBuilding + " : \n");
}
//----End Of the Constructor ShippingAddress---//

//--------------------------- END OF BUSINESS LOGIC DESIGNED AND TESTED------------------------//

$(document).ready(function() {
  $(".hide p").hide();
  $("#design").click(function() {
    $("#design p").toggle();
    $("#design img").toggle();
  });
  $("#dev").click(function() {
    $("#dev p").toggle();
    $("#dev img").toggle();
  });
  $("#products").click(function() {
    $("#products p").toggle();
    $("#products img").toggle();
  });

});
