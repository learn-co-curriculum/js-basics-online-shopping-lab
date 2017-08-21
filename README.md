# Online Shopping

## Objectives
+ Model a shopping cart full of items as an array of objects in JavaScript.
+ Practice dynamically setting properties (keys) of an object.
+ Work with `Object.keys()` and `.hasOwnProperty()` to retrieve and verify an object's keys.
+ Iterate over arrays with `for` loops
+ Use ES6 `${template literals}` instead of `"regular, " + "old " + string + " concatenation."`
+ Brush up on conditionals and control flow to make some Oxford comma magic happen.

## Instructions
We've started you off with a `cart` variable that points at an empty array. There are five functions that you'll have to code in order to create a working shopping cart:
1. The `addToCart()` function accepts one argument, the name of an item.
    + Use that passed-in string to create a new object representing the item. The object should consist of one key-value pair in which the key is the item's name and the value is a randomly-generated price: `{ itemName: itemPrice }`. As more items are added, the `cart` should start to look something like this: `[ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]`.
    + The price of each item should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + If you're struggling to create a new object from the item name, remember that ES6 provides a nifty way to dynamically set the keys in an object literal. That is, it allows the use of variables as keys. If you're having trouble recalling the syntax, take a look back at the **Top Tip** in the [JavaScript Objects](https://learn.co/lessons/javascript-objects) lesson.
    + Upon the successful addition of a new item to the cart, the function should print `<itemName> has been added to your cart.` to the console and then `return` the updated `cart`.
2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, printing out the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The printed statement should be a single sentence that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17 and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
3. The `total()` function accepts no arguments, iterates through the `cart` array, and returns the current total value of the items in the cart.
4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    + If the cart does not contain a matching item, the function should print out `That item is not in your cart.` and return the unchanged cart.
    + If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
    + ***HINT***: Check each object's key (the name of the item) to see if it matches the parameter, then remove it if it matches. You might find [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) to be useful.
5. The `placeOrder()` function accepts one argument, a credit card number.
    + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
    + If a card number is received, the function should print out `Your total cost is $71, which will be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`). Then, it should empty the `cart` array.

## The final send-off
This lab is _not_ easy! The methods, especially `viewCart()` require careful planning and a sharp eye. The `cart` array is a non-trivial nested data structure, and it would be a good idea to periodically check the value of your variables (think: `console.log()`, `debugger`, etc.) at different points within your functions, _especially_ when attempting to iterate over the `cart` and its items.

<p class='util--hide'>View <a href='https://learn.co/lessons/js-basics-online-shopping-lab'>Online Shopping Lab</a> on Learn.co and start learning to code for free.</p>
