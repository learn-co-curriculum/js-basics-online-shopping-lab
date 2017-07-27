var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {[item]: Math.floor(Math.random() * 100) + 1};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
 // write your code here
}

function viewCart() {
  var currentCart =[];

  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i in cart) {
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey]
      currentCart.push(`${itemKey} at \$${itemValue}`);
    }
  }

  if (currentCart.length < 2) {
    console.log(`In your cart, you have ${currentCart[0]}.`);
  } else if (currentCart.length < 3 ) {
    console.log(`In your cart, you have ${currentCart[0]} and ${currentCart[1]}.`);
  } else if (currentCart.length > 2) {
    var endItem = currentCart.pop();
    console.log(`In your cart, you have ${currentCart.join(", ")}, and ${endItem}.`);
  }
  // write your code here
}

function total() {
  var cost = 0;
  for (var i in cart) {
    var itemKey = Object.keys(cart[i])[0];
    var itemPrice = cart[i][itemKey];
    cost = cost + itemPrice;
  }
  return cost;
}

function removeFromCart(item) {
  var removedItem = false;
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      removedItem = true;
    }
  }
  if (!removedItem) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }

}
