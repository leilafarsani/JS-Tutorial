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