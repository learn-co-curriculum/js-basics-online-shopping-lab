var cart = []

function getCart() {

}

function setCart(c) {
  cart = c
}

function addToCart(item) {

}

function viewCart() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
