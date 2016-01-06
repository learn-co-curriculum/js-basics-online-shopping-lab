'use strict';

describe('#addToCart', function(){

  beforeEach(function() {
    var orderNumber = 1
    var total = 0;
    var cardNumber;
    var cart = [];
  });

  it("should add pizza to the cart", function(){
      expect(addToCart("pizza").length).toEqual(1);
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
    var orderNumber = 1
    var total = 0;
    var cardNumber;
    var cart = [];
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
    var orderNumber = 1
    var total = 0;
    var cardNumber;
    var cart = [];
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

