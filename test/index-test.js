/*global afterEach, beforeEach, describe, it */


beforeEach(function() {
  setCart([])

  expect.spyOn(console, 'log')
})

afterEach(function() {
  expect.restoreSpies()
})

describe('#addToCart', function() {
  it("should add an item to the cart", function() {
    addToCart('pizza')

    expect(getCart().length).toEqual(1);
  });

  it("logs that the item has been added", function() {
    addToCart('pizza')

    expect(console.log).toHaveBeenCalledWith("pizza has been added to your cart.")
  })

  it("returns the cart", function() {
    expect(addToCart("pizza")).toEqual(getCart())
  })
});

describe('#viewCart', function() {
  it("should print each item in the cart and their cost", function() {
    addToCart("socks");
    addToCart("puppy");
    addToCart("iPhone");

    const socksCost = getCart()[0]["socks"];
    const puppyCost = getCart()[1]["puppy"];
    const iPhoneCost = getCart()[2]["iPhone"];

    viewCart();

    expect(console.log).toHaveBeenCalledWith(
      `In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.`
    )
  });

  it("should print 'Your shopping cart is empty.' if the cart is empty", function() {
    viewCart();

    expect(console.log).toHaveBeenCalledWith("Your shopping cart is empty.")
  });
});

describe('#total', function() {
  it('adds up the prices of the items in the cart', function() {
    addToCart("socks");
    addToCart("puppy");
    addToCart("iPhone");

    const socksCost = getCart()[0]["socks"];
    const puppyCost = getCart()[1]["puppy"];
    const iPhoneCost = getCart()[2]["iPhone"];

    const totalCost = socksCost + puppyCost + iPhoneCost;

    expect(total()).toEqual(totalCost)
  })
})

describe('#removeFromCart', function() {
  it("removes the item from the cart", function() {
    addToCart('pizza')

    expect(hasItem(getCart(), 'pizza')).toBe(true)

    removeFromCart("pizza");

    expect(getCart()).toEqual([]);
  });

  it("alerts you if you're trying to remove an item that isn't in your cart", function() {
    removeFromCart("sock")

    expect(console.log).toHaveBeenCalledWith("That item is not in your cart.")
  });
});

describe('#placeOrder', function() {
  it("doesn't let you place an order if you don't provide a credit card number", function() {
    placeOrder();

    expect(console.log).toHaveBeenCalledWith(
      "We don't have a credit card on file for you to place your order."
    )
  });

  it("lets you place an order with a credit card", function() {
    addToCart('pizza')

    const t = total()

    placeOrder(123);

    expect(console.log).toHaveBeenCalledWith(
      `Your total cost is $${t}, which will be charged to the card 123.`
    )
  });

  it('empties the cart', function() {
    addToCart('pizza')

    expect(hasItem(getCart(), 'pizza')).toBe(true)

    placeOrder(123);

    expect(getCart()).toEqual([])
  })
})

function hasItem(c, item) {
  for (let i = 0, l = c.length; i < l; i++) {
    if (c[i].hasOwnProperty(item)) {
      return true
    }
  }

  return false
}
