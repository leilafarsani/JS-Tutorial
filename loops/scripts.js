/*
Loops
When we're writing programs, we often find that we want to repeat 
a bit of code over and over, or repeat it but change something
about it each time. To save ourselves from writing all that code, 
we use a loop. JavaScript has two main kinds of loops, a while loop and a for loop.
while loop
A while loop is a way to repeat code until some condition is evaluated to false.
For example:

let i = 0;
while (i < 20) {
  someFunction(i);
  i++;
}

It's a convention to use i in loops. You could use any valid 
string as your variable name: loops don't have special rules.
Programmers use i to remind ourselves this is an iterator.
Notice the line i++ - this is the same as saying i = i + 1 
It does exactly the same thing but it is just more convenient to write.
INFINITE LOOP ∞
It's important that the condition inside the parenthesis
becomes false at some point - otherwise, we'll have what's 
known as an infinite loop.
EXERCISE
Write a function that:
Takes one number n as a parameter
Adds all numbers from 0 to n. For example, if the input is 3,
the output should be 0 + 1 + 2 + 3
You should use a while loop
 */
function sumUpToN(n) {
  let sum = 0;
  let i = 0;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

console.log(sumUpToN(4));
/*
for loop
The for loop is similar to a while loop, but with a more specialized syntax. 
Programmers invented the for loop when they realized they were always doing
the same three things: creating loop counter variables (like i above), 
incrementing them by some amount, and checking that they're less than a value.
The for loop syntax has special places for each of those three things.
 Here's the first while loop above, now written as a for loop:

 for (let i = 0; i < 20; i++) {
  someFunction(i);
} 
EXERCISE
Write a function, similar to the last exercise, that:

Takes one number n as a parameter
Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
You should use a for loop*/
function sumUpToN(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumUpToN(5));
/*
for of loop
The for of loop The for...of statement creates a loop iterating
over iterable objects...~MDN
An iterable object is something that can be counted. 
A basket of seventeen apples is an iterable object. 
You might write a rule that says "check each apple in this basket 
and if it's green, yell BARNY". 
Let's try this out with strings, an iterable object in JS. */
const myFirstName = "Sally";

for (const letter of myFirstName) {
  console.log(letter);
}
/*
To JavaScript, your name is a string of characters.
It has a length, and you can access each characters 
with bracket notation, like this: */

console.log(myFirstName.length); //5
console.log(myFirstName[1]);
/*
It's an iterable object. Let's work through this "offline". 
We don't need to write any code. We can play computer ourselves
just by understanding the rules of JavaScript.

EXERCISE, IN PAIRS, (10 MINS)
Each person write down their first name. Write it out like this S A L L Y
and number the letters with a zero-indexed count like this 0 1 2 3 4.
Now pick a letter of the alphabet, any letter, and make up a rule for your
partner to say, do, or act out. You could make them meow like a cat,
or draw a picture, or anything (fun and nice).
The first player, speak your rule - say "For each letter of your name,
if that letter is $letterYouChose, do $ruleYouInvented."
The second player, hold up your name and act out the for of loop.
Now swap!

******************************
So to sum up, for of loops are pretty similar to for loops, but:
they only work on iterable objects
the iterator is the value, directly, so you don't need to access
the value using bracket notation
you don't need to set an end case as the loop will always
go through every value in the iterable object and then end
Next week, we will think more about the most common 
iterable object in JavaScript: arrays.*/
