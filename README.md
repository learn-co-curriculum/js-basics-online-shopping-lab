# Online Shopping

## Objectives
+ Create and manipulate hashes
+ Create and manipulate arrays
+ Create and call functions
+ Create and use variables
+ Use string methods
+ Use number methods


## Instructions

+ Declare four variables: 
	+ `orderNumber` which will store the user's order number for their purchase. This number will get incremented after every purchase
	+ `total` which will store the total cost of the items in the shopping card
	+ `cardNumber` which will store the credit card number when the user choses to enter 
	+ `cart` which will store an empty array. Items will be added to the cart as objects (the key the name of the item and the value the price of the item)
 

+ Define a function `addToCart`. This function should accept a parameter of the item the user wants to purchase. This function should automatically set a price for this item by generating a random number between 0 and 100. This function should add the item and the price as an object ({`item: price}`) to the `cart` array. The price of the item should be added to the `total` variable. This function should print out to the console `<item> has been added to your cart` and return cart.

+ Define a function `viewCart` which does not accept any arguments. This function should loop over every item in `cart` to print out `"In your cart you have: <item> $<price>"`. If there isn't anything in your cart, the function should print out `Your shopping cart is empty"`.

+ Define a function `addCreditCard` which accepts a credit card number as parameter. The function should store the number passed in as a parameter to the `cardNumber` variable. The function should print out to the console `"Your credit card number has been saved."` and return `cardNumber`.

+ Define a function `removeFromCart` which accepts a parameter of the item you wish to remove. If the item isn't in the cart, the function should print out `"That item is not in your cart"`. If the item is in your cart, it should remove the price of the item from `total`, and remove the object from the `cart` array.

+ Define a function `placeOrder` which does not accept a parameter. The function should check to see if the user has a credit card number on file. If cardNumber is undefined, the function should print out `"We don't have a credit card on file for you to place your order"`. If there is a credit card on file, the function should print out `"Your total cost is: $<total> and will be charged to the credit card on file <cardNumber>. Your order number is  <orderNumber>"`. The function should clear the `total` and `cart` and increment `orderNumber`.


<p class='util--hide'>View <a href='https://learn.co/lessons/js-basics-online-shopping-lab'>JS Basics Online Shopping Lab</a> on Learn.co and start learning to code for free.</p>
