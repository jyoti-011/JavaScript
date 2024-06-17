// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
//The above is Function definition
//The inputs taken during function definition is parameters
// addTwoNumbers(3,4) // 7
//This is function calling
//The inputs given during function calling is arguements

function addTwoNumbers(num1, num2){
    // let result = num1+num2
    // return result
    return num1+num2
    //console.log("Hello"); // This will execute because the function returns the value before this line
}
const result = addTwoNumbers(3,5)
// console.log(`Result : ${result}`); //Result : 8

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Ashish")) //Ashish just logged in

// console.log(loginUserMessage()) // undefined just logged in

function loginUserMessage(username="Alex"){  //username="Alex" default parameter
    // if(username === undefined{
    if(!username){
        console.log("Please enter the valid name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Alexa"))

// function calculatorCartPrice(...num1){ //rest operator 
//     return num1
// }
// console.log(calculatorCartPrice(200,30,23)); //[ 200, 30, 23 ]

//Note: ... is spread operator to concatenate two arrays or objects
//... rest operator when used with functions while passing parameters. It returns array of arguements 

function calculatorCartPrice(val1,val2,...num1){  
    console.log(val1,val2);
    return num1
}
// console.log(calculatorCartPrice(200,30,23,34,45));
/*
200 30
[ 23, 34, 45 ]
  */

//Using functions in object

const user = {
    username: "Alex",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
// handleObject(user) // Username is Alex and Price is 199
// handleObject({
//     username: "Alex",
//     price:399
// })  //Username is Alex and Price is 399

//Giving array as Parameter
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));//400
// console.log(returnSecondValue([200,400,100,600]));//400