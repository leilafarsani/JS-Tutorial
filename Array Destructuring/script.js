/* Array Destructuring
I learnt how to store multiple values in one variable using an array.
 */
let fruits = ["apple", "orange", "banana"];
//I also learnt that I can retrieve a value from
// an Array by using the index of the value to access it.
let firstFruit = fruits[0];
console.log(firstFruit); // This will print 'apple'

let secondFruit = fruits[1];
console.log(secondFruit); // This will print 'orange'

let thirdFruit = fruits[2];
console.log(thirdFruit); // This will print 'banana'

console.log(
  `My fruits array contains: ${firstFruit}, ${secondFruit} and ${thirdFruit}.`
);
/*
EXERCISE
We have the names of the Simpsons family stored in an array called familyMembers.
Create variables to store the names of the family members so that the console.log 
will print out the following message: 
In the Simpsons family, Homer and Marge are the parents. 
Bart is the son, Lisa is the daughter, and Maggie is the baby. */

let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// Create variables to store the values here
/*let dad = familyMembers[0];
let mum = familyMembers[1];
let son = familyMembers[2];
let daughter = familyMembers[3];
let baby = familyMembers[4]; */
let [dad, mum, son, daughter, baby] = familyMembers; //Destructuring syntax

console.log(
  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`
);
/*
Destructuring syntax
There is a way to extract all the values of an array into variable in just one 
line of code. This technique is called destructuring and it has a special syntax. 

EXERCISE
Rewrite the code below to use array destructuring instead of assigning each 
value to a variable.*/
let sentence = ["Hello", "Code", "Your", "Future"];

//let firstWord = item[0];
//let secondWord = item[1];
//let thirdWord = item[2];
//let fourthWord = item[3];
let [firstWord, secondWord, thirdWord, fourthWord] = sentence;
console.log(
  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`
);
/*
EXERCISE
We have a function called sumAndMultiply. It will take two numbers 
and then return an array where the first number is the sum of the two numbers,
and the second number is the multiplication of the two numbers. */
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

// Assign variables using array destructuring on this line
let [sum, multiply] = sumAndMultiply(2, 3);
console.log(
  `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`
);
/*
Which of the following lines of code can be used above?

A) let sum, multiply = sumAndMultiply(2, 3);
B) let [sumAndMultiply] = sumAndMultiply(2, 3);
C) let [sum, multiply] = sumAndMultiply(a, b);
D) let [sum, multiply] = sumAndMultiply(2, 3); 

EXERCISE
When you do array destructuring, the array can be of any data type.
Try destructuring with the next array, which contains objects.*/
let citiesByPopulation = [
  { name: "London", population: 8000000 },
  { name: "Birmingham", population: 1000000 },
  { name: "Glasgow", population: 600000 },
  { name: "Manchester", population: 500000 },
];

// Assign variables using array destructuring on this line
let [london, birmingham, glasgow, manchester] = citiesByPopulation;

console.log(`${london.name} population is ${london.population}`);
console.log(`${birmingham.name} population is ${birmingham.population}`);
console.log(`${glasgow.name} population is ${glasgow.population}`);
console.log(`${manchester.name} population is ${manchester.population}`);

/*More Exercises: 
Exercise 1
Rewrite the code below to use array destructuring instead of
assigning each value to a variable.*/
console.log("EXERCISE 1");
let item = ["Egg", 0.25, 12];
//let name = item[0];
//let price = item[1];
//let quantity = item[2];
let [name, quantity, price] = item;
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
console.log(" ");
/*Exercise 2
Rewrite the code below to use array destructuring instead of assigning
each value to a variable*/
console.log("EXERCISE 2");
let numbers = [3, 5, 4, 2, 6, 1];
let [one, two, three, four, five, six] = numbers.sort();
console.log(
  `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
);
console.log(" ");

/*Exercise 3
We have an object called 'user'. Write the destructuring assignment that reads:
- name property into the variable name.
- years property into the variable age.
- isAdmin property into the variable isAdmin (false, if no such property)
*/
console.log("EXERCISE 3"); //????????????????????????????????????????????????????????
let user = { name: "John", years: 30 };
// your code to the left side:
// ... = user

/*console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
console.log(" ");*/
let { name: Name, years: Age, isAdmin = false } = user;
console.log(Name); // John
console.log(Age); // 30
console.log(isAdmin);

/* Exercise 4
Rewrite the code below to use array destructuring instead of 
assigning each value to a variable.*/
console.log("EXERCISE 4");

let person = [12, "Chris", "Owen"];

//let firstName = person[1];
//let lastName = person[2];
//let age = person[0];
let [age, firstName, lastName] = person;

console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
console.log(" ");

/*Exercise 5
Rewrite the code below to use array destructuring instead of 
assigning each value to a variable.
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers*/
console.log("EXERCISE 5");
let personEx3 = ["Chris", 12, "Owen"];
//let firstNameEx3 = personEx3[0];
//let lastNameEx3 = personEx3[2];
//let ageEx3 = personEx3[1];
let [firstNameEx3, ageEx3, lastNameEx3] = personEx3;

console.log(`Name: ${firstNameEx3} ${lastNameEx3}`);
console.log(" ");

/*Exercise 6
Using Array Destructuring get the last name from the array. 
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers*/
console.log("EXERCISE 6");
const students = ["Christina", "Jon", "Alexandare"];
// Write your code here
let [first, second, last] = students;
console.log(last);
console.log(" ");

/*Exercise 7
Using Array Destructuring get all of the names from this Nested Array
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers*/
console.log("EXERCISE 7");
const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

// Write your code here
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);
console.log(" ");

/*Exercise 8
Using Array Destructuring get all of the names from this Nested Array
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers*/
console.log("EXERCISE 8");
const evenMoreStudents = [
  ["Ahmad", "Antigoni", "Philip"],
  "Chris",
  ["Toby", "Sam"],
];
// Write your code here
const [[student6, student7, student8], student9, [student10, student11]] =
  evenMoreStudents;
console.log(student6, student7, student8, student9, student10, student11);
console.log(" ");
