/*Booleans
There is another primitive type in JavaScript known as a boolean value. 
A boolean is either true or false, and it should be written without quotes.
let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;
We can use boolean values to make decisions in our code based on certain conditions,
as we shall see later on.
Comparison Operators
We can also create an expression that evaluates to a boolean value - that is, 
either true or false. This is possible when we use comparison operators such as ===. 
This comparison operator will check if two values are the same.

For example,

42 === 42 will evaluate to true. You can check this by logging the expression 42 === 42 in the Node REPL.

42 === 50 will evaluate to false. You can also check this out by logging the expression 42 === 50 in the Node REPL.

*** Using a comparison operator will always return a boolean value.

checkIsTrue
Let's pretend that we have created a function checkIsTrue that checks if an expression 
evaluates to true or false. For the time being, you don't need to know how the function
is implemented - you will only need to understand what the function does.

For example,

checkIsTrue(10 === 10) should print "Yes, this expression evaluates to true!
 ✅" checkIsTrue(3 > 10000) should print "Sorry, this expression evaluates to false! ❌"

Can you work out what will happen with the code below?
checkIsTrue(1 > 2);
// and...
checkIsTrue(2 < 1);

The > symbol in the expressions above is also a comparison operator.
This operator checks to see if the number on the left is bigger than the number on the right.
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value and same type
!== not the same value and type

You might see people use two other comparison operators, == and !=. 
They are valid, but are the evil twins of === and !== and 
it's generally considered bad practice because of the bugs they can cause.

✘ - Do not use == and != 
== equal compares only value
!= unequal compares only value

✔ - Do use === and !==
=== equal compares both value and type
!== unequal compares both value and type

If you see these, suggest people change them in pull requests.

EXERCISE 1
What do typeof true and typeof false evaluate to - write some code 
and log the output to the console to work out the answer.

EXERCISE 2
Check out the code below.

Replace the variable FILL_ME_IN with actual values to 
prevent the checkIsTrue function from logging an error message.
*/

const mentorCount = FILL_ME_IN;
const traineeCount = FILL_ME_IN;
checkIsTrue(mentorCount < traineeCount);

const capacity = FILL_ME_IN;
const people = FILL_ME_IN;
checkIsTrue(capacity > people);

const organisation = FILL_ME_IN;
checkIsTrue(typeof organisation === "string");
checkIsTrue(organisation.startsWith("Code"));
checkIsTrue(organisation.includes(" your "));
checkIsTrue(organisation.endsWith("Future!"));

const mystery = FILL_ME_IN;
checkIsTrue(typeof mystery === "boolean");
checkIsTrue(!mystery);

// Don't change anything below this point
var FILL_ME_IN;
function checkIsTrue(value1) {
  if (value1) {
    // "\x1b[32m%s\x1b[0m" will change console output to green
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Yes, this expression evaluates to true! ✅"
    );
  } else {
    // "\x1b[31m%s\x1b[0m" will change console output to red
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Sorry, this expression evaluates to false! ❌"
    );
  }
}

/*EXERCISE 3
Create a function called isEven that should

take a number as an input
return a boolean indicating if the number is even or odd
Remember to avoid using console.log inside the function itself

E.g. isEven(100) should return true E.g. isEven(53) should return false

Call your function with a number of different inputs to check your function
is working as expected. 😄

Bonus: Can you ensure your function doesn't
use an if statement for this exercise 😎*/