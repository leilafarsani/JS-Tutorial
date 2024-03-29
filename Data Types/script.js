/*Strings
In programming there are different types of data. 
You've used one data type already: string.
Computers recognise strings as a sequence of characters
but to humans, strings are simply lines of text.
Notice that strings are always wrapped inside of quote marks.
We do this so that the computer knows when the string starts and ends.
You can check that the data is a string by using the typeof operator:
 */
const message = "This is a string";
const messageType = typeof message;

console.log(messageType);
/*
Write a program that:
creates a variable called colors
assigns colors "blue" and "yellow" as a comma separate string to colors
logs the type colors using typeof.
What is the typeof a number?
 */
let colors = "blue, yellow";
console.log(typeof colors);
console.log(colors);

/*String concatenation
You can add two strings together using the plus operator (+) or string interpolation.
String interpolation is a useful JavaScript feature that allows you 
to put variables directly into a string:
 */
// Here is an example using the plus operator to concat strings
const greetingStart = "Hello, my name is ";
const name = "Daniel";
const greeting = greetingStart + name;
console.log(greeting); // Logs "Hello, my name is Daniel"
// Here is example using the String interpolation to concat strings
const greetingStarts = "Hello";
const myName = "Daniel";
const greetings = `${greetingStarts}, my name is ${myName}`;
console.log(greetings); // Logs "Hello, my name is Daniel"
/*
EXERCISE
Write a program that logs a message with a greeting and your 
name using the two concatenation methods we used
Numbers
The next data type we will learn is number.
Unlike strings, numbers do not need to be wrapped in quotes.*/
const age = 30;
//You can use mathematical operators to calculate numbers:
const sum = 10 + 2; // 12
const product = 10 * 2; // 20
const quotient = 10 / 2; // 5
const difference = 10 - 2; // 8
/*Floating point numbers
Numbers can be integers (whole numbers) or floats (numbers with a decimal point).
 */
const preciseAge = 30.612437;
/*Numbers with decimals can be rounded to the nearest whole 
number using the Math.round function:*/
const myPreciseAge = 30.612437;
const roughAge = Math.round(preciseAge); // 31
/*EXERCISE
Create two variables numberOfTrainees and numberOfMentors
Log a message that displays the total number of trainees and mentors
Number of trainees: 15
Number of mentors: 8
Total number of trainees and mentors: 23*/
let traineesNum = 15;
let mentorsNum = 8;
total = traineesNum + mentorsNum;
console.log("The total is " + total);
/*EXERCISE
Using the variables you created in the previous steps, calculate
the percentage of mentors and trainees in the group (percentages 
must be rounded to the nearest integer)
You should then log this number to the console.
Expected Result
Percentage of trainees: 65%
Percentage of mentors: 35%
*/
let traineesNumPercentage = (traineesNum / total) * 100;
let mentorsNumPercentage = (mentorsNum / total) * 100;
console.log(Math.round(traineesNumPercentage) + "%");
console.log(Math.round(mentorsNumPercentage) + "%");

/*
Statements and expressions
In JavaScript, sections of code can be called expressions and statements. 
We will use these words frequently to describe code.
Expression
Any unit of code that can be evaluated to a value is known as an expression.
We say that an expression evaluates to a value. We use expressions all 
the time in lot of different places:
they can be assigned to variables
returned from functions (more on this later)
passed as arguments to functions (more on this later)
combined with other expressions to form new expressions
The following are all examples of expressions:
1 + 1; // evaluates to 2
("hello"); // evaluates to "hello"
2 * 4; // evaluates to 8
"Hello" + "World"; // evaluates to "HelloWorld"
We can take the value produced by an expression and assign it to a variable.
let total = 1 + 1; // assign the value 2 (the value produced by the expression 1 + 1)
 to a variable total

let greeting = "hello"; // assign the value "hello" 
(the value produced by the expression expression "hello") to a variable greeting

let product = 2 * 4; // assign the value 8 (the value produced by the expression 2 * 4) 
to a variable product

let worldGreeting = "Hello" + "World"; // assign the value "HelloWorld" 
(the value produced by the expression "Hello" + "World" to a variable worldGreeting)

EXERCISE
You can run node by itself, which will open a node console, 
also called a Read–Eval–Print Loop (REPL).
This console allows you to enter code in the console line by line 
and is a great way of testing bits of code before writing it in a script. 
Each time you press enter, it will print out what the expression you typed evaluates to.
In your terminal, run the command node and then enter a line of code from the code below
and then run enter. Do this for each line of code in the list. 
Think about the following questions each time:
What is the output in the terminal each time ? Is there anything you didn't expect ?
Can you work out which of the lines of code below are expressions and which are not ?
Add some example here
Remember it can only be an expression if you can place it on the right
hand side of an assignment.

1 + 2;

("hello");

"hello" + " " + "trainees and volunteers!";

let favouriteColour = "purple";

favouriteColour;

"hello" + 42;

if (true) {
}

const hoursInADay = 24;

hoursInADay * 7;

`My favourite colour is ${favouriteColour}`;

Statement
A statement is some code that typically carries out an instruction. 
You have encountered statements already:
const greeting = "Hello Code Your Future!";
The above piece of code is a variable declaration, which is also a statement.
This statement is an instruction to store the value
 "Hello Code Your Future!" in the variable greeting.
There are other different types of statements that we 
will learn about in the coming weeks, such as an if statement.


Functions
Functions are blocks of code that can do a task as many times as you ask them to. 
They take an input and return an output.
Here's a function that doubles a number:*/
function double(number) {
  return number * 2;
}
//To use a function then we we need to call it ( some people will say invoke )
const result = double(2);
console.log(result); // 4
/* The function double is being called by placing parathenses
 after the name of the function like this double()
🔑 The input given to a function is called a argument
🔑 A parameter is a variable that is used to refer to an argument
In the example above, we're saying that inside the function double, 
there is a variable called number, but we don't know what the value 
of the variable is until someone calls the function, at which point 
they will give a value for that variable.
A function can have one or more parameters, check out the example below:*/
function add(a, b) {
  return a + b;
}
/*
 In the function add, the parameters are a and b.
If we call the function like this add(10, 32) then we're passing 
2 arguments (or inputs) into the function : 10 and 32. We can use 
any expression as an argument.
When you write a function (sometimes called declaring a function) 
you can define the parameters with any valid variable name.
The function below does exactly the same thing as the one above:*/
function add(num1, num2) {
  return num1 + num2;
}
/*EXERCISE 1
Create a function called formatPenceToPounds that should
take a number as an input ( representing an amount of money in pence )
return a string starting with a £ sign and the input number converted to pounds.
For example, formatPenceToPounds(199) should evaluate to "£1.99"
In your groups, think carefully about the following things:
what the parameter name should be
creating good names for any variables you use
don't use console.log inside the body of the function
Call formatPenceToPounds a few times with different inputs and console.log 
the outputs in order to check your function. 🙂
 */
