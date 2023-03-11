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

//.sort() 
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

 //.concat()
const arr = [1, 2, 3];
const newArr = arr.concat(4);

console.log(newArr);
console.log(arr); // logs [1, 2, 3, 4]

//.includes()
const mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

function isAMentor(name) {
  return mentors.includes(name);
}

console.log("Is Rukmuni a mentor?");
console.log(isAMentor("Rukmini")); // logs false

/*forEach()
Say we want to log to the console a list of names. */

const names = ["Daniel", "mozafar", "irina"];

//We can use .forEach() to go through the array, item by item,
// and call a function we provide.
names.forEach(function (name, index) {
  console.log(index + ": " + name);
});

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

names.forEach(log).map(formatName); // ERROR

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