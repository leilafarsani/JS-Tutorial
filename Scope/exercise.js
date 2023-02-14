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
