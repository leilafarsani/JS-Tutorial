/*Reduce
reduce method takes two parameter
1. A callback function with two parameters itself , accumulator and current value
2.Initialize Value for accumulator 
let myArr = [1,2,3,4,5];
const sum = myArr.reduce((acc,cur)=> {
return acc + cur;
},0);
console.log(sum);*/
let myArr = [1, 2, 3, 4, 5];
const sum =myArr.reduce((acc,cur) => acc + cur);
console.log(sum);
