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

/*A common mistake when using the logical OR operator in conditional statements is to try to state the variable whose value you are checking once, and then give a list of values it could be to return true, separated by || (OR) operators. For example:

if (x === 5 || 7 || 10 || 20) {
  // run my code
}
In this case, the condition inside if () will always evaluate to true since 7 (or any other non-zero value) always evaluates to true. This condition is actually saying "if x equals 5, or 7 is true — which it always is". This is logically not what we want! To make this work you've got to specify a complete test on either side of each OR operator:

if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
} 

The conditional (ternary) operator is the only JavaScript operator 
that takes three operands: a condition followed by a question mark (?),
then an expression to execute if the condition is truthy followed by
a colon (:), and finally the expression to execute if the condition is falsy.
This operator is frequently used as an alternative to an if...else statement.

Syntax
condition ? exprIfTrue : exprIfFalse
*/
let x = 15;
let y = 7;
x>y? console.log("x is greater than y") : console.log("x");

/*Conditional chains
The ternary operator is right-associative, which means it can be "chained" 
in the following way, similar to an if … else if … else if … else chain:

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
} would be as follows with ternary operator*/ 
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

// Question ?
// how is ternary without else, or better to say binary :)))))