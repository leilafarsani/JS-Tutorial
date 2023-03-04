// // //let x = 10;
// // //let y = 15;
// // //let p = 3;
// // //x = x + y;
// // //x+=y

// // //let x = x ** 2;
// // //x **= 2;
// // //x = x **  p;
// // //x **= p;

// // console.log(x);

// // let numberOfTrainees = 15;
// // let numberOfMentors = 8;
// // let total = numberOfMentors + numberOfTrainees;
// // console.log(total);

// // let percentageOfTrainees = (numberOfTrainees / total) * 100;
// // let rounded = Math.round(percentageOfTrainees);
// // console.log(rounded + "%");

// // //declaration
// // /*function addition (a,b){
// //     return a+b;
// // }*/

// // //const addition =  (a, b) => return a + b;

// // //console.log(addition(5, 8));
// // function formatPenceToPounds(num){
// // return "$" + num /100;
// // }
// // console.log(formatPenceToPounds(199));

// // function getMessage(name ='name') {
// //   return "Hello, nice to meet you " + name;
// // }
// // console.log(getMessage('leila'));
// // const array1 = [1, 2, 3, 4];

// /* let x1 = 1;
//     function f1()
//    {
//         let x1= 2;
//        console.log(x1);
//    }
//    console.log(x1);
//    let x2 = 10
//    */

// // const x = 9;
// // function f1(val) {
// //   val = val + 1;
// //   return val;
// // }
// // f1(x);
// // console.log(x);

// // const y = { x: 9 };
// // function f2(val) {
// //   val.x = val.x + 1;
// //   return val;
// // }
// // f2(y);
// // console.log(y);
// // let fruits = ["apple", "orange", "banana"];

// // let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
// // let [dad, mum, son, daughter, baby] = familyMembers;
// // const checkIsTrue = (expression) => {
// //   if (expression) {
// //     return "Yes, this expression evaluates to true!";
// //     } else {
// //     return "No, this expression evaluates to false!";
// // }
// // }
// // console.log(checkIsTrue(1 < 2));
// // // and...
// // console.log(checkIsTrue());
// /*
// function checkIsTrue(expression) {
  
//    * Checks if an expression evaluates to true or false.
//    * @param {any} expression - The expression to evaluate.
//    * @returns {boolean} - True if the expression is true, false otherwise.
   
//   return Boolean(expression);
// }
//  */
// console.log(typeof true);
// const mentorCount = 10;
// const traineeCount = 20;
// checkIsTrue(mentorCount < traineeCount);

// const capacity = 30;
// const people = 16;
// checkIsTrue(capacity > people);

// const organisation = "FILL_ME_IN";
// checkIsTrue(typeof organisation === "string");
// checkIsTrue(organisation.startsWith("Code"));
// checkIsTrue(organisation.includes(" your "));
// checkIsTrue(organisation.endsWith("Future!"));

// const mystery = true;
// checkIsTrue(typeof mystery === "boolean");
// checkIsTrue(!mystery);

// // Don't change anything below this point
// var FILL_ME_IN;
// function checkIsTrue(value1) {
//   if (value1) {
//     // "\x1b[32m%s\x1b[0m" will change console output to green
//     console.log(
//       "\x1b[32m%s\x1b[0m",
//       "Yes, this expression evaluates to true! ✅"
//     );
//   } else {
//     // "\x1b[31m%s\x1b[0m" will change console output to red
//     console.log(
//       "\x1b[31m%s\x1b[0m",
//       "Sorry, this expression evaluates to false! ❌"
//     );
//   }
// }

// function isEven(number) {
//   /*
//    * Checks if a number is even or odd.
//    * @param {number} number - The number to check.
//    * @returns {boolean} - True if the number is even, false otherwise.
//    */
//   return number % 2 === 0;
// }
// console.log(isEven(21));
// function getMoodMessage(mood) {
//   /*
//    * Returns a message based on the input mood.
//    * @param {string|number} mood - The mood to check.
//    * @returns {string} - A message based on the input mood.
//    */
//   if (mood === "happy") {
//     return "Good job, you're doing great!";
//   } else if (mood === "sad") {
//     return "Every cloud has a silver lining";
//   } else if (typeof mood === "number") {
//     return "Beep beep boop";
//   } else {
//     return "I'm sorry, I'm still learning about feelings!";
//   }
// }

// console.log(getMoodMessage("happy"));

// let num = 10;

// /*function satisfiesRequirements(num) {
//   return (num > 3 && num < 10) 
// }*/

// function satisfiesRequirements(num) {
//   if (num > 3 && num < 10) {
//     return true;
//   }

//   return false;
// }
// console.log(satisfiesRequirements(89));

