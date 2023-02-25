/*
Conditionals
Like humans, computer programs make decisions based on the information given to them. Conditionals are a way of representing these decisions in code (remember, you saw this in a previous exercise!)

For example:

In a game, if the player has 0 lives, then the game is over
In a weather app, if rain is forecast, a picture of rain clouds is shown
The most common type of conditional is the if statement.

An if statement runs some code if a condition is met. If the condition is
not met, then the code will be skipped. */
let isHappy = true;

if (isHappy) {
  console.log("I am happy");
}
/*
The code in paratheses - e.g. (isHappy) - is the condition.
The condition can be any expression. 
The following are all valid conditions: 
// boolean value
if (true) {
  // do something
}

// variable assigned to boolean value
let isHappy = true;
if (isHappy) {
  // do something
}

// equality operator returns a boolean value
if (1 + 1 === 2) {
  // do something
}

// comparison operator returns a boolean value
if (10 > 5) {
  // do something
}

// function call returns boolean value
if (greaterThan10(5)) {
  // do something
}
An if statement runs code when a condition is met. What if the condition is not met? 
Sometimes you want to run an alternative bit of code.
An if...else statement also runs code when the condition is not met.

*/
let issHappy = false;
if (issHappy) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}
/*
What if there is more than one condition you want to handle in your function? 
For example, what if you can be confused as well? You can use else if 
to handle multiple conditions. 
EXERCISE
Can you explain what this function does line by line? 
What happens when you pass in a string?*/
function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}
console.log(numberChecker("200"));
console.log(numberChecker("20"));
console.log(numberChecker(5));
/*
EXERCISE
Create a function that gives you a message depending on your mood! It should:

take one input
return "Good job, you're doing great!" if you pass in "happy"
return "Every cloud has a silver lining" if you pass in "sad"
return "Beep beep boop" if you pass in a number
return "I'm sorry, I'm still learning about feelings!" if you pass in anything else
 */
function moodMessage(mood) {
  if (mood === "happy") {
    return "Good job, you're doing great!";
  } else if (mood === "sad") {
    return "Every cloud has a silver lining";
  } else if (typeof mood === "number") {
    return "Beep beep boop";
  } else {
    return "I'm sorry, I'm still learning about feelings!";
  }
}
console.log(moodMessage(4));


