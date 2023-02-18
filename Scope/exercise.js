/*EXERCISE
In small groups answer the following the questions.

Try to solve each exercise before running code to verify answer. 
Try to explain your answer using what you learned above about scope.
Think about the order JavaScript will execute each piece of code and 
what the values will be at each stage.*/
// 1.
function one() {
  var a = 10;
}
one();
console.log(a); // what is the value of a

// 2.
function two() {
  let b = 10;
}
two();
console.log(b); // what is the value of b and why

// 3.
let c;
function three() {
  c = 25;
}
three();
console.log(c); // what is the value of c and why

// 4.
function four() {
  d = 25;
}
four();
console.log(d); // what is the value of d and why

// 5.
let e;
function five() {
  const greeting = "Hello";

  function greet() {
    let name = "Eddie";
    e = `${greeting} ${name}`;
  }
  greet();
}
five();
console.log(e); // what is the value of e and why

// 6.
function six() {
  if (true) {
    let f = 50;
  }
  console.log(f); // what is the value of f and why
}
six();

/*# Code reading
## Question 1
Take a look at the following code:*/

    let x1 = 1;
    function f1()
    {
        let x1= 2;
        console.log(x1);
    }
    console.log(x1);

/*
Explain why line 4 and line 6 output different numbers.

The variable x in the function, has function scope so when
 we log it inside the function its output is 2. However, the 
 last console.log outside the function, will refer to the global-scoped 
 variable x so its output is 1.

## Question 2

Take a look at the following code:*/


let x2= 10;

function f2()
{
    console.log(x2);
    let y = 20;
}

console.log(f2());
console.log(y);
/*

What will be the output of this code. Explain your answer in 50 words or less.

10
undefined
Here the variable x has a global scope, so it can be accessible from outside the function. However, the variable y is declared within the function and has function scope, so we can't log it from outside the function.

## Question 3

Take a look at the following code:*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}


/* 
What will be the output of this code. Explain your answer in 50 words or less.
9
{ x: 10 }
When we log the variable x the output is still 9 because x has global 
scope not function scope and it wouldn't be incremented. However, the 
last console.log will change the value of the object because we are passing
an argument as reference(since it is object), so it can be modified by function.

(OR)

The output of the first console.log() statement will be 9,
and the output of the second console.log() statement will 
be { x: 10 }. This is because primitive types like number
are passed by value, so when x is passed to f1(), it's a copy
of the value of x, not a reference to x itself. However, objects
are passed by reference, so when y is passed to f2(), any changes
made to the object inside the function are reflected outside of the function.
 */
 

const myArr = [2, 4, 6];

function f3(arr){
  newArr =arr.push();
  return newArr;
}
f3();
console.log(arr)
