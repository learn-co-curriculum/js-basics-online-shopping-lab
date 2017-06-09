# Online Shopping

## Objectives
+ Create and manipulate objects
+ Create and manipulate arrays
+ Create and call functions
+ Create and use variables
+ Use string methods
+ Use number methods

## Introduction
Before we dive into this lab, we need to tell you something: remember how easy it was to iterate over an array with a `for` or a `while` loop? Well, it's nearly as easy to iterate over an object in the same way. (Remember, arrays are essentially fancy objects — it makes sense that iteration would be similar.)

But objects don't have sequential indexes like arrays do, so we need another way of getting the keys. Luckily, that's exactly what `Object.keys()` is for!

```js
var meals = {
  breakfast: 'oatmeal',
  lunch: 'tuna',
  dinner: 'spaghetti'
};

var mealNames = Object.keys(meals);

for (var i = 0, l = mealNames.length; i < l; i++) {
  console.log(`I ate ${meals[mealNames[i]]} for ${mealNames[i]}!`);
}

// I ate oatmeal for breakfast!
// I ate tuna for lunch!
// I ate spaghetti for dinner!
```

But this is a little verbose and sort of hard to read. We have to get the name of the meal using `mealNames[i]` and then use that name as a key in the object `meals` to get the food for that meal: `meals[mealNames[i]]`. Gross.

There's a (slightly) better way! JavaScript has a special loop, called `for...in`, that makes iterating over objects a bit easier:

``` javascript
var meals = {
  breakfast: 'oatmeal',
  lunch: 'tuna',
  dinner: 'spaghetti'
}

for (var mealName in meals) {
  console.log(`I ate ${meals[mealName]} for ${mealName}!`)
}
```

Much better.

***NOTE***: You can use `for...in` loops with arrays, too, but the variable that you get will just be the index (in order), so this particular loop is _usually_ used with objects.

## Instructions
+ We've started you off with a `cart` variable that points at an empty array.
+ There are five functions that you'll have to code in order to create a working shopping cart:
  1. The `addToCart()` function accepts one argument, the item that's being added to the cart.
    + `addToCart()` should automatically assign a price to each item that it adds. The price should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + The new item should be added to the cart as an object in the following form: `{ itemName: itemPrice }`. As more items are added, the `cart` should start to look something like this: `[ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]`.
    + Upon the successful addition of a new item to the cart, the function should print `<itemName> has been added to your cart.` to the console and then `return` the updated `cart`.
  2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, printing out the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The printed statement should be a single sentence that begins with `In your cart, you have `, terminates in a period, and can take the following shapes according to how many items the cart contains:
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
    + If a card number is received, the function should print out `` `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.` `` and then empty the `cart` array.

<p class='util--hide'>View <a href='https://learn.co/lessons/js-basics-online-shopping-lab'>Online Shopping Lab</a> on Learn.co and start learning to code for free.</p>
