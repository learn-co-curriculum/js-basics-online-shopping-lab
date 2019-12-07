var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  let price = Math.floor(Math.random()*100);
  let itemObj = {
    itemName: item,
    itemPrice: price
  }
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else{
    let message = 'In your cart, you have ';
    for(let i = 0; i < cart.length - 1; i++){
      message = message + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    message = message + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    return message;
  }
}

function total() {
  // write your code here
  let totalPrice = 0;
  for(let i = 0; i < cart.length; i++){
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var removeCounter = 0;
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      removeCounter++;
    }
  }
  if (removeCounter === 0){
    return 'That item is not in your cart.';
  }
  else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    const message =  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return message;
  }
}
