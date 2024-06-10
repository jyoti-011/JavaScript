// let score=33 =>number type
// let score="33" => string type converted to number type
// let score="33abc" => string type converted to number type but not a number
// let score = null // converts into number type and gives the value as 0

// let score = undefined // converts into number type but it has value NaN
// let score = true // converts boolean type to number type and gives the value 1 => true : 1 and false : 0

// let score = "abc" // converts into number type but give NaN as the output
// console.log(typeof score)

// let valueInNumber = Number(score)  // converting string into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber); //NaN => a special type which says it is not a number

// let loggedIn=""

// let booleanLoggedIn = Boolean(loggedIn)
// console.log(booleanLoggedIn);

// 1:true ; 0:false
// "" : false; "jyoti":true

// let someNumber=33
// let stringsomeNumber = String(someNumber)
// console.log(stringsomeNumber)
// console.log(typeof stringsomeNumber);

/* ***********************Operations***************************** */
let value=3
let negValue = -value
// console.log(negValue);

// console.log(2+2) //4
// console.log(3-2) //1
// console.log(3/2) // 1.5
// console.log(3*2) //6
// console.log(2**2)//4
// console.log(2%2) //0

let str1 =  "hello"
let str2 = " abc"
let str3 = str1+str2
// console.log(str3);

//number converted to string 
// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2);//122 => string was first therefore everything got converted to string
// console.log(1+2+"2")//32 => string was last therefore first number got evaluated and then got converted into string. For more information refer ecmascript documentation

// console.log(+true) //1 => the plus in the prefix converts it into value inorder to perform arithmetic operation. This is not the preferred conversion method 
// console.log(+"") // 0 => same as above

// let count = 100
// count++
// console.log(count);
// ++count
// console.log(count);
// console.log(count++);
// console.log(++count);
//refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion