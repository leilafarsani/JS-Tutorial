/*Logical Operators
There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).
They let you write expressions that evaluate to a boolean value.
Suppose you want to test if a number is bigger than 3 and smaller than 10.
 We can write this, using different logical operators.*/
let num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}
console.log(satisfiesRequirements(4));

/*
 We can test expressions with logical operators in a node console too.
 EXERCISE
Type the following expressions into your Node and note the output. Anything you didn't expect?

let num = 10
num > 5 && num < 15
num < 10 || num === 10
false || true
!true
let greaterThan5 = num > 5
!greaterThan5
!(num === 10)
 

EXERCISE
In pairs, write a function that checks a username is of an acceptable format for a user type.
The function must:
take two parameters: one for the username and one for the user type
if the username starts with a capital letter and has length between 5 and 10 characters long, 
it must return "Username valid"; otherwise, it must return "Username invalid"
if the user type is an admin or a manager, all usernames must return "Username valid"*/
function checkUsername(username, userType) {
  if (userType === "admin" || userType === "manager") {
    return "Username valid";
  } else if (
    username[0] === username[0].toUpperCase() &&
    username.length >= 5 &&
    username.length <= 10
  ) {
    return "Username valid";
  } else {
    return "Username invalid";
  }
}
