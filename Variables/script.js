/*Variables
Variables are containers for storing data (storing data values).
When you write code, you'll want to create shortcuts to data values 
so you don't have to write out the same value every time.
We can use a variable to create a reference to a value. Variables 
can be thought of as named containers. You can place data into these 
containers and then refer to the data simply by naming the container.
Declaring a JavaScript Variable
Creating a variable in JavaScript is called "declaring" a variable.

Before you use a variable in a JavaScript program, you must declare it. 
4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing

Always declare JavaScript variables with var,let, or const.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.

If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
Use descriptive names

Note
It's a good programming practice to declare all variables at the beginning of a script.

After the declaration, the variable has no value (technically it is undefined).
Value = undefined
In computer programs, variables are often declared without a value.
The value can be something that has to be calculated, 
or something that will be provided later, like user input.
let carName;

A variable declared without a value will have the value undefined.

The variable carName will have the value undefined after the execution of this statement:
To assign a value to the variable, use the equal sign:
You can also assign a value to the variable when you declare it:
The Assignment Operator
The assignment (=) operator is used to assign a value to a variable. The assignment operation
evaluates to the assigned value. Chaining the assignment operator is possible 
in order to assign a single value to multiple variables.
In JavaScript, the equal sign (=) is an "assignment" operator,
not an "equal to" operator.
This is different from algebra. The following does not make sense in algebra:
x = x + 5
In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.
(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)
let x = 5;
let y = 10;
let z = 25;

x = y; // x is 10
x = y = z; // x, y and z are all 25
Note
The "equal to" operator is written like == in JavaScript.

One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:
Addition assignment (+=)
The addition assignment (+=) operator adds the value of the right operand to a variable 
and assigns the result to the variable. The types of the two operands determine
the behavior of the addition assignment operator. Addition or concatenation is possible.
Syntax
x += y // x = x + y

let baz = true;
// Boolean + Number -> addition
baz += 1; // 2
// Number + Boolean -> addition
baz += false; // 2

let foo = "foo";
// String + Boolean -> concatenation
foo += false; // "foofalse"

// String + String -> concatenation
foo += "bar"; // "foofalsebar"

let bar = 5;
// Number + Number -> addition
bar += 2; // 7

// Number + String -> concatenation
bar += "foo"; // "7foo"

Multiplication assignment (*=)
The multiplication assignment (*=) operator multiplies a variable by the value of
the right operand and assigns the result to the variable.
let bar = 5;

bar *= 2; // 10
bar *= "foo"; // NaN


Exponentiation assignment (**=)
The exponentiation assignment (**=) operator raises the value of a variable to the power of
the right operand.
let bar = 5;

bar **= 2; // 25
bar **= "foo"; // NaN

Division assignment (/=)
The division assignment (/=) operator divides a variable by the value of the right operand.
let bar = 5;
syntax
x /= y // x = x / y
bar /= 2; // 2

Remainder assignment (%=)
The remainder assignment (%=) operator divides a variable by the value of 
the right operand and assigns the remainder to the variable.
Syntax
x %= y // x = x % y
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

Subtraction assignment (-=)
The subtraction assignment (-=) operator subtracts the value of the right
operand from a variable and assigns the result to the variable.
Syntax
x -= y // x = x - y
let bar = 5;

bar -= 2; // 3
bar -= "foo"; // NaN

Logical OR assignment (||=)
The logical OR assignment (x ||= y) operator only assigns if x is falsy.

Logical AND assignment (&&=)
The logical AND assignment (x &&= y) operator only assigns if x is truthy.

Left shift assignment (<<=)
The left shift assignment (<<=) operator moves the specified amount of bits to the
left and assigns the result to the variable.

Right shift assignment (>>=)
The right shift assignment (>>=) operator moves the specified amount of bits to the right
and assigns the result to the variable.
*/
let greeting = "Hello world";
console.log(greeting);
const name = "Irina";
console.log(name);
/*
EXERCISE
Add a variable greeting to js1-week1.js and assign a greeting of your choice 
to the variable Print your greeting to the console 3 times. You should see your
greeting 3 times on the console, one on each line.
 */
let greetings = "How are you doing?"
console.log(greetings);
console.log(greetings);
console.log(greetings);
/*Re-Declaring JavaScript Variables
If you re-declare a JavaScript variable declared with var, 
it will not lose its value.
The variable carName will still have the value "Volvo" after the 
execution of these statements: */
var car = "Volvo";
var car = "BMW";
console.log(car);
/*Note
You cannot re-declare a variable declared with let or const.

This will not work:

let carName = "Volvo";
let carName; */

//P.S https://www.syncfusion.com/blogs/post/10-javascript-naming-conventions-every-developer-should-know.aspx
//https://arcticicestudio.github.io/styleguide-javascript/rules/naming_conventions.html#camelcase