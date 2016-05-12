/*global beforeEach, describe, it */

const chai = require('chai')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const spies = require('chai-spies')

chai.use(spies)

const expect = chai.expect

describe('shopping', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'shopping.js'), 'utf-8')
  })

  beforeEach(() => {
    setCart([])
  })

  describe('#addToCart', () => {
    it("should add an item to the cart", () => {
      addToCart('pizza')

      expect(getCart().length).to.equal(1);
    });

    it("logs that the item has been added", () => {
      chai.spy.on(console, 'log')

      addToCart('pizza')

      expect(console.log).to.have.been.called.with("pizza has been added to your cart.");

      console.log.reset()
    })

    it("returns the cart", () => {
      expect(addToCart("pizza")).to.eql(getCart())
    })
  });

  describe('#viewCart', () => {
    it("should print each item in the cart and their cost", () => {
      chai.spy.on(console, 'log');

      addToCart("socks");
      addToCart("puppy");
      addToCart("iPhone");

      const socksCost = getCart()[0]["socks"];
      const puppyCost = getCart()[1]["puppy"];
      const iPhoneCost = getCart()[2]["iPhone"];

      viewCart();

      expect(console.log).to.have.been.called.with(`In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.`)
      console.log.reset()
    });
  });

  describe('#total', () => {
    it('adds up the prices of the items in the cart', () => {
      addToCart("socks");
      addToCart("puppy");
      addToCart("iPhone");

      const socksCost = getCart()[0]["socks"];
      const puppyCost = getCart()[1]["puppy"];
      const iPhoneCost = getCart()[2]["iPhone"];

      var totalCost = socksCost + puppyCost + iPhoneCost

      expect(total()).to.equal(totalCost)
    })
  })

  describe('#removeFromCart', () => {
    it("removes the item from the cart", () => {
      addToCart('pizza')

      expect(hasItem(getCart(), 'pizza')).to.equal(true)

      removeFromCart("pizza");
      expect(getCart()).to.eql([]);
    });

    it("alerts you if you're trying to remove an item that isn't in your cart", () => {
      chai.spy.on(console, 'log');

      removeFromCart("sock")

      expect(console.log).to.have.been.called.with("That item is not in your cart.");
    });
  });

  describe('#placeOrder', () => {
    it("doesn't let you place an order if you don't provide a credit card number", () => {
      chai.spy.on(console, 'log');

      placeOrder();

      expect(console.log).to.have.been.called.with("We don't have a credit card on file for you to place your order.");

      console.log.reset()
    });

    it("lets you place an order with a credit card", () => {
      chai.spy.on(console, 'log');

      addToCart('pizza')

      const t = total()

      placeOrder(123);

      expect(console.log).to.have.been.called.with(`Your total cost is $${t}, which will be charged to the card 123.`)

      console.log.reset()
    });

    it('empties the cart', () => {
      addToCart('pizza')

      expect(hasItem(getCart(), 'pizza')).to.be.true

      placeOrder(123);

      expect(getCart()).to.eql([])
    })
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
