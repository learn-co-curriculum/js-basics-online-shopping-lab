var orderNumber = 1

var total = 0

var cardNumber;


function addToCart(item){
  var random = Math.random();
  var price = Math.floor(random * 100);
  cart[item] = price;
  total += price;
  console.log(item + " has been added to your cart")
}

function viewCart(){
  if (Object.keys(cart).length == 0){
    console.log("Your shopping cart is empty");
  }
  else {
    for (var key in cart) {
      console.log("In your cart you have: " + key + " $" + cart[key]);
    }
  }
}

function addCreditCard(creditCardNumber){
  cardNumber = creditCardNumber;
}

function removeFromCart(item){
  price = cart[item];
  total -= price;
  delete cart[item];
  console.log(item + " has been removed from your cart")
}

function placeOrder(){
  viewCart();
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    cart = {};
    total = 0;
    orderNumber ++;
  }
}

