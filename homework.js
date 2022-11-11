// * =============== JavaScript Callbacks and Arrow Functions HW ===============

// TODO: What's a Callback Function and when Are They Used?
// ! A callback function is a function that is passed to another function with the expectation that the other function will call it.

// Here are three use-cases for callback functions:
//  1. To provide a function to be called by a higher-order function such as forEach or compute.
//  2. To provide a function to be executed each time an event happens - Event Listeners.
//  3. To provide a function to be executed when an asynchronous process has completed.

// const colors = ["red", "green", "blue"];

// ===== forEach

// colors.forEach(function (color, idx) {
//   console.log(`${idx + 1} - ${color}`);
// });

// Above is an anonymous inline function being passed to forEach as its one and only argument, is a callback function.
// CS Vocab: Higher Order Function: accepts a function as an argument and/or returns a function to its callers

// ===== Event Listeners

// gameboard.addEventListener('click', handleClick);

// ===== compute

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// op: operation
function compute(a, b, op) {
  return op(a, b);
}

let result1 = compute(10, 5, add);
let result2 = compute(10, 5, subtract);

console.log(result1); // output: 15
console.log(result2); // output: 5

//=============================================================================================

// TODO: Using Callbacks with Array Iterator Methods
// ! Most popular use-cases for callback functions is to use them on iterator methods on arrays

// forEch to iterate over all items in an array
//  - JavaScript, forEach is designed to
//      1. Accept a callback function as an argument
//      2. Invoke that callback once for each element in the array

// How many times would the anonymous callback function below be called?**:
// answer: It would be called 3 times

// const flowers = ['rose', 'orchid', 'daisy'];

// flowers.forEach(function(flower, idx) {
//   console.log(`${idx + 1}) ${flower}`);
// });

//=============================================================================================
// TODO: Using Callbacks with Asynchronous Functions

// * So far, most of the code we've written is synchronous code.
// Synchronous code is when a line of code completely finishes executing before the next line of code runs.

const colors = ["red", "green", "blue"];

console.log("BEFORE the forEach..."); // displays first

// == synchronous function
colors.forEach(function (color, idx) {
  // displays next
  console.log(`${idx + 1} - ${color}`);
});

console.log("AFTER the forEach..."); // will not display until synchronous code is finished executing

// * Asynchronous Code
// Unlike the synchronous code we saw above, the code following an asynchronous function call continues to run before the async function finishes.

console.log("Code before the asynchronous function call"); // displays first

// == asynchronous function
setTimeout(function () {
  console.log("setTimeout code"); // <-- will display last because next line of code wil run before this is finished
});

console.log("Code after the asynchronous function call"); // runs before the async in done

// ! == Purpose of Asynchronous Functions ==

// 1. Necessary in JS, JS runs on a single CPU thread dedicated to handling events, running your code etc...
// 2. JS reduces wait times for input/output operations, i.e. (fetching data across the internet)
//     Example: The browser itself when fetching images as the page loads at the same time,
//              by using callbacks and event loops (browser event loops)

// * JavaScript uses -callbacks- and -promises- s a function after an asynchronous operation completes its long running process:
// ! Functions that are asynchronous must be designed to either:
//     - Accept a callback function, or
//     - Return a promise

//  - Callbacks: makes it possible to work with Asynchronous functions by refactoring it to accept a callback function.

// == Refactor to accept a callback function
// to be called when the data is ready
function getFriendsAsync(cb) {
  setTimeout(function () {
    // pass the results to the provided callback
    cb(["Fred", "Barney"]);
  }, 0);
}

// Execute and provide it with an anonymous callback function
// to be called by the getFriendsAsync function
getFriendsAsync(function (friends) {
  friends.forEach(function (friend) {
    console.log(friend);
  });
});

//=============================================================================================

// TODO: Arrow Functions

// * A. A single -parameter- does not have to be wrapped in parenthesis
// * B. A single -expression- (not a statement): curly braces are optional
// * C. Arrow functions will implicitly return the result of an expression without a block (braces)
// * D. To implicitly return a JS object, wrap it in parens to avoid the curly braces of the object being interpreted as a statement block.
// ! All arrow functions are expressions. There's no such thing as an arrow function definition/declaration.

//=============================================================================================

// * ===== Review Questions ===== * \\

// #1
//=====❓ When the add and subtract functions are passed as arguments to the compute function - they are ______ functions.
//       answer: higher order functions

// #2
//=====❓ In your own words describe what the term "implicit return" means.

//      answer: Only expressions without curly braces will have an implied return when using an arrow function;
//              (JS Object: wrapping it in parenthesis avoids the curly braces being interpreted as a statement block.)

// #3
//======❓ Describe what a callback function is in your own words.

//      answer: A callback is function that takes another function as an argument; either as an anonymous inline function or high order function
