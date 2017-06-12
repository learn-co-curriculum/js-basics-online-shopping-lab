/*global afterEach, beforeEach, describe, it */

beforeEach(function() {
  setCart([]);

  expect.spyOn(console, "log");
});

afterEach(function() {
  expect.restoreSpies();
});

describe("addToCart()", function() {
  it("can add items to the cart", function() {
    addToCart("apples");

    expect(getCart().length).toEqual(1);

    addToCart("bananas");

    expect(getCart().length).toEqual(2);
  });

  it("turns items into JavaScript objects before adding them to the cart", function() {
    addToCart("carrots");

    let itemConstructor = getCart()[0].constructor;

    expect(itemConstructor).toEqual(Object);
  });

  it("properly structures objects in the { itemName: itemPrice } format", function() {
    addToCart("daikon");

    let itemName = Object.keys(getCart()[0])[0];
    let itemPrice = getCart()[0][itemName];

    expect(itemName).toEqual("daikon");
    expect(Number.isInteger(itemPrice)).toBe(true);
  });

  it("sets the price as an integer between 1 and 100", function() {
    addToCart("eggplant");

    let itemPrice = getCart()[0]["eggplant"];

    expect(itemPrice).toBeLessThanOrEqualTo(100)
                     .toBeGreaterThanOrEqualTo(1);
  });

  it("chooses the price at random", function() {
    // Note: this test has a 1-in-10,000 chance of a false negative.
    addToCart("figs");
    addToCart("grapes");
    addToCart("halloumi");

    let prices = getCart().map(c => c[Object.keys(c)[0]]);
    let pricesEqual = prices[0] === prices[1] && prices[1] === prices[2];

    expect(pricesEqual).toBe(false);
  });

  it("prints a message to the console indicating that the item has been added", function() {
    addToCart("ice cream");

    expect(console.log).toHaveBeenCalledWith("ice cream has been added to your cart.");

    addToCart("juice");

    expect(console.log).toHaveBeenCalledWith("juice has been added to your cart.");
  });

  it("returns the cart", function() {
    expect(addToCart("kale")).toEqual(getCart());
  });
});

describe("viewCart()", function() {
  it("prints 'Your shopping cart is empty.' if the cart is empty", function() {
    viewCart();

    expect(console.log).toHaveBeenCalledWith("Your shopping cart is empty.")
  });

  it("correctly prints a one-item cart", function() {
    addToCart("lemons");

    const lemonsCost = getCart()[0]["lemons"];

    viewCart();

    expect(console.log).toHaveBeenCalledWith(
      `In your cart, you have lemons at $${lemonsCost}.`
    );
  });

  it("correctly prints a two-item cart", function() {
    addToCart("mango");
    addToCart("nuts");

    const mangoCost = getCart()[0]["mango"];
    const nutsCost = getCart()[1]["nuts"];

    viewCart();

    expect(console.log).toHaveBeenCalledWith(
      `In your cart, you have mango at $${mangoCost} and nuts at $${nutsCost}.`
    );
  });

  it("correctly prints a three-or-more-item cart", function() {
    addToCart("orange");
    addToCart("pear");
    addToCart("quince");

    const orangeCost = getCart()[0]["orange"];
    const pearCost = getCart()[1]["pear"];
    const quinceCost = getCart()[2]["quince"];

    viewCart();

    expect(console.log).toHaveBeenCalledWith(
      `In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, and quince at $${quinceCost}.`
    );

    addToCart("rhubarb");

    const rhubarbCost = getCart()[3]["rhubarb"];

    viewCart();

    expect(console.log).toHaveBeenCalledWith(
      `In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, quince at $${quinceCost}, and rhubarb at $${rhubarbCost}.`
    );
  });
});

describe("total()", function() {
  it("adds up the price of all items in the cart", function() {
    addToCart("sorghum");
    addToCart("tarragon");

    const sorghumCost = getCart()[0]["sorghum"];
    const tarragonCost = getCart()[1]["tarragon"];

    let totalCost = sorghumCost + tarragonCost;

    expect(total()).toBe(totalCost);

    addToCart("urchin");

    const urchinCost = getCart()[2]["urchin"];

    totalCost += urchinCost;

    expect(total()).toBe(totalCost);
  });
});

describe("removeFromCart()", function() {
  it("removes the specified item from the cart", function() {
    addToCart("vanilla");
    addToCart("watermelon");
    addToCart("yams");

    removeFromCart("watermelon");

    const firstItem = Object.keys(getCart()[0])[0];
    const secondItem = Object.keys(getCart()[1])[0];

    expect(firstItem).toEqual("vanilla");
    expect(secondItem).toEqual("yams");

    removeFromCart("yams");

    expect(getCart().length).toEqual(1);
  });

  it("alerts you if you're trying to remove an item that isn't in your cart", function() {
    // Repeat item name from previous test to prevent hard-coding.
    removeFromCart("yams");

    expect(console.log).toHaveBeenCalledWith("That item is not in your cart.");
  });
});

describe("placeOrder()", function() {
  it("doesn't place the order if a credit card number is not provided", function() {
    placeOrder();

    expect(console.log).toHaveBeenCalledWith(
      "Sorry, we don't have a credit card on file for you."
    );
  });

  it("places an order when a credit card number is provided", function() {
    addToCart("zucchini");

    const cartTotal = total();
    const cardNumber = Math.floor(Math.random() * 100000000);

    placeOrder(cardNumber);

    expect(console.log).toHaveBeenCalledWith(
      `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    );
  });

  it("empties the cart", function() {
    addToCart("apples");

    placeOrder(12345678);

    expect(getCart()).toEqual([]);
  });
});
