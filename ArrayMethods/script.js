/*Reduce
reduce method takes two parameter
1. A callback function with two parameters itself , accumulator and current value
2.Initialize Value for accumulator 
let myArr = [1,2,3,4,5];
const sum = myArr.reduce((acc,cur)=> {
return acc + cur;
},0);
console.log(sum);*/
// let myArr = [1, 2, 3, 4, 5];
// const sum =myArr.reduce((acc,cur) => acc + cur);
// console.log(sum);
//Reduce 
// // // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// // const sumWithInitial = array1.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue
// // );

// //console.log(sumWithInitial);
// //Expected output: 10

/*# Exercise

_Need some help? Refresh your memory with [this article]
(https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)_

- In `exercise-3.js`, you have been provided with a takeout order. 
Write a program that will print out the receipt for this order.
- Log each individual item to the console.
- Log the total cost of the order to the console.

## Expected result

```
QTY     ITEM                TOTAL
1       Hot Cakes           2.29
2       Apple Pie           2.78
1       Egg McMuffin        2.80
1       Sausage McMuffin    3.00
2       Hot Coffee          2.00
4       Hash Brown          1.60

Total: 14.47

let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
WITHOUT REDUCE 
const giveTheReceipt = (orders) => {
  console.log("QTY".padEnd(10) + "Item".padEnd(20) + "Total");
  let orderCost = 0;
  orders.forEach((order) => {
    const { itemName, quantity, unitPrice } = order;
    const total = quantity * unitPrice;
    orderCost += total;
    console.log(
      `${quantity.toString().padEnd(10)}${itemName.padEnd(20)}${total}`
    );
  });
  console.log(`\nTotal: ${orderCost}`);
};

giveTheReceipt(order);*/

/*join
The join() method creates and returns a new string by concatenating all
of the elements in an array (or an array-like object), separated by commas
or a specified separator string. If the array has only one item, then that 
item will be returned without using the separator.
 */
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
console.log(a.join("")); // 'WindWaterFire'


//.sort() 
/*The sort() method sorts the elements of an array in place and returns the 
reference to the same array, now sorted. The default sort order is ascending,
 built upon converting the elements into strings, then comparing their sequences
of UTF-16 code units values.
The time and space complexity of the sort cannot be guaranteed as
it depends on the implementation. */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

const array2 = [51, 309, 4, 721, 100000];
array2.sort((a,b) =>a-b);
console.log(array2);


const unorderedLetters = ["z", "v", "b", "f", "g"];
const orderedLetters = unorderedLetters.sort();

const unorderedNumbers = [8, 5, 1, 4, 2];
const orderedNumbers = unorderedNumbers.sort();

console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
console.log(unorderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]