// function checkUsername(username, userType) {
//   /*
//    * Checks if a username is valid based on its format and user type.
//    * @param {string} username - The username to check.
//    * @param {string} userType - The user type.
//    * @returns {string} - "Username valid" if the username is valid, "Username invalid" otherwise.
//    */
//   //   if (userType === "admin" || userType === "manager") {
//   //     return "Username valid";
//   //   } else if (
//   //     username.length >= 5 &&
//   //     username.length <= 10 &&
//   //     /^[A-Z]/.test(username)
//   //   ) {
//   //     return "Username valid";
//   //   } else {
//   //     return "Username invalid";
//   //   }
//   // }
//   if (userType === "admin" || userType === "manager") {
//     return "Username valid";
//   } else if (
//     username.length >= 5 &&
//     username.length <= 10 &&
//    username[0] === username[0].toUpperCase() 
//   ) {
//     return "Username valid";
//   } else {
//     return "Username invalid";
//   }
// }


// console.log(checkUsername("Leila", "admin"));

// // let i =0;
// // let sum =0;
// // const getSum =(n) => {
// // while (i <= n) {
// //   sum += i;
// //   i++;
// // }
// // return sum;
// // }
// let sum = 0;
// const getSum = (n) => {
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSum(3));

// const myName = "Sally";

// for (const letter of myName) {
//   console.log(letter);
// }
// console.log(myName.length); //5
// console.log(myName[1]); //a

// /*// Get the first player's name and the letter to use for the rule
// const playerName = prompt("Enter your first name:");
// const letterToUse = prompt("Enter a letter to use for the rule:");

// // Create the rule for the second player
// const rule = `For each letter of your name, if that letter is '${letterToUse.toUpperCase()}', make a funny face.`;

// // Display the rule for the first player to read aloud to the second player
// alert(`Your rule is: "${rule}"`);

// // Get the second player's name
// const partnerName = prompt("Enter your first name:");

// // Loop through the letters of the second player's name and apply the rule
// for (const letter of partnerName) {
//   if (letter.toUpperCase() === letterToUse.toUpperCase()) {
//     console.log(`Letter ${letter}: make a funny face`);
//   } else {
//     console.log(`Letter ${letter}`);
//   }
// }

// // Swap roles and play again!
//  */
// function getMood(mood) {
//   let isHappy = true;

//   if (mood === isHappy) {
//     return "I am happy";
//   } else {
//     return "I am not happy";
//   }
// }
// console.log(getMood("aaaa"))

// function greaterThan10(num) {
//   let isBigEnough = 10;

//   if (num > isBigEnough)  {
//     return "num is greater than 10";
//   } else {
//     return "num is not big enough";
//   }
// }
// console.log(greaterThan10(40));

// function printOddNumbers(limit) {
// let number = 1;

// while(number <= limit) {
//  console.log(number);
//  number += 2;
// }
// return number;
// }
// printOddNumbers(10);

// function buyTwoGetTheCheapestFree(price1, price2) {
//   let total = 0;

//   if (price1 < price2) {
//     total = price2;
//   } else if (price1 > price2) {
//     total = price1;
//   } else {
//     total = price1;
//   }
//   return total;
// }
// function canRegister(age) {
//   if (age <= 12) {
//     return "You Are Too Young To Register";
//   } else if (age > 12 && age < 90) {
//     return "You Can Register";
//   } else {
//     return "You Don't Need To Register";
//   }
// }
// function factorial(input) {
//   let fact = 1;
//   for (let i = 1; i <= input; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// function factorial_2(input) {
//   let i = 1;
//   let factorial = 1;

//   while(i <= input) {
//     factorial *= i;
//     i++;
//   }
 
//   return factorial;
// }
// console.log(factorial_2(5));

// function countReverse(number) {
//   while (number >= 1) {
//     console.log(number);
//     number--;
//   }
//   return number;
// }
// countReverse(10);

// function increment(number) {
//   let i = 1;
//   while (i <= number) {
//     console.log(i);
//     i++;
//   }
//   return number;
// }
// increment(10);


// function checkIsTrue(expression){
// if (expression) { 
//     return 'Yes, this expression evaluates to true!';
// }
// else{
//     return 'No, this expression evaluates to false!';
// }
// };
// console.log(checkIsTrue(25));

// const mentorCount = 12;
// const traineeCount = 5;
// checkIsTrue(mentorCount < traineeCount);

// const capacity ="Leila" ;
// const people = "Leila Par ";
// console.log(checkIsTrue(capacity === people));

// const organisation ='Code Your Future';
// checkIsTrue(typeof organisation === "string");
// checkIsTrue(organisation.startsWith("code"));
// checkIsTrue(organisation.includes(" your "));
// checkIsTrue(organisation.endsWith("Future!"));

// const mystery = "llll";
// checkIsTrue(typeof mystery === "boolean");
// checkIsTrue(!mystery);

// // Don't change anything below this point
// //var FILL_ME_IN;
// function checkIsTrue(value1) {
//   if (value1) {
//     // "\x1b[32m%s\x1b[0m" will change console output to green
//     console.log(
//       "\x1b[32m%s\x1b[0m",
//       "Yes, this expression evaluates to true! ✅"
//     );
//   } else {
//     // "\x1b[31m%s\x1b[0m" will change console output to red
//     console.log(
//       "\x1b[31m%s\x1b[0m",
//       "Sorry, this expression evaluates to false! ❌"
//     );
//   }
// }

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(11));

let isHappy = true;

if (0) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}

