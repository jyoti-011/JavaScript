//singleton objedts -> the objects created with constructor
// Object.create

//Object literals

const mysym= Symbol("Key1")
const JsUser ={
    name:"Abhay",
    age: 18,
    "div":21,
    [mysym]:"mykey1",
    location:"Kerala",
    email:"abhay@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
} //key is string though we dont write like it

//Accessing the object

// console.log(JsUser.email); //abhay@gmail.com
// console.log(JsUser["email"]); //abhay@gmail.com
// console.log(JsUser["div"]); //21
// console.log(JsUser[mysym]); //mykey1
// console.log(JsUser);
/*
{
  name: 'Abhay',
  age: 18,
  div: 21,
  location: 'Kerala',
  email: 'abhay@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(Key1)]: 'mykey1'
}
*/
//You can change the value of objects
// JsUser.email = "abhaya@gmail.com"
// console.log(JsUser.email);

// //You can freeze the value of object
// Object.freeze(JsUser)
// JsUser.email = "abhayachatgpt@gmail.com"
// console.log(JsUser);

//Adding a function in object
JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting);//[Function (anonymous)]
JsUser.greeting(); //Hello Js User

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
JsUser.greetingTwo();//Hello Js User, Abhay