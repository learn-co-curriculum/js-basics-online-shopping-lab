'use strict';

describe('#addToCart', function(){
  
  beforeEach(function() {
    orderNumber = 1;
    total = 0;
    cardNumber;
    cart = [];
  });

  it("should add pizza to the cart", function(){
    addToCart("pizza");
    expect(cart.length).toEqual(1);
    expect(Object.keys(cart[0])).toEqual(["pizza"]);
  });

  it("should print to the console that pizza was added to the cart", function(){
    spyOn(console, 'log');
    addToCart("pizza");
    expect(console.log.calls.argsFor(0)).toEqual(["pizza has been added to your cart"]);
  });

  it("should add the price to the total", function(){
    cart = [];
    total = 0;
    addToCart("pizza");
    var cost = cart[0]["pizza"];
    expect(cost).toEqual(total);
  });


});

describe('#viewCart', function(){


  beforeEach(function() {
    orderNumber = 1
    total = 0;
    cardNumber;
    cart = [];
  });

  it("should print each item in the cart and their cost", function(){
    spyOn(console, 'log');
    cart = []
    addToCart("socks");
    var socksCost = cart[0]["socks"];
    addToCart("puppy");
    var puppyCost = cart[1]["puppy"];
    addToCart("iPhone");
    var iPhoneCost = cart[2]["iPhone"];
    viewCart();
    expect(console.log.calls.argsFor(3)).toEqual(["In your cart you have: socks $" + socksCost]);
    expect(console.log.calls.argsFor(4)).toEqual(["In your cart you have: puppy $" + puppyCost]);
    expect(console.log.calls.argsFor(5)).toEqual(["In your cart you have: iPhone $" + iPhoneCost]);
  });

});

describe('#addCreditCard', function(){

  beforeEach(function() {
    orderNumber = 1
    total = 0;
    cardNumber;
    cart = [];
  });

  it("should store a credit card number for online orders", function(){
    expect(addCreditCard(1239824759275)).toEqual(cardNumber);
  });

  it("should print out that the credit card number has been saved", function(){
    spyOn(console, 'log');
    addCreditCard(1239824759275);
    expect(console.log.calls.argsFor(0)).toEqual([ 'Your credit card number has been saved.' ]);

  });

});

describe('#removeFromCart', function(){


  beforeEach(function() {
    orderNumber = 1
    total = 0;
    cardNumber;
    cart = [];
  });

  it("removes the item from the cart", function(){
    cart = [{pizza: 27}];
    removeFromCart("pizza");
    expect(cart).toEqual([]);
  });

   it("removes the cost of the item from the total", function(){
    cart = [{pizza: 27}, {pens: 15}];
    total = 42;
    removeFromCart("pizza");
    expect(total).toEqual(15);
  });


  it("alerts you if you're trying to remove an item that isn't in your cart", function(){
    spyOn(console, 'log');
    cart = [];
    cart = [{pizza: 27}];
    removeFromCart("sock")
    expect(console.log.calls.argsFor(0)).toEqual(["That item is not in your cart"]);
  });



});

describe('#placeOrder', function(){

  beforeEach(function() {
    orderNumber = 1
    total = 0;
    cardNumber = undefined;
    cart = [];
  });

  it("doesn't let you place an order if you don't have a credit card on file", function(){
    spyOn(console, 'log');
    cart = [{pizza: 27}];
    placeOrder();
    expect(console.log.calls.argsFor(0)).toEqual(["We don't have a credit card on file for you to place your order"]);
  });

  it("let's you place an order with a credit card on file", function(){
    cart = [{pizza: 27}];
    total = 27;
    var origTotal = 27;
    cardNumber = 12346312;
    spyOn(console, 'log');
    placeOrder();
    expect(console.log.calls.argsFor(0)).toEqual(["Your total cost is: $" + origTotal + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + (orderNumber - 1)]);
  });

  it("increments order number for each order", function(){
    cart = [{pizza: 27}];
    total = 27;
    cardNumber = 12346312;
    expect(orderNumber).toEqual(1);
    placeOrder();
    var lintRoller = {"lint roller": 14}
    var lysol = {lysol: 12};
    cart.push(lintRoller);
    cart.push(lysol);
    expect(orderNumber).toEqual(2);
  });


    it("clears the total after each order", function(){
    cart = [{pizza: 27}];
    total = 27;
    cardNumber = 12346312;
    placeOrder();
    expect(total).toEqual(0);
  });

});

