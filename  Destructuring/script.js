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

let family = ["Homer", "Marge", "Bart", "Lisa", "Lilia"];

let [da, mu, so, ...other] = family;

console.log(
  `In the this family, ${da} and ${mu} are the parents. ${so} is the son`
);
console.log(...other);
console.log(other);
console.log(so);
/*Did you know that destructuring can also be used on objects as well.

We can use destructuring to extract values from an object and assign them to variables in one line.

```
let person = {
    firstName: "Bruce",
    lastName: "Wayne"
}

let { firstName, lastName } = person;

console.log(`Batman is ${firstName}, ${lastName}`);
```

The program above will print `Batman is Bruce Wayne`. Notice how we use the `{}` characters since it is an object rather than `[]` which is used when it is an array.

# Exercise

- What is the syntax to destructure the object `personOne` in exercise-1.js?
- Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.
 */
const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
const { name1, age1, favouriteFood1 } = personOne;
function introduceYourself(obj) {
  console.log(
    `Hello, my name is ${name1}. I am ${age1} years old and my favourite food is ${favouriteFood1}.`
  );
}

introduceYourself(personOne);
/*# Exercise 2

_Need some help? Refresh your memory with [this article](https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)_

In `exercise-2.js`, you have an array that contains a list of people who are at Hogwarts School of Witchcraft and Wizardry.
For each character you have the following information:

- First Name
- Last Name
- School House
- Pet
- Occupation

## Task 1

- In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
- Use array destructuring to extract the values you need out of the array.

### Expected result

```
Harry Potter
Ron Weasley
Hermione Granger
Minerva McGonagall
Albus Dumbledore
```

## Task 2

- In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
- Use array destructuring to extract the values you need out of the array.

### Expected result

```
Albus Dumbledore
```
 */
let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

const peopleOfTheGryffindorFinder = (arr) => {
  let peopleOfTheGryffindor = arr.filter(
    (people) => people.house === "Gryffindor"
  );
  peopleOfTheGryffindor.forEach((people) => {
    const { firstName, lastName } = people;
    console.log(`${firstName} ${lastName}`);
  });
};
peopleOfTheGryffindorFinder(hogwarts);

const teacherWithPetsFinder = (arr) => {
  let teacherWithPets = arr.filter(
    (people) => people.occupation === "Teacher" && people.pet !== null
  );
  teacherWithPets.forEach((people) => {
    const { firstName, lastName } = people;
    console.log(`${firstName} ${lastName}`);
  });
};

/*OR
const teacherWithPetsFinder = (arr) => {
  let teacherWithPets = arr.filter((people) => people.occupation === "Teacher");
  teacherWithPets.forEach((people) => {
    const { firstName, lastName, pet } = people;
    if (pet) console.log(`${firstName} ${lastName}`);
  });
};*/
teacherWithPetsFinder(hogwarts);

/*Write a program that will print out the receipt for this order.
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

Total: 14.47 */
let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
/*console.log("QTY\tITEM\t\t\tTOTAL");

let totalCost = 0;
for (let i = 0; i < order.length; i++) {
  //const item = order[i];
  const totalItemCost = order[i].quantity * order[i].unitPrice;
  totalCost += totalItemCost;

  console.log(
    `${order[i].quantity}\t${order[i].itemName}\t\t${totalItemCost.toFixed(2)}`
  );
}

console.log(`\nTotal: ${totalCost.toFixed(2)}`);*/

console.log("QTY".padEnd(10) + "ITEM".padEnd(20) + "TOTAL");

const { totalCost, orderDetails } = order.reduce(
  (accumulator, item) => {
    const totalItemCost = item.quantity * item.unitPrice;
    accumulator.totalCost += totalItemCost;
    accumulator.orderDetails.push({
      qty: item.quantity,
      itemName: item.itemName,
      total: totalItemCost.toFixed(2),
    });
    return accumulator;
  },
  { totalCost: 0, orderDetails: [] }
);

orderDetails.forEach(({ qty, itemName, total }) =>
  console.log(`${qty.toString().padEnd(10)}${itemName.padEnd(20)}${total}`)
);

console.log(`\nTotal: ${totalCost.toFixed(2)}`);
/*const giveTheReceipt = (orders) => {
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
