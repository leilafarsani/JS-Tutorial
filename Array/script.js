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
function printTrainees(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
   
}
console.log(printTrainees(trainees));