console.log(orderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
console.log(unorderedNumbers); // logs [ 1, 2, 4, 5, 8 ]

/*When you call this array method it uses the array
on the left side of the dot as an input, and it sorts 
that array also returning it. Notice that both ordered 
and unordered arrays are sorted now.
 */
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

//.concat()
const arr1 = [1, 2, 3];
const arr2 =[4,5,6];
const newArr1 = arr1.concat(4,5,"hggj",arr2);
const newArr2 = arr1.concat(arr2);

console.log(newArr1);
console.log(arr1);
console.log(newArr2); // logs [1, 2, 3]
console.log(arr1);


//.includes()
const mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

function isAMentor(name) {
  return mentors.includes(name);
}

console.log("Is Rukmuni a mentor?");
console.log(isAMentor("Rukmini")); // logs false

/*EXERCISE
Create a function which:

Takes an array of names as a parameter
Looks to see if your name is in the array
If it is, return Found me!; if not, return Haven't found me :( 
  
Here's an example function that takes an array of names as input, checks
if a specified name is in the array, and returns a message indicating whether or not it was found:*/
function findMyName(names, myName) {
  if (names.includes(myName)) {
    return "Found me!";
  } else {
    return "Haven't found me :(";
  }
}

const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
const myName = "Charlie";

console.log(findMyName(names, myName)); // Found me!
 

/*Use the array of the people from your table (or breakout room)
Combine it with another array filled with the names from another table
console.log the names in alphabetical order
Create a new value with the 2nd, 3rd and 4th people in it
Create a function that takes a name and an array of names and returns a string.
If the name is not in an array, it should return <name> is not sitting at the 
table with <people in the array>. If the name is in the array, 
it should return <name> is sitting at the table with <people in the array>. */
// Sample data
const table1 = ['Alice', 'Bob', 'Charlie'];
const table2 = ['David', 'Emily', 'Frank'];

// Concatenate the two arrays and sort alphabetically
const allNames = table1.concat(table2).sort();
console.log(allNames);

// Create a new array with the 2nd, 3rd and 4th people
const newPeople = allNames.slice(1, 4);
console.log(newPeople);

// Function to check if a name is in an array
function checkName(name, array) {
  if (array.includes(name)) {
    return name + ' is sitting at the table with ' + array.join(', ');
  } else {
    return name + ' is not sitting at the table with ' + array.join(', ');
  }
}

// Example usage of the checkName function
console.log(checkName('Alice', allNames));
console.log(checkName('Emily', allNames));

/* map() is a built-in higher-order function in JavaScript that allows
you to iterate over an array and transform each element in the array into a new value.

Here's an example of how to use map():
*/
const myNumbers = [1, 2, 3, 4, 5];

const doubledNumbers = myNumbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
/*In this example, we have an array of numbers and we want to create a new array
called doubledNumbers that contains each number in numbers multiplied by 2.
We use map() to iterate over numbers and return a new array of transformed values.

The map() method takes a callback function as an argument that defines how each element
in the array should be transformed. The callback function takes a single argument, which 
represents the current element being processed, and returns the new value for that element.

The new array that map() creates has the same length as the original array, with each element
corresponding to the transformed value of the corresponding element in the original array.

map() does not modify the original array; */

//EXERCISE   I have a function defined below as:

function abracaFunction(yourFunc) {
  console.log(
    "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
  );
  const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const abracaOutput = yourFunc(abracaArray);

  return abracaOutput;
}

// This function does not need to be modified. Can you pass in a callback 
//function which will mutate abracaArray such that it:
// Upper cases all letters in the array

function upperCaseArray(arr) {
  return arr.map(str => str.toUpperCase());
}

// Pass in upperCaseArray as the callback function
const result = abracaFunction(upperCaseArray);

console.log(result); // ["JAMES", "ELAMIN", "ISMAEL", "SANYIA", "CHRIS", "ANTIGONI"]

/*The upperCaseArray function takes in an array and uses the map method
to iterate over each string in the array and return a new array with all letters in uppercase.
When you pass upperCaseArray as the callback function to abracaFunction,
 it will apply this transformation to the abracaArray and return the resulting
array, which you can then log to the console.
 
EXERCISE
Modify your callback function from the previous exercise so that it also:

Sorts abracaArray in alphabetical order
*/
function upperCaseAndSortArray(arr) {
  const upperCasedArray = arr.map(str => str.toUpperCase());
  return upperCasedArray.sort();
}

// Pass in upperCaseAndSortArray as the callback function
const myResult = abracaFunction(upperCaseAndSortArray);

console.log(myResult); // ["ANTIGONI", "CHRIS", "ELAMIN", "ISMAEL", "JAMES", "SANYIA"]


/*forEach()
The forEach() method in JavaScript is used to iterate over an array 
and execute a provided function once for each element of the array.
The syntax for using forEach() is as follows:
array.forEach(function(currentValue, index, array) {
  // code to execute on each element
});
The forEach() method takes a callback function as an argument, 
which will be executed once for each element of the array. 
The callback function can take up to three arguments:

currentValue: The current element being processed in the array.
index: The index of the current element being processed in the array.
array: The array forEach() was called upon.
 */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

//Also we can have this

numbers.forEach(function (number, index, array) {
  console.log(
    "The value of element " + index + " is " + number + " in the array " + array
  );
});

/*Note that forEach() does not return a new array, but instead 
iterates over the existing array and modifies its elements or performs 
some action based on each element. If you need to create a new array with 
modified elements, you can use methods like map() or filter(). */

//Say we want to log to the console a list of names and their index.
const names = ["Daniel", "mozafar", "irina"];

//We can use .forEach() to go through the array,
// and call a function we provide.
names.forEach(function (name, index) {
  console.log(index+1 + ": " + name);
});
/*EXERCISE
Create a function that takes a birthYear, and returns the age of someone
You are given an array with year that 7 people were born,
[1964, 2008, 1999, 2005, 1978, 1985, 1919].
Take this array and create another array containing their ages.
console.log the birth years array

Here's an example function that takes a birth year as input and returns
the age of someone based on the current year:
 */


function calculateAge(birthYear) {
const currentYear = new Date().getFullYear();
 
  const age = currentYear - birthYear;
  return age;
  
}

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const ages = birthYears.map(year => calculateAge(year));

console.log(birthYears); // [1964, 2008, 1999, 2005, 1978, 1985, 1919]
console.log(ages); // [59, 15, 24, 18, 45, 38, 104]


/*Array filter
Imagine you have an array of trainees' test scores:
 */
const testScores = [90, 50, 100, 66, 25, 80, 81];
/*You want to show only the test scores that are higher than 80. 
How do you do that for every value in the array?
We can write a function that checks if one score is greater than 80: */
function isHighScore(score) {
  return score > 80;
}
/*To find out which scores were greater than 80, you'd have to
run this function against every score in the array, and push 
the 80+ scores into a new array. Thankfully there is an array
 method that does just this!

 .filter()
Runs every item in the array through a condition that we set, 
and returns a new array with the values that match the condition.*/

const highTestScores = testScores.filter(isHighScore);
console.log(highTestScores); // logs [90, 100, 81]

/*EXERCISE
Create a function which:

Takes an array of birthYears
Uses console.log to print the message These are the birth years of
people who can drive: <filtered birth years>
Returns an array of people who can drive (remember, you can drive if you are 17 years or older) */
function filterCanDrive(birthYears) {
  const currentYear = new Date().getFullYear();
  const canDriveYears = birthYears.filter((year) => currentYear - year >= 17);
  console.log(
    `These are the birth years of people who can drive: ${canDriveYears.join(
      ", "
    )}`
  );
  return canDriveYears;
}
const canDriveYears = filterCanDrive(birthYears);

console.log(canDriveYears);

//Array find
//Imagine you have an array of names:

const namess = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

/*How would you find the first name that's longer than 6 characters?
You can write a predicate function that checks if a string is longer
 than 6 characters:
 */
function isLongName(name) {
  return name.length > 6;
} 
/*To find the first item that satisfies the predicate you would
 have to go through each array item, and pass it into isLongName.
Once it returns true, we can stop going through the array and grab
the item that passed the predicate's test. Sounds complicated!
Thankfully there is an array method that does just this!

.find()
Searches through the array and returns the value of the first
item that satisfies a predicate function. */

const longName = namess.find(isLongName);

console.log(longName); // logs Mozafar

function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

function log(name, index) {
  console.log(index + ": " + name);
}

const namesFormatted = names.map(formatName);
namesFormatted.forEach(log);

/*It can be written more simply (without assigning the array returned 
from .map() to a variable): */

names.map(formatName).forEach(log);
//Be careful though! You can not call .map() after .forEach.

//names.forEach(log).map(formatName); // ERROR

/*This code does not work because forEach() does not return 
a new array (it returns undefined). The code is therefore 
attempting to call .map() on undefined, and undefined does 
not have a .map() method.

EXERCISE
Create a function which accepts an array of "messy" strings. Example:
 */

[
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];
/*This function should:

Remove all non-string entries
Change the strings to upper case, and add an exclamation mark to the end
If you're using the above example, you should expect to return an array 
with 2x ELAMIN!, 1x SANYIA!, 2x ISMAEL! and 1x JAMES!. */

function convertToUpperCaseWithExclamation(messyArray) {
  const titleCaseArray = messyArray
    .filter(item => typeof item === "string")
    .map(item => item.toUpperCase() + "!");
  return titleCaseArray;
}

const messyArray = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

const titleCaseArray = convertToUpperCaseWithExclamation(messyArray);

console.log(titleCaseArray); 
// [ 'ISMAEL!', 'SANYIA!', 'JAMES!', 'ELAMIN!', 'ISMAEL!', 'ELAMIN!' ]

/*The updated convertToUpperCaseWithExclamation function uses the filter method
to remove all non-string entries from the array, and then uses the map method
to convert each remaining string element to upper case and append an exclamation mark to the end.
In this example, we define an example messyArray and call the convertToUpperCaseWithExclamation 
function with it. The resulting array, titleCaseArray, is then logged to the console. 
The output matches the expected output described in the prompt. */




