function getFalsiness(value) {
  if (value) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}
console.log(getFalsiness(true));
/*EXERCISE 
Open your console and start node. Define the following function, getTruthiness: */
const getTruthiness = (value) => (value ? "Truthy!" : "Falsy");
// Call getTruthiness(null)
// Try each of the falsy values.
// How will you get 'Truthy!' to return?
// What would happen if you tried getTruthiness
//(getTruthiness(0)) ? Make a prediction and then test your theory.

/*Last week, we learned about loose equals == and strict equals === and why 
we should always use strict equality.
In your console, try comparing: */
console.log(getTruthiness(null == undefined));
console.log(getTruthiness(null === undefined));

//Now try doing the comparisons on their own:
console.log(getTruthiness(null == 0));
console.log(getTruthiness(null === 0));

console.log(null == undefined);
console.log(null === undefined);


