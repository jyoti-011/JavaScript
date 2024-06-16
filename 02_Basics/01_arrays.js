//array
// const myarr = [0,1,2,3,4,5,true,'abc']
const myarr = [0,1,2,3,4,5]

const myarr2 = new Array(1,2,3,4) // declaring array by object 
// console.log(myarr2);
// console.log(myarr2[1]);

//Array Methods
// myarr.push(6) // adds element at the end of the array
// myarr.push(7) 
// myarr.pop() // removes element from the end of array

// myarr.unshift(9) // shifts all the elements of the array to add the element at first position / 0th index
// myarr.shift() // shifts all the elements to remove the element from the first position/0th index

// console.log(myarr.includes(9)); // checks if the given element is present in the array or not and returns true if present or false if not present
// console.log(myarr.indexOf(3)); // returns the index of the given element
// console.log(myarr);

const newarr=myarr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myarr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myarr); //object
// console.log(newarr); //0,1,2,3,4,5
// console.log(typeof newarr); //string

// slice and splice

console.log('A',myarr);
let mynewarr1 = myarr.slice(1,3) // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(mynewarr1);

console.log('B',myarr);
let mynewarr2 = myarr.splice(1,3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log('C',myarr);
console.log(mynewarr2);
