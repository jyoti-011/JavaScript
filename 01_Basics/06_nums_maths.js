const score=400 //normal way of defining a number
// console.log(score);
const balance = new Number(100) // defining a number by object method
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance);
// console.log(balance.toFixed(2)); //Returns a string representing a number in fixed-point notation.

//1.12e+3
const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3));//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits or rounded of.
const otherNumberOne = 123.8966
// console.log(otherNumberOne.toPrecision(3));//124
const otherNumberTwo = 23.8966
// console.log(otherNumberTwo.toPrecision(3));//23.9

const hundreds=1000000
// console.log(hundreds.toLocaleString());//US system
// console.log(hundreds.toLocaleString('en-IN'));//Indian System

// ++++++++++++++++++++ MATHS +++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(4)); //4
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.round(4.1)); //4
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.1)); //4
// console.log(Math.min(4,5,3,2,0)); //0
// console.log(Math.max(4,5,3,2,0)); //5

// console.log(Math.random()); // Math.random() gives values between 0 and 1

console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1)+10);
const max=20
const min=10
console.log(Math.floor((Math.random()*(max-min)+1)+min));
