// Primitive Datatype (Call by Value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score=100 //number
const value=100.3 // number
const isLoggedIn = false //boolean
const outsideTemp=null //null
let userEmail; //undefined
const id = Symbol('123')
const anotherId= Symbol('123')
// console.log(id===anotherId); //Symbols are unique. Even though two different variables having same symbol but they are different they can't be same.

const bigNumber=2353432442532435454n
// console.log(bigNumber);

// Reference (Non-Primitive) (Call by reference)
//Arrays, Objects, Functions

//Array
const arr = [1,2,3,4,5]
// console.log(arr);

//Object
let myobj={
    name:"abc",
    age:23,
}

//Function
const myfunction = function(){
    console.log("hello world");
}
// myfunction()


//To find out the type of variable use typeof
// console.log(typeof score);   //number
// console.log(typeof value);   //number
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof outsideTemp);//object
// console.log(typeof userEmail); //undefined
// console.log(typeof id);//symbol
// console.log(typeof bigNumber);//bigint
// console.log(typeof arr);//object
// console.log(typeof myobj);//object
// console.log(typeof myfunction);//function

/* *********************************************************************** */

//Memory Management
/*
There are two types of memory:
1.Stack - It stores Primitive datatypes
2.Heap - It stores Non-Primitive Datatypes*/

//Example:
let myYoutubeChannelname="Tesla"
let anotherName=myYoutubeChannelname
anotherName="Tessy"
console.log(myYoutubeChannelname);
console.log(anotherName);
//In stack the copy of value is assigned therefore original value is not changed

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="abc@google.com"
console.log(userOne.email);
console.log(userTwo.email);
//In heap the reference of the value is assigned therefore original value is also changed