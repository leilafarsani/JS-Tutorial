// Arrays
// If you ever find yourself writing code like this...

const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Rares";

//then it's probably time to use an array! Arrays are data structures
//that hold a list of values. We call these values the elements of the array.

const mentors = ["Daniel", "Irina", "Rares"];

//Arrays can hold any type of value (although almost always you
//only have one data type per array).

const testScores = [16, 49, 85];
const grades = ["F", "D", "A"];
const greetings = ["Hello, how are you?", "Hi! Nice to meet you!"];

/*You can access elements in an array using the index of an element with bracket notation

🔔 Remember: All arrays start at position 0! To access the first 
element in an array, you need to access index 0, the second element
at 1, the fifth at 4 and so forth. This is called zero-based indexed 
arrays. There are some very intense reasons for this, but most people 
just accept it and move on. */

const trainees = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

trainees[0]; // "Ahmed"
trainees[3]; // "Nahidul"

//You can also assign new values to parts of an array://
trainees[2] = "Bianca";

console.log(trainees); // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]


/*EXERCISE
In Node, enter the following array:
 const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
 
 Now, using the correct indexes, get the following values from the array:

strawberry
kiwi
orange
banana
Then, replace 'apple' with 'raspberry', and replace 'fig' with 'pineapple'.

EXERCISE
Complete this function so that, if the second element in the array contains 
the name "Amy", it returns "Second element matched!"

function secondMatchesAmy(array) {
  if ( ) {
    return "Second element matched!";
  }
  return "Second element not matched";
}*/
function secondMatchesAmy(array) {
  if ( array[1] === "Amy" )  {
    return "Second element matched!";
  }
  return "Second element not matched";
}
console.log(secondMatchesAmy(trainees));

/*Using for loops with arrays
We can use the power of loops to run some code for each element 
in our array.
When we do this say we iterate over an array. */
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  const dayMessage = "day is: " + daysOfWeek[i];
  const indexMessage = "index is: " + i;
  console.log(indexMessage, dayMessage);
}
/*EXERCISE
Write a function which takes your trainees array as an input. 
In the function, use a for loop to iterate over the array and
print the name of each trainee to the console. */
function logTraineeNames(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(trainees[i]);
  }

}
logTraineeNames(trainees);
/*function logTraineeNames(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(trainees[i]);
  }
  return "finish";
}
console.log(logTraineeNames(trainees)); */
let traineeNames = [];
function getTraineeNames(trainees) {

  for (let i = 0; i < trainees.length; i++) {
    traineeNames.push(trainees[i]);
  }
  return traineeNames;
}
console.log(getTraineeNames(trainees));

for (let i = 0; i < traineeNames.length; i++){
    console.log(traineeNames[i]);
}
/*function printTrainees(trainees) {
  Array.from(trainees, trainee => console.log(trainee));
} */

/*EXERCISE
In pairs, write a function which squares all numbers in an
array and returns the array of squared numbers.
Write a second function which takes an input of arrays and only
returns an array of even numbers.
How can you combine the two functions to return an array of even
and squared numbers? */
numArr = [7, 8, 9, 10];
function squareArray(arr) {
  let squaredArr = [];
  for (let i = 0; i < arr.length; i++) {
    squaredArr.push(arr[i] * arr[i]);
  }
  return squaredArr;
}

function evenArray(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}

console.log(evenArray(squareArray(numArr)));

// EXERCISE
// Playing computer I
// Working in pairs or groups, you have to predict the output of this program without executing it.
// What is printed to the console?
// Have you learned anything new during this exercise?

const daysInWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function workingDay(day) {
  return day + " is a working day";
}

function weekendDay(day) {
  return day + " is at the weekend!";
}

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i < 5) {
    let day = workingDay(daysInWeek[i]);
    console.log(day);
  } else {
    let day = weekendDay(daysInWeek[i]);
    console.log(day);
  }
}
/*Playing computer II
Working in pairs or groups, you have to predict the output of this program without executing it.
What is printed to the console?
Have you learned anything new during this exercise? */

const a = 4;
const b = 8;

const multiplyNumbers = function (a, b) {
  return a * b;
};

const addNumbers = function (a, b, c) {
  return a + b + c;
};

for (let i = 0; i < 5; ++i) {
  if (i < 3) {
    const day = addNumbers(i, 2, a);
    console.log(day);
  } else {
    const day = multiplyNumbers(i, 4);
    console.log(day);
  }
}

// Playing computer III
// Again, working in pairs or groups, you have to predict the output of this program without executing it.
// What is printed to the console?
// What was difficult about this exercise?
// Have you learned anything new?
let x = 2;
let y = 4;
let p = 2;
let q = 20;

const f1 = function (p, q) {
  return p * b;
};

const f2 = function (p, q, c) {
  return p + q + c;
};

console.log(x);
x = 3;
y = f1(x, 2);
console.log(y);

for (let i = 0; i < 10; ++i) {
  p = p + 1;
  if (i % 2 === 0) {
    const d = f2(i, y, p);
    console.log(d);
  } else {
    const e = f1(i, 2);
    console.log(e);
  }
}