function formatPenceToPounds(number) {
  let numberInPound = number / 100;
  return "£" + numberInPound;
}
let convertedNumber = formatPenceToPounds(199);
console.log(convertedNumber);
//EXERCISE 2
//Check out the code below:
function printMessage(x) {
  console.log("Hello, nice to meet you " + x);
}

function getMessage(name) {
  return "Hello, nice to meet you " + name;
}

printMessage("Mitch");

printMessage("August");

getMessage("Laetitia");
/* The functions above behave similarly but differ in some important ways.
In groups, study the code above and then answer the following questions:
How many times is the function printMessage called ?
How many times is the function getMessage called ?
What is the parameter name for the function printMessage ?
What is the parameter name for the function getMessage ?
Discuss briefly which parameter name is better out of the two functions and why ?
What is the return value of the function printMessage whenever it is called ?
Someone then creates 2 further variables messageForAli and curiousMessage:*/
const messageForAli = getMessage("Ali");

const curiousMessage = getMessage(42);
/*
f) What will the variable messageForAli evaluate to when the code above 
is executed ? g) What will the variable curiousMessage evaluate to when
the code above is executed ?
Remember you can use console.log to log variables in order to check your
answers to f) and g)
Hint: Think carefully about the parameters and arguments 
for getMessage for part g)

Booleans
There is another primitive type in JavaScript known as a boolean value. 
A boolean is either true or false, and it should be written without quotes.
let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;
We can use boolean values to make decisions in our code based on
certain conditions, as we shall see later on.
Comparison Operators
We can also create an expression that evaluates to a boolean value - that is,
either true or false. This is possible when we use comparison operators such as ===. 
This comparison operator will check if two values are the same.
For example,
42 === 42 will evaluate to true. You can check this by logging the 
expression 42 === 42 in the Node REPL.
42 === 50 will evaluate to false. You can also check this out by 
logging the expression 42 === 50 in the Node REPL.
Using a comparison operator will always return a boolean value.

checkIsTrue
Let's pretend that we have created a function checkIsTrue that checks if
 an expression evaluates to true or false. For the time being, you don't
need to know how the function is implemented - you will only need to 
understand what the function does.
For example,
checkIsTrue(10 === 10) should print "Yes, this expression evaluates to true! ✅" 
checkIsTrue(3 > 10000) should print "Sorry, this expression evaluates to false! ❌"
Can you work out what will happen with the code below?
checkIsTrue(1 > 2);
// and...
checkIsTrue(2 < 1);
The > symbol in the expressions above is also a comparison operator. 
This operator checks to see if the number on the left is bigger than 
the number on the right.
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value and same type
!== not the same value and type
You might see people use two other comparison operators, == and !=. 
They are valid, but are the evil twins of === and !== and it's generally considered 
bad practice because of the bugs they can cause.
✘ - Do not use == and !=
== equal compares only value
!= unequal compares only value
✔ - Do use === and !==
=== equal compares both value and type
!== unequal compares both value and type
If you see these, suggest people change them in pull requests.
EXERCISE 1
What do typeof true and typeof false evaluate to - write 
some code and log the output to the console to work out the answer.
EXERCISE 2
Check out the code below.
Replace the variable FILL_ME_IN with actual values to prevent the
checkIsTrue function from logging an error message.
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

*/
const mentorCount = 10;
const traineeCount = 12;
checkIsTrue(mentorCount < traineeCount);

const capacity = 3;
const people = 1;
checkIsTrue(capacity > people);

const organisation = "Code your Future!";
checkIsTrue(typeof organisation === "string");
checkIsTrue(organisation.startsWith("Code"));
checkIsTrue(organisation.includes(" your "));
checkIsTrue(organisation.endsWith("Future!"));

const mystery = true;
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
/*
EXERCISE 3
Create a function called isEven that should

take a number as an input
return a boolean indicating if the number is even or odd
Remember to avoid using console.log inside the function itself
E.g. isEven(100) should return true E.g. isEven(53) should return false
Call your function with a number of different inputs to check your 
function is working as expected. 😄
Bonus: Can you ensure your function doesn't use an if statement for this exercise 😎 
*/ function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(6));
